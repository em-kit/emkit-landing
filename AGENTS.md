# Agent Guide: EM Kit Landing Page Development

## Overview
This guide helps AI agents understand the Emkit Landing Page codebase, common development tasks, troubleshooting patterns, and key architectural decisions. Use this as a reference when working on the project.

## Build System
Commands:
```
npm run build     # Build landing site (output in landing/dist/)
npm run dev       # Run landing dev server (port 8080)
```

## Landing deployment (Vercel)

The landing page is configured for Vercel deployment. When importing the repo:

- Set **Root Directory** to `landing`
- `landing/vercel.json` defines the build and SPA rewrites
- Download buttons link to GitHub Releases (`landing/src/lib/constants.ts`). Override with `VITE_GITHUB_RELEASES_URL` if the repo URL differs.
