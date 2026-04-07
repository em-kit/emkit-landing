# Agent Guide: EM Kit Landing Page Development

## Overview
This guide helps AI agents understand the Emkit Landing Page codebase, common development tasks, troubleshooting patterns, and key architectural decisions. Use this as a reference when working on the project.

## Build System
Commands:
```
npm run build     # Build landing site (output in landing/dist/)
npm run dev       # Run landing dev server (port 8080)
```

## Landing deployment

The landing page is deployed to Cloudflare Pages using Wrangler and the `@cloudflare/vite-plugin`.

- **Config**: `wrangler.jsonc` defines the worker name, compatibility settings, and SPA routing (`not_found_handling: "single-page-application"`)
- **Vite plugin**: `cloudflare()` is included in `vite.config.ts` to integrate the build with Cloudflare
- **Deploy command**: `npx wrangler deploy` (runs after `npm run build`)
- **Output directory**: `dist/`