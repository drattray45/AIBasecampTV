# Design Prompts

*Drafted: June 2026. Generated from `docs/PRODUCT.md` and `design/1. Product Identity.md`. Paste each prompt below into Pencil (pencil.dev), paper.design, Claude Design, or Magic Path to generate that screen — the brand context is already inside every prompt, so the output is on-brand from the first generation.*

## How to use this file

1. Open your AI design tool — Pencil (pencil.dev), paper.design, Claude Design, or Magic Path. (Magic Path is recommended; see `design/BONUS - Design Tool Setup.md`.)
2. **Start with Prompt 1 (the design system).** Generate the component library first; it becomes the foundation the two screens reuse.
3. Copy the entire prompt (from "Design a…" through the last line) and paste it in.
4. Generate **1–3 directions** off Prompt 1, pick one, then run Prompts 2 and 3 on the same canvas so the screens inherit the components.
5. Once `docs/DESIGN.md` exists, prefer it as the source of truth for exact tokens — these prompts still produce on-brand drafts.

---

## Brand identity context (embedded in every prompt below)

```
Archetype: Everyman — the relationship is "you're one of us, no pedestal." Caregiver is the warmth register only (Scout's voice), NOT a second archetype. Sage is forbidden — never speak as the expert above the reader.
Tone: Warm, but not parental. Plain, but not dumbed-down. Calm, but not boring. Encouraging, but not a cheerleader. Honest, but not preachy.
Visual style: Warm hand-drawn illustration led by Scout — a friendly brown bear with an always-on headlamp (the signature mark; it lights the path). New Yorker / Notion warmth, never Saturday-morning cartoon (drawn for a 49-year-old, not a child). Generous negative space — one thing at a time, the calm of "we removed the firehose." TWO MODES: (a) marketing/beacon — deep teal mountain-night so the headlamp glows; (b) learning surfaces — warm paper/daylight, calm and high-legibility. Photography only as earned proof (a real, named student; never stock "real people").
Type pairing: Source Serif 4 for headlines (literary, refined serif); Hanken Grotesk for body (friendly, highly legible at large sizes). Both free on Google Fonts.
Color direction: Warm and grounded. Beacon mode — deep teal night (#123038 / #0B2128), warm brown Scout (#8B6B4A), one beacon yellow (#FFD24A). Learning mode — warm off-white paper (#F8F5F0), deep ink text (#1C1917). Yellow is reserved for the headlamp, one highlight word, and CTAs — never decorative.
What to avoid: purple gradients, abstract AI orbs/blobs, 3D blobs, robots, glowing-neural anything, headset-stock photography, techy dark-mode on learning surfaces, and the fonts Inter / Outfit / Instrument Serif / Plus Jakarta. Never the words "easy," "simple," "just," "unlock," "10x," "game-changer," "don't get left behind." Large, legible type is a brand value — the reader is 49; never small low-contrast grey text.
```

---

## Prompt 1: Design system foundation

**Purpose:** Generate the full UI component library that Prompts 2 and 3 reuse — colors (both modes), typography, components, layout, motion. Run this first.

### Prompt — paste this into your AI design tool

