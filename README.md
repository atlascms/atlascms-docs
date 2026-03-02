# Atlas CMS Documentation

Documentation site for Atlas CMS Headless CMS, built with [VitePress](https://vitepress.dev/).

## Development

```bash
npm install
npm run docs:dev
```

Visit `http://localhost:5173` in your browser.

## Build

```bash
npm run docs:build
```

## Preview production build

```bash
npm run docs:preview
```

## Regenerating API Reference

To regenerate the API Reference from the Swagger/OpenAPI file:

1. Place your `swagger.json` in the project root (or update `SWAGGER_PATH` in `scripts/generate-api-ref.mjs`)
2. Run: `node scripts/generate-api-ref.mjs`

The script filters APIs by tag: Contents, Models, Media Library, Assets, Users, Roles, Audits, and Admin (split into Project, Members, Roles, API Keys, Webhooks).

## Project Structure

```
├── .vitepress/       # VitePress config
├── admin-ui/         # Admin UI documentation
├── api-overview/     # API overview and concepts
├── api-reference/    # Full API reference (from swagger)
├── client-sdk/       # SDK documentation (JS, .NET)
├── introduction/     # Getting started
└── public/           # Static assets (images, etc.)
```

## Images

All images currently use placeholders (`/images/placeholder.svg`). Replace with real screenshots when ready.
