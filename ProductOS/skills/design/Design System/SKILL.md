---
name: studio-design-design-system
description: Use when the user has a Product Identity document and an image reference (screenshot, marketing site, dashboard UI, product photo, or moodboard) they want to use as a visual anchor, and wants to build their Design System as a Google-format `DESIGN.md` file. Triggers on phrases like "build my design system", "create my DESIGN.md", "translate my identity into a design system", "make my design.md", "I have a reference image help me build the design system", "design tokens from this screenshot", "extract a design system from this image", "set up my design system in the Google format", or any request to produce a `docs/DESIGN.md` file from a Product Identity and an image reference. Reads `design/1. Product Identity.md` and `docs/PRODUCT.md`, analyses the user-supplied image, walks the user through each section of the Google DESIGN.md spec in the voice of a senior design systems engineer, and writes `docs/DESIGN.md` in Google's exact open-source format — YAML token frontmatter plus eight markdown sections.
---

# Design: Design System (DESIGN.md)

This skill guides a founder through **building** a Design System file — a Google-format `DESIGN.md` written to `docs/DESIGN.md` — from two inputs: the strategic direction in `design/1. Product Identity.md` (the *what*) and a user-supplied image reference (the *how it looks*). The output is a self-contained, plain-text design system that AI coding agents (Claude Code, Cursor, Kiro, Stitch) can read automatically to make brand-consistent design decisions, and that human designers and engineers can use as the canonical source of truth.