```
Design a complete UI design system foundation for AIBasecamp.TV, a warm, beginner-friendly AI-education brand for non-technical adults who feel behind — guided by Scout, a friendly bear with a headlamp.

Brand identity:
Archetype: Everyman — "you're one of us, no pedestal." Caregiver is the warmth register only; Sage is forbidden (never the expert above the reader).
Tone: Warm but not parental. Plain but not dumbed-down. Calm but not boring. Encouraging but not a cheerleader. Honest but not preachy.
Visual style: Warm hand-drawn illustration led by Scout (brown bear, always-on headlamp). New Yorker / Notion warmth, never Saturday-morning cartoon. Generous negative space, one thing at a time. Two modes: beacon (deep teal mountain-night, headlamp glows) and learning (warm paper/daylight, calm, high-legibility).
Type pairing: Source Serif 4 for headlines, Hanken Grotesk for body. Both Google Fonts.
Color direction: Beacon — deep teal (#123038 / #0B2128), Scout brown (#8B6B4A), beacon yellow (#FFD24A). Learning — warm paper (#F8F5F0), deep ink (#1C1917). Yellow reserved for the lamp, one highlight word, and CTAs only.
What to avoid: purple gradients, AI orbs/blobs, 3D blobs, robots, headset-stock, techy dark-mode on learning surfaces; fonts Inter/Outfit/Instrument Serif/Plus Jakarta; words easy/simple/just/unlock/10x/game-changer.

What to design — a comprehensive component library, organised by category:

Foundations
- Color palette: two themes (Beacon / dark-teal marketing, and Learning / warm-paper). For each: surface, surface-container, on-surface text, muted text, outline, the shared Scout-brown secondary, the shared beacon-yellow accent, and semantic colors (success, warning, error, info). Hex values for each. Maintain WCAG AA contrast on every text-on-surface pair.
- Typography scale: display, h1, h2, h3, body-large, body, body-small, label, caption. Source Serif 4 for display/headlines, Hanken Grotesk for body/labels. Show family, size (px), weight, line-height, letter-spacing. Body should be generous (16–18px) — the reader is 49.
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 px.
- Border radius scale: none / sm / md / lg / pill — friendly, medium-rounded (Everyman warmth), not sharp/brutalist.
- Elevation: prefer warm hairline borders + paper-on-paper tonal layering over heavy shadows; at most one soft low shadow. Calm, not showy.
- Motion: gentle, reassuring — 200ms ease-out, soft entrances, nothing flashy or urgent.

Components
- Buttons: primary (beacon-yellow on dark, or ink on paper), secondary, ghost. Sizes sm/md/lg. States default/hover/active/focus/disabled/loading. Generous tap targets.
- Form elements: text input, textarea, select, checkbox, radio, toggle, search, file upload — each with label, helper text, error state. Large, calm, legible.
- Cards: default, interactive (hover), and a "worked-example" card (a prompt + a readable answer).
- Modal/dialog, navigation (top nav, simple side nav, tabs, breadcrumbs), lists (with leading icon/avatar + trailing action), tables (header row, row hover).
- Badges/chips (especially topic chips, pill-shaped), avatar (Scout in several poses/expressions), tooltips, toasts/banners (info/success/warning/error).
- Icons: warm line style, rounded caps, medium stroke — about 10 representative icons.
- Empty, loading (gentle skeletons), and error states — all written in Scout's reassuring voice.
- Progress: a calm step indicator and a one-a-day checklist component.

Layout
- Grid: column count, gutter, max content width (capped for comfortable reading).
- Responsive breakpoints (mobile, tablet, desktop).

Visual notes:
- Generous negative space, type-led hierarchy, warm hairline borders instead of heavy shadows.
- WCAG AA contrast on all text; never rely on color alone for state.
- Everything should feel calm, warm, and quietly capable — a guide who's got your back, never showy or urgent.

Present the system as a tidy sticker sheet grouped by category, with both color themes shown side by side.
```

---

## Prompt 2: Landing hero + pre-signup teaser (the acquisition screen)

**Purpose:** The page a viewer lands on from YouTube — it must deliver the "it got me" belief beat before any email ask.
**Position in journey:** Pre-signup (Onboarding screen 1). Beacon mode.

### Prompt — paste this into your AI design tool

```
Design a landing-page hero with a pre-signup teaser for AIBasecamp.TV, a warm beginner-AI brand guided by Scout, a bear with a headlamp.

Brand identity:
Archetype: Everyman — peer, no pedestal; Caregiver warmth register; Sage forbidden.
Tone: Warm but not parental. Plain but not dumbed-down. Calm but not boring. Honest but not preachy.
Visual style: Scout-led hand-drawn illustration (brown bear, always-on headlamp), New Yorker/Notion warmth never cartoon. Beacon mode — deep teal mountain-night so the headlamp glows; generous negative space.
Type pairing: Source Serif 4 for headlines, Hanken Grotesk for body. Both Google Fonts.
Color: deep teal (#123038/#0B2128), Scout brown (#8B6B4A), beacon yellow (#FFD24A) for the lamp + the single highlight word + the CTA only.
What to avoid: purple gradients, AI orbs, 3D blobs, robots, stock people; fonts Inter/Outfit/Instrument Serif/Plus Jakarta; words easy/simple/just/unlock/game-changer/don't-get-left-behind.

Screen purpose:
This is where a nervous 49-year-old who just watched a Scout video arrives. It must show one "oh, it got that" moment — a real AI answer she can read — before asking for anything.

Layout (top to bottom):
- Warm teal hero with Scout (headlamp on, calm/encouraging) to one side; headline + sub to the other.
- A read-only "worked-example" card: a pre-written prompt about growing tomatoes, and a visibly good AI answer she can read (no input box, no typing).
- A row of pill-shaped topic chips (gardening · cooking · managing a team · your job) hinting "yours is next."
- One primary CTA in beacon yellow.
- A quiet trust line (no fear, no hype).

Content / copy hints:
- Headline: "See what a good question gets you."
- Sub: "Here's a real AI answer about growing tomatoes. Yours is next — no tech skills, nothing to install, no sign-up to look."
- CTA: "Try it with my topic"
- Trust line: "Free. Made for people who feel behind — you're not."

Visual notes:
- Device frame: responsive web (desktop hero + mobile stack).
- Generous negative space, type-led; the worked-example answer must be the most readable thing on the page (large, high-contrast).
- The headlamp is the only glowing element; yellow appears only on the lamp, the highlight word, and the CTA.
- Reuse the components from the design system prompt (Prompt 1) — same buttons, cards, chips.

What this screen should feel like:
- Calm and welcoming — a guide who already did the scary part and is holding the door open. Never hype, never a countdown, never "you're behind."
```

