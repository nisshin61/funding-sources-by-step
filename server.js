const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');
const { extractGrantDetails } = require('./services/aiExtractor');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Supabase Client
// Fallback to placeholder URLs if environment variables are not yet configured
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://your-supabase-project.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || 'your-supabase-anon-key';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log(`Supabase Client initialized with URL: ${SUPABASE_URL}`);

// --- API ROUTES ---

// 0. POST /api/grants/extract - Extract structured metadata using LLM (and optionally save)
app.post('/api/grants/extract', async (req, res) => {
    try {
        const { text } = req.body;
        const { save = 'false' } = req.query;

        if (!text || text.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Request body must contain a "text" field with unstructured content.'
            });
        }

        // Call Gemini extract helper
        const extracted = await extractGrantDetails(text);

        // If save query param is true, map parameters and write to Supabase
        if (save === 'true') {
            // Map AI extracted JSON fields to our DB Schema columns
            const dbPayload = {
                title: extracted.title,
                agency_name: extracted.agency_name,
                category: extracted.category,
                description: extracted.summary,
                key_objectives: extracted.key_objectives,
                target_group: extracted.target_group,
                eligibility_criteria: extracted.eligibility,
                max_funding_amount: extracted.funding_limit || 0.00,
                deadline_date: extracted.deadline || null,
                status: extracted.deadline && new Date(extracted.deadline) < new Date() ? 'Closed' : 'Active',
                start_date: new Date().toISOString()
            };

            const { data: newGrant, error } = await supabase
                .from('grants')
                .insert([dbPayload])
                .select()
                .single();

            if (error) throw error;

            return res.status(201).json({
                success: true,
                message: 'AI Agent successfully extracted and saved grant details.',
                data: {
                    extracted,
                    database_record: newGrant
                }
            });
        }

        // Default response: Return only extracted JSON
        return res.json({
            success: true,
            data: extracted
        });

    } catch (err) {
        console.error('Error in AI extraction route:', err.message);
        return res.status(500).json({
            success: false,
            message: 'AI Extraction agent failed to process the request.',
            error: err.message
        });
    }
});

// 1. GET /api/grants - Read All (with search, filter, and pagination)
app.get('/api/grants', async (req, res) => {
    try {
        const { search, agency, category, status, page = 1, limit = 10 } = req.query;

        // Base query
        let query = supabase
            .from('grants')
            .select(`
                *,
                grant_analytics (
                    views_count,
                    saved_count
                )
            `, { count: 'exact' });

        // Apply Agency Filter
        if (agency && agency !== 'All') {
            query = query.eq('agency_name', agency);
        }

        // Apply Category Filter
        if (category && category !== 'All') {
            query = query.eq('category', category);
        }

        // Apply Status Filter
        if (status && status !== 'All') {
            query = query.eq('status', status);
        }

        // Apply Keyword Search (searches title, description, or target group)
        if (search) {
            // Option A: Use PostgreSQL Full-text Search (Supabase textSearch)
            query = query.textSearch('fts', search, { config: 'english', type: 'plain' });
            
            // Option B fallback: Or query using ilike on title
            // query = query.ilike('title', `%${search}%`);
        }

        // Apply Pagination
        const from = (page - 1) * limit;
        const to = from + parseInt(limit) - 1;
        query = query.range(from, to);

        // Sort by created date or deadline (Active status first)
        query = query.order('status', { ascending: true })
                     .order('deadline_date', { ascending: true });

        // Execute query
        const { data, error, count } = await query;

        if (error) throw error;

        return res.json({
            success: true,
            count,
            page: parseInt(page),
            limit: parseInt(limit),
            data
        });

    } catch (err) {
        console.error('Error fetching grants:', err.message);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch grants data.',
            error: err.message
        });
    }
});

// 2. GET /api/grants/:id - Read Single (and automatically increment views)
app.get('/api/grants/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Fetch grant details
        const { data: grant, error } = await supabase
            .from('grants')
            .select(`
                *,
                grant_analytics (*)
            `)
            .eq('id', id)
            .single();

        if (error) {
            if (error.code === 'PGRST116') {
                return res.status(404).json({ success: false, message: 'Grant not found.' });
            }
            throw error;
        }

        // Safely trigger background RPC view increment without blocking response
        supabase.rpc('increment_grant_views', { target_grant_id: id })
            .then(({ error: rpcErr }) => {
                if (rpcErr) console.error('Failed to increment views:', rpcErr.message);
            });

        return res.json({
            success: true,
            data: grant
        });

    } catch (err) {
        console.error('Error fetching single grant:', err.message);
        return res.status(500).json({
            success: false,
            message: 'Failed to retrieve grant details.',
            error: err.message
        });
    }
});

