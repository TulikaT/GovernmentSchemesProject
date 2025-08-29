
GovSchemes — Government Schemes Dashboard

A responsive React dashboard that combines curated scheme summaries with live, state-wise public datasets from India’s Open Government Data platform. Explore programs by Sector, Ministry, Launch Year, and State with a clean, card-based UI and fast filtering.
Highlights

    Unified catalog + live data: blends curated scheme metadata with OGD India APIs for state-wise insights.

Smart State filtering: auto-detects the correct “state” field per dataset and applies server filters with a robust client fallback for inconsistent schemas.

Modern UI: responsive grid, accessible colors/typography, informative badges, hover states, and soft dividers.
CanvaDesign: https://www.canva.com/design/DAGxXSEX_cI/TPoOPZUZV4AGuEVAQtLk-A/edit?utm_content=DAGxXSEX_cI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Zero-config deploys: push to GitHub and ship with Vercel CI/CD in minutes.
Demo

    Local: npm run dev or npm start (depending on Vite/CRA)

    Production: connect GitHub repo to Vercel; each push deploys automatically.

Tech Stack

    React + modern CSS (flex/grid)

    Axios for API calls

    Vite or CRA (both supported; ensure correct build/output settings)

Vercel for hosting and CI/CD
Project Structure

    src/services/ogd.js — tiny client for OGD India APIs (handles filters[field]=value).

src/data/unify.js — normalizers to map raw API/custom data into a unified record shape.

src/data/stateField.js — detects state field in each dataset and provides robust matching helpers.

    src/components/GovSchemesDashboard.jsx — main dashboard with filters and card grid.

    src/pages/About.jsx, src/pages/Contact.jsx — static pages with matching UI.

Data Sources

    Open Government Data (OGD) Platform India — API access and datasets used here follow official API patterns and licensing guidance.

Scheme context: general references and lists used for curation and consistency checks. Always validate details at official ministry portals.
Getting Started

Prerequisites:

    Node 18+ and npm

    A browser (Chrome/Edge/Firefox)

Install & run:

text
npm install
# Vite
npm run dev
# CRA
npm start

Build:

text
# Vite
npm run build  # outputs to dist
# CRA
npm run build  # outputs to build
