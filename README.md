# H.E.R — homepage redesign

Next.js + Tailwind CSS. Splash screen removed. Visitors land directly on the homepage.

## Run

```bash
npm install
npm run dev
```

## Changes
- Taller cinematic homepage hero with desktop fixed-background parallax
- More vertical whitespace and larger image panels throughout the page
- Scroll-triggered reveal animations for the main sections
- Reduced-motion support and mobile-friendly fallback (no fixed-background scrolling on touch screens)
- Existing H.E.R story, experiences, events, mission, and Instagram link retained
- Community, Shop, Journal, and Join the Community remain nonfunctional placeholders

Temporary Unsplash images should be replaced with client-provided assets before launch.

## Source structure

- `src/app/page.tsx` composes the homepage in display order.
- `src/components/layout/` contains the navigation and footer.
- `src/components/sections/` contains Hero, ActivityCategories, About, Experiences, UpcomingEvents, and Mission.
- `src/components/ui/` contains shared branding, Instagram links, and experience/event cards.
- `src/components/effects/ScrollReveal.tsx` is the client component that observes section visibility and cleans up its observer.
- `src/data/` contains homepage content, photo URLs, category icons, and the shared Instagram URL.
- `src/app/globals.css` retains global typography, colors, parallax, and reveal styles.

Page, layout, sections, and UI components remain Server Components. Add client boundaries only for browser interactions.

## Validation

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run build
```

If Turbopack cannot bind its internal local port in a restricted environment, use `npm run build -- --webpack` to validate with the alternative Next.js bundler.
