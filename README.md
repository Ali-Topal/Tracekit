# Tracekit Landing Page

Tracekit is a developer-focused observability tool for tracing requests, inspecting webhook payloads, and replaying failures without guesswork.  
This repo contains the marketing site built with Next.js App Router + Tailwind CSS.

![Tracekit preview](https://placehold.co/1200x720?text=Tracekit+Landing+Preview)

## Tech Stack
- Next.js 15 App Router (TypeScript)
- Tailwind CSS 4
- Reusable UI primitives (Button, Container, etc.)
- Content modules (`src/content/site.ts`) to keep copy centralized

## Highlights
- Sticky header with responsive nav + mobile overlay
- Premium hero with animated request preview + CTA pair
- Feature grid + 3-step flow rendered from typed data
- Interactive code snippet (copy-to-clipboard with feedback)
- Pricing tiers with emphasized “Pro” plan
- Accessible FAQ accordion (keyboard + focus-visible)

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run locally**
   ```bash
   npm run dev
   ```
3. **Lint / build**
   ```bash
   npm run lint
   npm run build
   ```

> Requires Node.js 18+.

## Project Structure
```
app/
  layout.tsx        # Metadata + global font config
  page.tsx          # Section composition only
src/
  components/
    sections/       # Header, Hero, Features, Pricing, etc.
    ui/             # Button, Container primitives
  content/site.ts   # Typed marketing copy + data
  lib/cn.ts         # Classname helper
public/             # SVG assets
docs/               # Step-by-step build instructions
```

## Deployment
- Production URL: `https://tracekit.dev` (update once deployed)
- Recommended: Vercel (auto-build `npm run build`)

## Quality Checklist
- [x] `npm run lint`
- [x] `npm run build`
- [x] Manual responsive review at **375 / 768 / 1280**
- [x] No console errors in dev/build
- [x] README includes setup + screenshot placeholder

## Future Improvements
- Hook up actual product screenshots for OG/Twitter images
- Connect CTAs to live docs/signup once backend is available
- Add integration logos + real testimonials