// 3. POST /api/grants - Create New Grant
app.post('/api/grants', async (req, res) => {
    try {
        const grantPayload = req.body;

        // Validate required fields
        const required = ['title', 'agency_name', 'category', 'status'];
        const missing = required.filter(field => !grantPayload[field]);

        if (missing.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Missing required parameters: ${missing.join(', ')}`
            });
        }

        // Insert new grant
        const { data: newGrant, error } = await supabase
            .from('grants')
            .insert([grantPayload])
            .select()
            .single();

        if (error) throw error;

        // Note: The SQL trigger initialize_analytics_on_grant_creation
        // automatically creates the matching entry in 'grant_analytics' table.

        return res.status(201).json({
            success: true,
            message: 'Grant successfully aggregated.',
            data: newGrant
        });

    } catch (err) {
        console.error('Error creating grant:', err.message);
        return res.status(500).json({
            success: false,
            message: 'Failed to create grant announcement.',
            error: err.message
        });
    }
});

// 4. PUT /api/grants/:id - Update Grant
app.put('/api/grants/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatePayload = req.body;

        // Update fields (excluding generated columns)
        delete updatePayload.id;
        delete updatePayload.created_at;
        delete updatePayload.updated_at;

        const { data: updatedGrant, error } = await supabase
            .from('grants')
            .update(updatePayload)
            .eq('id', id)
            .select()
            .single();

        if (error) {
            if (error.code === 'PGRST116') {
                return res.status(404).json({ success: false, message: 'Grant to update not found.' });
            }
            throw error;
        }

        return res.json({
            success: true,
            message: 'Grant details successfully updated.',
            data: updatedGrant
        });

    } catch (err) {
        console.error('Error updating grant:', err.message);
        return res.status(500).json({
            success: false,
            message: 'Failed to update grant announcement.',
            error: err.message
        });
    }
});

// 5. DELETE /api/grants/:id - Delete Grant
app.delete('/api/grants/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const { error } = await supabase
            .from('grants')
            .delete()
            .eq('id', id);

        if (error) throw error;

        // Cascading delete constraint automatically removes related rows in grant_analytics.

        return res.json({
            success: true,
            message: 'Grant and associated analytics removed successfully.'
        });

    } catch (err) {
        console.error('Error deleting grant:', err.message);
        return res.status(500).json({
            success: false,
            message: 'Failed to delete grant announcement.',
            error: err.message
        });
    }
});

// 6. POST /api/grants/:id/save - Increment Saved Counts
app.post('/api/grants/:id/save', async (req, res) => {
    try {
        const { id } = req.params;

        // Trigger safe RPC command to increment bookmark count without race conditions
        const { data, error } = await supabase.rpc('increment_grant_saves', { target_grant_id: id });

        if (error) throw error;

        return res.json({
            success: true,
            message: 'Grant save/bookmark count incremented.'
        });

    } catch (err) {
        console.error('Error saving grant:', err.message);
        return res.status(500).json({
            success: false,
            message: 'Failed to update save counters.',
            error: err.message
        });
    }
});

// 7. GET /api/analytics/summary - Get aggregated summaries for Dashboard Charts
app.get('/api/analytics/summary', async (req, res) => {
    try {
        // Query active counts
        const { data: grantsList, error: grantsErr } = await supabase
            .from('grants')
            .select('agency_name, category, status, max_funding_amount');

        if (grantsErr) throw grantsErr;

        // Query top-performing (most viewed) grants
        const { data: topGrants, error: analyticsErr } = await supabase
            .from('grants')
            .select(`
                id,
                title,
                agency_name,
                grant_analytics (views_count, saved_count)
            `)
            .order('grant_analytics(views_count)', { ascending: false, nullsFirst: false })
            .limit(5);

        if (analyticsErr) throw analyticsErr;

        // Calculate summary aggregations
        const summary = {
            totalGrants: grantsList.length,
            activeGrants: grantsList.filter(g => g.status === 'Active').length,
            upcomingGrants: grantsList.filter(g => g.status === 'Upcoming').length,
            closedGrants: grantsList.filter(g => g.status === 'Closed').length,
            agencies: {},
            categories: {},
            totalFundingAvailable: 0
        };

        grantsList.forEach(g => {
            // Count by agency
            summary.agencies[g.agency_name] = (summary.agencies[g.agency_name] || 0) + 1;
            // Count by category
            summary.categories[g.category] = (summary.categories[g.category] || 0) + 1;
            // Cumulative potential funding
            summary.totalFundingAvailable += parseFloat(g.max_funding_amount || 0);
        });

        return res.json({
            success: true,
            summary,
            topViewedGrants: topGrants
        });

    } catch (err) {
        console.error('Error generating analytics summary:', err.message);
        return res.status(500).json({
            success: false,
            message: 'Failed to compile reporting data.',
            error: err.message
        });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`API Server is running on port ${PORT}`);
});
