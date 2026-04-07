# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Solartech Merchants (react-vite, previewPath: /)
A professional ecommerce website for Solartech Merchants — a solar energy company in Nairobi, Kenya.

**Pages:**
- `/` — Home with hero, featured products, categories, testimonials, why-choose-us, CTA
- `/products` — Full product catalog with category tabs and search
- `/products/:category` — Category-filtered product view
- `/about` — Company story, values, team
- `/contact` — Contact form (WhatsApp) + contact info + map

**Key Features:**
- All orders via WhatsApp (+254729471565)
- Floating WhatsApp button on every page
- Product cards with WhatsApp order CTA
- Contact form submits via WhatsApp (pre-fills message)
- Mobile-first, fully responsive
- Poppins (headings) + Inter (body) fonts
- Amber/orange primary, deep blue secondary, green accent theme

**Company Info:**
- Phones: +254729430917, +254729471565
- Email: info@solartechmerchants.com
- Location: Gaberone Plaza, Nairobi, Kenya
- WhatsApp orders: +254729471565 (number ending in 565)

**Products:** Solar panels, batteries (gel, AGM, lithium, Hithium), inverters, combo kits, accessories, lighting

**File Structure:**
```
artifacts/solartech-merchants/src/
├── App.tsx
├── index.css            # Poppins/Inter fonts, amber/blue theme
├── data/products.ts     # All product data + WhatsApp link helpers
├── components/
│   ├── ProductCard.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── WhatsAppFloating.tsx
├── pages/
│   ├── home.tsx
│   ├── products.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   └── not-found.tsx
└── assets/images/       # Generated solar images
```

**Deployment:** Vercel-ready (static React build, no backend required)
