# AI Grant Aggregator Platform

An internal team dashboard for searching, filtering, and reviewing AI-extracted grant announcements from Thai and global funding bodies.

## Features
- **Sidebar Navigation**: Seamless switching between Dashboard, Grants Directory, Saved Grants, Analytics, and Settings.
- **Top Bar**: Search bar and multi-filter system (Agency, Category, Status: Active/Expired).
- **Metric Cards**: Real-time count of total active grants, new additions this week, urgent deadlines (< 7 days), and bookmarked (saved) grants.
- **Grant Cards**: Displays grant title, source agency (e.g. บพข., วช., NIA, global agencies), target audience, key criteria summary, and a dynamic deadline urgency badge (pulsing red for < 7 days, amber for 7-30 days, green for > 30 days).
- **Interactive Details Modal**: Slide-over details presenting AI-extracted structured information (Objectives, Funding Amount, Eligibility, Submission Guidelines, and links to official documents).
- **Analytics Visualization**: Interactive charts built with Chart.js showing grant breakdown by agency and category, and funding ranges.
- **Persistent Bookmarks**: Saved grants are stored in browser local storage (`localStorage`).
- **Responsive Design**: Clean and responsive UI with a togglable side navigation on mobile and a toggle for Dark/Light mode.

## Tech Stack
- **Core Structure**: HTML5 Semantic markup
- **Styling**: Tailwind CSS v4 CDN & Custom CSS Variables (Glassmorphism & animations)
- **Icons**: FontAwesome (or Lucide Icons)
- **Charts**: Chart.js CDN
- **State & Logic**: Vanilla JavaScript (ES6)

## Setup & Running
Simply open `index.html` in any web browser, or use a local development server (such as Live Server in VS Code, or python: `python3 -m http.server 8000`).