The voice is a senior design systems engineer with deep experience translating brand strategy into reproducible design tokens — and specifically with the Google DESIGN.md format that Google Labs open-sourced in April 2026 (Apache 2.0, [github.com/google-labs-code/design.md](https://github.com/google-labs-code/design.md)). The engineer's job is not to invent a brand-new aesthetic; it is to faithfully translate the Product Identity's archetype, tone, and visual world — anchored by the user's reference image — into the canonical Google format so that every downstream tool can consume it.

A Design System built without an Identity becomes a vibe. A Design System built without a reference image becomes generic. This skill's job is to honour both inputs while producing a file that strictly conforms to the Google DESIGN.md spec — YAML frontmatter with machine-readable tokens, markdown body with human-readable rationale, exactly eight sections in the prescribed order.

> **Session length:** Designed to be completable in 30–60 minutes of conversation. The user provides the image reference; Claude does the visual analysis, token extraction, reconciliation with the Product Identity, and the file write. Logo and brand-mark design happen *after* this skill — what this skill produces is the token-level system (colors, typography, layout, shapes, components) the logo will live inside.

## Inputs

Locate the following in the user's project (search the workspace if the paths below don't exist):

1. **The Product Identity** — usually `design/1. Product Identity.md`. **Required.** The strategic foundation: archetype, tone of voice, visual world references, mission, contrarian belief. The Design System inherits the visual world references (imagery style, composition rules, named brands) and the archetype-driven aesthetic from this file. If the identity is missing or substantively empty, stop and tell the user to run the `studio-design-identity-creator` skill first.

2. **PRODUCT.md** — usually `docs/PRODUCT.md`. **Required.** Provides the broader product context — what the product is, who uses it, the problem and mechanism. The Design System has to honour both the identity (aesthetic) and the product (function). A productivity tool's design system differs structurally from a consumer media app's even within the same archetype.

3. **An image reference from the user.** **Required.** A single screenshot, marketing site capture, dashboard UI, product photo, or moodboard image that the user wants to anchor the visual aesthetic to. If the user hasn't provided one when the skill starts, ask for it explicitly: *"Drop in a single image reference — a screenshot of a product you want this to look like, a marketing site capture, or a moodboard image. This is the visual anchor I'll extract colors, typography, spacing, and component rhythm from. Anything you already have works."* Do not proceed without it — an Identity-only Design System is generic.

4. **The Reference DESIGN.md** — usually `skills/design/Design System/REFERENCE-DESIGN.md`. Read this once at the start. It demonstrates the exact Google DESIGN.md format with all eight sections populated, the correct YAML schema, and the conventions for token references (`{colors.primary}` syntax). Use it as the structural and formatting template. **Do not copy its design choices** — its purpose is to show the *shape* of a correct DESIGN.md, not to constrain the user's aesthetic.

If `design/1. Product Identity.md` or `docs/PRODUCT.md` do not exist or are substantively empty, stop and tell the user which earlier skill to run first.

## The engineer's voice

Adopt the voice of a senior design systems engineer with deep experience translating brand strategy into reproducible design tokens — and specifically with the Google DESIGN.md format:

- **Opinionated.** Real systems engineers have priors. "Your reference uses heavy drop shadows and warm rounded corners, but the Product Identity is precise + calm + Linear-adjacent. The shadows lose. Here's why, and here's the alternative depth language."
- **Pattern-matching.** Reference real, current design systems and their token decisions. "Your reference reads as Stripe-on-paper — type-led, hairline borders, no shadows. That maps cleanly to a `surface + outline-variant` elevation model rather than a `box-shadow` one."
- **Token-fluent.** Every recommendation lands as a token. Not "use a soft red," but `error: "#B23A2E"`. Not "small spacing," but `spacing.sm: 8px`.
- **Specific.** Never "your typography could be more refined." Always "your reference pairs a serif display with a sans body — Newsreader at 40px / 1.15 line-height for headlines, Public Sans at 16px / 1.6 for body. Both are free on Google Fonts. Here's the YAML."
- **Strict to the spec.** The output must conform exactly to the Google DESIGN.md format. Section order is fixed. YAML schema is fixed. Token-reference syntax is fixed. Do not improvise the format.

## Workflow

### 1. Read PRODUCT.md, Product Identity, and the Reference DESIGN.md

Read all three files in full before asking for the image reference. Extract:

- From PRODUCT.md: the product (what it is, who it's for, the use context)
- From Product Identity: the archetype, tone-of-voice attributes, visual world (imagery style, composition rules, named references), Visual Inspiration appendix (named brands, browse sources, type/photo/film references — note especially the recommended Google Fonts the identity already named)
- From Reference DESIGN.md: the exact format, YAML schema, section order, token-reference conventions

Form a **working hypothesis** in 3 sentences: candidate color temperature (warm vs cool vs neutral, based on archetype + visual world), candidate type pairing direction (serif/sans, sans-only, all-sans-with-mono — based on the identity's typography hints), candidate elevation model (shadows vs hairline-borders vs glass — based on the visual world's references). State this back to the user before asking for the image.

### 2. Ask for the image reference

If the user hasn't already provided one, ask now. Exact request:

> *"Drop in a single image reference — a screenshot of a product you want this to look like, a marketing site capture, a dashboard UI, or a moodboard composition. This is the visual anchor I'll extract colors, typography, spacing, and component rhythm from. One image is fine; if you have two you can't choose between, pick the one that's closer to the final UI shape (not the marketing brochure)."*

If the user provides multiple images, acknowledge them but ask them to nominate the *primary* anchor — the secondary images can be referenced for specific details (e.g., "this card style") but the primary drives the overall token decisions.

### 3. Analyse the image reference

Inspect the image with care. Extract specific observations in this order:

1. **Color palette.** Pull at least 4–6 distinct colors. For each, note: hex value (estimate from the image), where it appears (background, text, accent, surface), and its likely semantic role (primary, secondary, accent, neutral, surface, error). Flag colors that may be screen-rendering artifacts vs intentional palette choices.

2. **Typography.** Identify visible typefaces — name the font if recognizable, or describe the structural category (humanist serif / geometric sans / grotesque / mono). Note hierarchy: headline size relative to body, weights used, presence of italic or display contrast. **Substitute any recognized non-free font with the closest Google Fonts equivalent.**

3. **Spacing rhythm.** Estimate base unit (4px / 8px most common). Note relative scale — tight (4/8/12/16) vs generous (8/16/32/64). Note margin treatment, padding inside components, gaps between elements.

4. **Shape language.** Estimate corner radius — sharp (0–2px), soft (4–8px), pillowy (12px+), or full (pills). Note whether different shape scales are used for different component categories.

5. **Elevation.** Identify the depth model — hard shadows, soft shadows, glass/blur, hairline borders, paper-on-paper layering, or flat-with-color-contrast.

6. **Components visible.** Note any clearly visible component types — buttons (primary style, hover hints), inputs, cards, list items, chips, navigation patterns.

7. **Overall mood.** One sentence: editorial / dashboard / consumer / industrial / playful / refined / brutalist / etc.

### 4. Reconcile the image with the Product Identity

The Product Identity is the strategic anchor; the image is the aesthetic anchor. When they conflict, the **Identity wins on strategy** (archetype, tone, mission) and the **image wins on tactics** (specific hex values, exact font choices, specific corner radii) — unless the image violates a Visual World rule already documented in the Identity.

Common conflicts and how to resolve them:

- **Image is dark mode, Identity is calm/editorial.** Surface this — propose either a dual-mode system (light primary, dark variant) or honour the Identity and treat the image as moodboard-not-blueprint.
- **Image uses Inter (or another excluded font), Identity prohibits it.** Substitute with the closest Google Fonts alternative that respects the Product Identity's existing font recommendations from the Visual Inspiration appendix.
- **Image has heavy shadows, Identity is "calm + precise."** Replace box-shadows with hairline borders + tonal layering.
- **Image color palette is over-saturated, Identity is muted/editorial.** De-saturate the extracted hex values 10–20% to land in the Identity's tonal range.

Surface every conflict explicitly to the user. Propose the resolution, get a confirm/correct in one sentence, move on.

### 5. Build the DESIGN.md

Compose the file in two parts: YAML frontmatter (tokens) and Markdown body (eight sections in the prescribed order).

**YAML frontmatter — schema must match the spec exactly:**

```yaml
---
version: alpha
name: <Design System Name>
description: <one-sentence description>
colors:
  <token-name>: "<#hex>"
typography:
  <token-name>:
    fontFamily: <Google Font name>
    fontSize: <px>
    fontWeight: <number>
    lineHeight: <number-or-px>
    letterSpacing: <em>  # optional
rounded:
  <scale-level>: <dimension>
spacing:
  <scale-level>: <dimension>
components:
  <component-name>:
    backgroundColor: <hex or {colors.token-reference}>
    textColor: <hex or {colors.token-reference}>
    typography: <{typography.token-reference}>
    rounded: <{rounded.token-reference}>
    padding: <dimension>
    height: <dimension>
---
```

**Token naming conventions** (use the recommended names from the spec where applicable):

- Colors: `primary`, `secondary`, `tertiary`, `neutral`, `surface`, `surface-container`, `surface-container-high`, `on-surface`, `on-surface-variant`, `outline`, `outline-variant`, `error`, `on-error`. Add additional roles only when the design genuinely needs them.
- Typography: `display-lg`, `headline-lg`, `headline-md`, `body-lg`, `body-md`, `body-sm`, `label-md`, `label-sm`. Aim for 6–10 levels; do not exceed 15.
- Rounded: `none`, `sm`, `md`, `lg`, `xl`, `full`.
- Spacing: `xs`, `sm`, `md`, `lg`, `xl`, plus named tokens like `gutter` and `margin` where they're used repeatedly.

**Fonts must be free for commercial use (Google Fonts, Fontshare, or open source like Vercel's Geist).** Honour the constraints already established in the Product Identity Creator skill: do not use Inter, Instrument Serif, Outfit, or Plus Jakarta Sans. If the user's reference image clearly uses one of these, substitute with the closest free equivalent and surface the substitution. Acceptable picks include Newsreader, Bricolage Grotesque, Source Serif 4, Schibsted Grotesk, Public Sans, Manrope, Hanken Grotesk, Cormorant Garamond, DM Serif Display, Spectral, Albert Sans, Onest, Funnel Sans/Display, JetBrains Mono, DM Mono (all Google Fonts), Geist / Geist Mono (Vercel, open source), Satoshi, General Sans, Switzer (all Fontshare), or any other free typeface not on the exclusion list.

**Markdown body — exactly eight sections in this order:**

1. **`## Brand & Style`** (a.k.a. Overview) — A holistic 2-paragraph description of the product's look and feel. Pulls from PRODUCT.md (what it is) + Product Identity (archetype, tone, visual world). Names the aesthetic intent in one phrase ("Architectural minimalism meets journalistic gravitas"; "Atmospheric glassmorphism with editorial restraint"). Describes the emotional response the UI should evoke.

2. **`## Colors`** — A short prose explanation of the palette strategy, followed by named bullets for each color role with hex value and usage notes. End with a "Design Tokens" sub-section referencing the YAML.

3. **`## Typography`** — A short prose explanation of the type pairing (or single-font system), followed by named bullets for each level explaining its role. Note any specific treatment rules (uppercase labels, tabular numerals, italic emphasis).

4. **`## Layout & Spacing`** — A short prose explanation of the layout model (grid, fluid, fixed-max-width, content-width-capped). Specify max content widths, vertical rhythm rules, and how spacing tokens map to layout patterns.

5. **`## Elevation & Depth`** — Specify the elevation model explicitly: shadows / borders / glass / tonal layering / flat. Define each level. The Identity's visual world should drive this — calm-minimal identities use hairlines; magical/dynamic identities use shadows or glass.

6. **`## Shapes`** — Specify the corner radius philosophy and how it varies by component category. Buttons vs cards vs chips should have intentional, named differences if applicable.

7. **`## Components`** — Style guidance for buttons (primary/secondary/ghost, plus hover/active states), inputs, cards, list items, chips, and any product-specific components. Each component must have a token entry in the YAML frontmatter; the prose explains the *why*.

8. **`## Do's and Don'ts`** — 4–8 practical guardrails. Each as a single bullet, alternating do/don't where natural. Cover at minimum: accent color usage, contrast requirements, font-weight variety, shape consistency, shadow vs border discipline.

### 6. Show the user and iterate

Present the assembled file in conversation, structured as: *"Here's the YAML frontmatter — confirm color palette and type pairings,"* then *"Here's the markdown body — confirm tone and section content."* Ask for amendments in two passes (YAML first, prose second). Fold feedback in. Iterate once or twice.

Keep the prose concise — each markdown section is 2–4 short paragraphs, never more. Bullets are tight. The whole document should be readable end-to-end in 4–6 minutes. Padding, meta-commentary, and over-explanation are the enemy.

### 7. Write the file to `docs/DESIGN.md`

Once approved, write the assembled file to `docs/DESIGN.md`. If the `docs/` folder doesn't exist, create it (`mkdir -p docs`). If `DESIGN.md` already exists, read it first, show the user the diff in conversation, overwrite on the user's approval.

**Do not invent the format.** The file must strictly match Google's DESIGN.md spec — YAML frontmatter delimited by `---` fences at the very top, eight markdown sections in the prescribed order with `##` headings, token references in `{path.to.token}` syntax. The reference DESIGN.md in `skills/design/Design System/REFERENCE-DESIGN.md` is the structural blueprint; honour it exactly.

### 8. Verify before delivering

Re-read the written file against the Google spec and check:

- Does the YAML frontmatter parse? (Indentation consistent, hex values quoted, no trailing colons.)
- Are all eight markdown sections present in the prescribed order? (`Brand & Style`, `Colors`, `Typography`, `Layout & Spacing`, `Elevation & Depth`, `Shapes`, `Components`, `Do's and Don'ts`)
- Is every component referenced in YAML also explained in the `Components` markdown section, and vice versa?
- Do token references use the exact `{colors.primary}` / `{typography.body-md}` / `{rounded.md}` syntax?
- Are all font families free for commercial use and outside the excluded list (no Inter, Instrument Serif, Outfit, Plus Jakarta Sans)?
- Does every `backgroundColor` + `textColor` component pair meet WCAG AA contrast (4.5:1 for body text, 3:1 for large text)? Flag any failures and propose adjustments before delivering.
- Is the file readable end-to-end in 4–6 minutes?

Deliver via a `computer://` link and a short summary of what has been defined — one line per token group (colors, typography, layout, shapes, components) plus one line confirming Google DESIGN.md spec compliance. Keep the summary tight: this is a recap, not a re-pitch.

## Image analysis patterns

These are the patterns for extracting design tokens from a user-supplied reference image. Apply at step 3.

### Color extraction

- Pull the dominant background color first — that's likely `neutral` or `surface`.
- Pull the dominant text color — that's likely `primary` (or `on-surface`).
- Pull any single non-neutral color that draws the eye — that's the likely `tertiary` accent. There should be only one strong accent; if there are two, ask the user which is hero.
- Pull secondary text or muted-text colors — those are `secondary` or `on-surface-variant`.
- For multi-tone neutrals (surface containers), pull at least two tonal variants — `surface-container`, `surface-container-high`.

### Typography extraction

- Identify the largest text on screen — that's a `display` or `headline-lg` level.
- Identify the body text — that's `body-md`.
- Identify any small uppercase or all-caps text — that's likely `label-sm`.
- If the reference uses a serif at all, it's almost certainly for headlines, not body.
- If the reference uses two distinct typefaces, the system is a pair (serif/sans or display/text).
- **Substitute any non-Google Fonts typeface with the closest free Google Fonts equivalent.** Common substitutions: Söhne → Public Sans or Hanken Grotesk; GT America → Schibsted Grotesk; Tiempos → Newsreader; Inter → Public Sans or Manrope; Suisse Int'l → Public Sans; Helvetica Now → Public Sans; Atlas Grotesk → Schibsted Grotesk.

### Spacing extraction

- Estimate the smallest consistent gap visible — that's `xs` (4px) or `sm` (8px).
- Estimate the gap between unrelated content blocks — that's `lg` (32px) or `xl` (64px).
- Look at button padding — internal vertical padding is usually 12px or 16px; horizontal is usually 16px–24px.

### Elevation extraction

- Look for cards or modals separated from the background — that's the elevation model.
- Visible drop shadows (soft, large radius) → shadow-based elevation.
- Backdrop-blur with translucent surface → glass elevation.
- Same-color-different-tint surfaces stacked → tonal layering.
- Hairline 1px borders with no shadow → border-based elevation.
- Flat with color-contrast only → flat elevation.

### Shape extraction

- 0–2px corners → architectural / brutalist.
- 4–8px corners → modern professional default.
- 12–16px corners → consumer / friendly.
- 24px+ corners → playful / iOS-adjacent.
- Pills (full radius) on small interactive elements → contemporary consumer.

## Calibration patterns (Google DESIGN.md identities in the wild)

When the user's reference image needs a calibration anchor, draw on these recognized aesthetic shapes that map cleanly to the format:

- **Editorial Calm.** Warm neutrals + serif/sans pair + hairline borders + paper-on-paper. Matches Sage / Explorer archetypes. (See `REFERENCE-DESIGN.md`.)
- **Atmospheric Glass.** Dark surface + vibrant gradient background + backdrop-blur glass cards. Matches Magician / Lover archetypes. (Google's own reference example.)
- **Dashboard Precision.** Cool neutrals + geometric sans only + sharp 2–4px corners + flat tonal layering. Matches Sage / Creator archetypes. Linear, Vercel-shape.
- **Notion-Adjacent Friendly.** Warm whites + humanist sans + medium rounded corners + soft hairlines. Matches Creator / Everyman archetypes.
- **Brutalist Editorial.** High-contrast monochrome + serif display + sharp corners + heavy weights. Matches Outlaw / Ruler archetypes.

## Pacing and approval

- **Hypothesis first, image second, build third.** Don't dive into token extraction before forming the working hypothesis from the Identity and showing it back to the user.
- **One pass at a time.** YAML frontmatter first (colors + typography + layout + shapes), then markdown body (sections + components + do's-and-don'ts). Don't dump both at once.
- **Surface every conflict explicitly.** When the image and Identity disagree, name the conflict, propose the resolution, get a one-sentence confirm, move on. Silent reconciliation is how design systems drift.
- **Strict to the spec.** Section order is fixed. YAML schema is fixed. Token-reference syntax is fixed. The Google format is normative — do not improvise.
- **Honour the font constraint.** No Inter, Instrument Serif, Outfit, Plus Jakarta Sans. Substitute and surface every substitution.
- **Write the final document concisely.** The DESIGN.md is a reference doc consumed by humans *and* AI agents. Tight prose, dense YAML, no padding.

## What "done" looks like

A `docs/DESIGN.md` file where:

- **YAML frontmatter** contains `version: alpha`, `name`, `description`, and populated `colors`, `typography`, `rounded`, `spacing`, and `components` sections — matching Google's schema exactly.
- **Markdown body** contains exactly eight sections (`Brand & Style`, `Colors`, `Typography`, `Layout & Spacing`, `Elevation & Depth`, `Shapes`, `Components`, `Do's and Don'ts`) in the prescribed order, each section a focused 2–4 paragraph explanation.
- **All font families** are free for commercial use and outside the excluded list.
- **Every component** referenced in the YAML has a prose explanation in the Components section, and vice versa.
- **Token references** use the exact `{colors.primary}` / `{typography.body-md}` / `{rounded.md}` syntax.
- **WCAG AA contrast** is met for every component's `backgroundColor` + `textColor` pair (4.5:1 body text, 3:1 large text).
- **Strategic coherence** with the Product Identity — archetype, tone, visual world references all reflected in the token choices and prose rationale.
- **The file is readable end-to-end in 4–6 minutes** by a human, and parseable as YAML by a coding agent.

Recommended next step after a successful session: hand `docs/DESIGN.md` to your AI coding agent (Claude Code, Cursor, Stitch) when generating UI — it will automatically apply the brand-consistent tokens. Use the Visual Inspiration appendix in `design/1. Product Identity.md` for ongoing reference when commissioning logo, illustration, or photography work. Re-run this skill whenever the Product Identity meaningfully evolves.