---

## Prompt 3: Starter Kit Task 1 — the magic-moment screen

**Purpose:** The activation event — the first home-turf task where she does it herself and feels "I'm not helpless."
**Position in journey:** First session, post-signup (Onboarding screen 4). Learning mode.

### Prompt — paste this into your AI design tool

```
Design the first-task screen of a free "Starter Kit" for AIBasecamp.TV, a warm beginner-AI brand guided by Scout, a bear with a headlamp.

Brand identity:
Archetype: Everyman — peer, no pedestal; Caregiver warmth register; Sage forbidden.
Tone: Warm but not parental. Plain but not dumbed-down. Calm but not boring. Encouraging but not a cheerleader.
Visual style: Scout-led hand-drawn illustration, New Yorker/Notion warmth. LEARNING mode — warm paper/daylight (#F8F5F0), calm, generous negative space, large legible type. Scout appears beside her (never above).
Type pairing: Source Serif 4 for headlines, Hanken Grotesk for body. Both Google Fonts.
Color: warm paper surface (#F8F5F0), deep ink text (#1C1917), Scout brown accents (#8B6B4A); beacon yellow (#FFD24A) reserved for the one highlight + the CTA only.
What to avoid: blank input boxes with no scaffolding, purple gradients, AI orbs, robots, techy dark mode; fonts Inter/Outfit/Instrument Serif/Plus Jakarta; words easy/simple/just/unlock/game-changer.

Screen purpose:
She picks a topic she already knows, sends a question we wrote for her, reads a good answer, and judges it on her own turf — feeling "I did that, and I can tell it's right." This is the magic moment; it must never present an empty box.

Layout (top to bottom):
- Friendly header with Scout beside the headline (calm, encouraging).
- A row of topic chips to choose her turf (my job · a hobby · something I cook · a place I know).
- A PRE-FILLED prompt card (read-only template with her topic slotted in) — not a blank box.
- A generated-answer card she can read.
- A judgment-cue line, then a warm reframe line.
- A one-tap "how did that feel?" with three options.
- One primary CTA.

Content / copy hints:
- Headline: "Your turn. Pick something you already know."
- Sub: "We've written the question for you — just choose your topic and watch."
- Pre-filled prompt: "I know a lot about [your topic]. Explain it to a smart beginner in about 150 words, and name one mistake people commonly make. Plain language."
- Judgment cue: "You know this — read it. Did it get it right? Miss anything?"
- Reframe: "That's the whole skill. You weren't behind — you just needed the first step."
- Feel options: "I did it" / "Sort of — still a bit unsure" / "Still stuck"
- CTA: "Nice — what's next"

Visual notes:
- Device frame: responsive web.
- Warm paper, daylight calm — the opposite of the dark marketing hero. Large readable type for the answer card.
- The pre-filled prompt must visibly look filled-in, never an empty field.
- Reuse the components from the design system prompt (Prompt 1) — same cards, chips, buttons.

What this screen should feel like:
- Safe and quietly triumphant — a small, real win on her home turf, with Scout standing beside her. Warm, never patronising, never "well done, dear."
```

---

## Sources

- Product context: `docs/PRODUCT.md`
- Brand strategy & Visual Inspiration appendix: `design/1. Product Identity.md`
- Screen selection: `design/2. Magic Moment.md` + `design/3. Onboarding Flow.md` (landing teaser = screen 1; Task 1 = the magic moment, screen 4)
- Design tokens (once generated): `docs/DESIGN.md`
