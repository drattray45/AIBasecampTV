# Design — Checklist

Work top to bottom. Requires `docs/PRODUCT.md` to exist (run the Define phase first). Each step runs a single skill and produces a single file. The order matters — every later skill reads the earlier outputs.

---

## Step 1 — Product Identity

- **What to do:** Run `studio-design-identity-creator`.
- **What it does:** Produces `design/1. Product Identity.md` — Mission, Contrarian Belief, Personality archetype, Tone of Voice, Visual World (with a Visual Inspiration appendix naming fonts, brands, and references). Draws on `BONUS - Product Identity Deep Dive.md`.

## Step 2 — Name sanity check *(optional)*

- **What to do:** Run `studio-design-name-review`. Skip if the name is already locked in.
- **What it does:** In-conversation critique of the working name — trademark risk, brandability, `.com` availability, archetype fit.

## Step 3 — Design Prompts for AI design tools

- **What to do:** Run `studio-design-prompt-generator`.
- **What it does:** Produces `design/Design Prompts.md` — three paste-ready prompts (Prompt 1: a full UI design system foundation; Prompts 2–3: two priority screens for the product type) for Pencil, paper.design, Claude Design, or Magic Path.
- **How to use the prompts:** Read `BONUS - Design Tool Setup.md` to install and connect your AI design tool — **Magic Path is recommended**. Paste the generated prompts into the tool and explore **1–3 design directions** (different aesthetic interpretations of the same brand) before locking in a single visual direction to carry into Step 4.

## Step 4 — Design System (DESIGN.md)

- **What to do:** Run `studio-design-design-system`. Bring a reference image (screenshot, marketing site, dashboard, or moodboard) — or a design you generated in Step 3 that you're happy with — for the system to anchor to.
- **What it does:** Produces `docs/DESIGN.md` — Google-format design system with YAML tokens (colors, typography, rounded, spacing, components) and 8 markdown sections (Brand & Style, Colors, Typography, Layout & Spacing, Elevation & Depth, Shapes, Components, Do's and Don'ts). Tokens pass WCAG AA contrast.

## Step 5 — Magic Moment

- **What to do:** Run `studio-design-magic-moment`.
- **What it does:** Produces `design/2. Magic Moment.md` — one specific in-product event that makes users feel the product working, plus the activation hypothesis (what has to happen for a user to reach that moment).

## Step 6 — Onboarding Flow

- **What to do:** Run `studio-design-onboarding-flow`.
- **What it does:** Produces `design/3. Onboarding Flow.md` — the screen-by-screen path from first-open to magic moment. Every screen has a purpose, a primary action, and a tie back to the activation hypothesis. Draws on the matching `design/onboarding/BONUS - [product type] Onboarding Best Practice.md`.

## Step 7 — Acquisition surface *(pick one based on product type)*

### 7a — Landing Page *(web / SaaS / desktop / marketing site)*

- **What to do:** Run `studio-design-landing-page`.
- **What it does:** Produces `design/4. Landing Page.md` — hero, features-as-benefits, social proof, CTA closer. Draws on `BONUS - Web Landing Page Best Practice.md`.

### 7b — App Store Listing *(mobile app)*

- **What to do:** Run `studio-design-app-listing`.
- **What it does:** Produces `design/4. App Store Listing.md` — name, subtitle, screenshots brief, description, keywords. Draws on `BONUS - App Store Listing Best Practice.md`.

---

## Next phase

Once `docs/DESIGN.md` and the acquisition surface exist, move to the Build phase. Use `studio-build-design-better` when generating UI, `studio-build-design-review` before commits, and `studio-build-cro-audit` once the product has traffic.
