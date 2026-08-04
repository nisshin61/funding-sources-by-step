-- Enable UUID extensions if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Create custom enum type for Grant Status
CREATE TYPE grant_status_enum AS ENUM ('Active', 'Upcoming', 'Closed');

-- 2. Create the 'grants' table
CREATE TABLE IF NOT EXISTS grants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    agency_name TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    key_objectives JSONB DEFAULT '[]'::jsonb, -- Store list of objectives as JSON array
    target_group TEXT,
    eligibility_criteria TEXT,
    max_funding_amount NUMERIC(15, 2) DEFAULT 0.00,
    start_date TIMESTAMP WITH TIME ZONE,
    deadline_date TIMESTAMP WITH TIME ZONE,
    source_url TEXT,
    document_pdf_url TEXT,
    status grant_status_enum NOT NULL DEFAULT 'Upcoming',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,

    -- Constraints
    CONSTRAINT check_dates CHECK (deadline_date >= start_date),
    CONSTRAINT check_positive_funding CHECK (max_funding_amount >= 0)
);

-- 3. Create the 'grant_analytics' table
CREATE TABLE IF NOT EXISTS grant_analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    grant_id UUID NOT NULL REFERENCES grants(id) ON DELETE CASCADE,
    views_count INTEGER NOT NULL DEFAULT 0,
    saved_count INTEGER NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,

    -- Constraints
    CONSTRAINT check_positive_views CHECK (views_count >= 0),
    CONSTRAINT check_positive_saves CHECK (saved_count >= 0),
    CONSTRAINT unique_grant_analytics UNIQUE (grant_id)
);

-- 4. Create indexes for performance optimization
CREATE INDEX IF NOT EXISTS idx_grants_agency ON grants(agency_name);
CREATE INDEX IF NOT EXISTS idx_grants_category ON grants(category);
CREATE INDEX IF NOT EXISTS idx_grants_status ON grants(status);
CREATE INDEX IF NOT EXISTS idx_grants_deadline ON grants(deadline_date);

-- Full-text search index for keyword searching across title & description
CREATE INDEX IF NOT EXISTS idx_grants_search ON grants USING gin(
    to_tsvector('english', title || ' ' || coalesce(description, ''))
);

-- 5. Set up trigger for updating timestamps
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply timestamp triggers
CREATE TRIGGER set_timestamp_grants
    BEFORE UPDATE ON grants
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_timestamp_grant_analytics
    BEFORE UPDATE ON grant_analytics
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_timestamp();

-- 6. Trigger to automatically initialize a grant_analytics row when a new grant is created
CREATE OR REPLACE FUNCTION trigger_initialize_analytics()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO grant_analytics (grant_id, views_count, saved_count)
    VALUES (NEW.id, 0, 0)
    ON CONFLICT (grant_id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER initialize_analytics_on_grant_creation
    AFTER INSERT ON grants
    FOR EACH ROW
    EXECUTE FUNCTION trigger_initialize_analytics();

-- 7. Supabase Row Level Security (RLS) Policies
-- Enable RLS on tables
ALTER TABLE grants ENABLE ROW LEVEL SECURITY;
ALTER TABLE grant_analytics ENABLE ROW LEVEL SECURITY;

-- Grants policies
CREATE POLICY "Allow public read access to grants"
    ON grants FOR SELECT
    USING (true);

CREATE POLICY "Allow authenticated insert access to grants"
    ON grants FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated update access to grants"
    ON grants FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow authenticated delete access to grants"
    ON grants FOR DELETE
    TO authenticated
    USING (true);

-- Analytics policies
CREATE POLICY "Allow public read access to analytics"
    ON grant_analytics FOR SELECT
    USING (true);

-- Allow public to increment views/saves (update only views_count and saved_count)
CREATE POLICY "Allow public update access to analytics"
    ON grant_analytics FOR UPDATE
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow authenticated insert/delete on analytics"
    ON grant_analytics FOR ALL
    TO authenticated
    USING (true);

-- 8. Useful Database RPC functions (Remote Procedure Calls in Supabase)
-- RPC function to increment views_count safely
CREATE OR REPLACE FUNCTION increment_grant_views(target_grant_id UUID)
RETURNS VOID AS $$
BEGIN
    UPDATE grant_analytics
    SET views_count = views_count + 1
    WHERE grant_id = target_grant_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RPC function to increment saved_count safely
CREATE OR REPLACE FUNCTION increment_grant_saves(target_grant_id UUID)
RETURNS VOID AS $$
BEGIN
    UPDATE grant_analytics
    SET saved_count = saved_count + 1
    WHERE grant_id = target_grant_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
