---
version: alpha
name: Basecamp Warmth
description: A warm, beginner-friendly two-mode design system for AIBasecamp.TV — a calm warm-paper "learning" theme for product surfaces and a deep-teal "beacon" theme for marketing, unified by Scout's headlamp yellow. Source Serif 4 + Hanken Grotesk, hairline depth, friendly rounded shapes.
colors:
  # --- Learning mode (canonical — product surfaces: Starter Kit, course, email, app) ---
  primary: "#1C1917"
  secondary: "#8B6B4A"
  tertiary: "#FFD24A"
  on-tertiary: "#1C1917"
  neutral: "#F8F5F0"
  surface: "#FFFFFF"
  surface-container: "#F2EEE7"
  surface-container-high: "#E8E3D9"
  on-surface: "#1C1917"
  on-surface-variant: "#6B6660"
  outline: "#B8B0A4"
  outline-variant: "#E0D9CC"
  # --- Beacon mode (marketing / thumbnails — the headlamp glows in the dark) ---
  beacon-surface: "#0B2128"
  beacon-surface-container: "#123038"
  beacon-surface-container-high: "#163A44"
  on-beacon-surface: "#FFFFFF"
  on-beacon-surface-variant: "#CFE3E8"
  beacon-outline: "#1C4A55"
  # --- Shared accent glow + semantics ---
  accent-soft: "#FFE9A8"
  success: "#3F7D5B"
  warning: "#C77B30"
  error: "#B23A2E"
  on-error: "#FFFFFF"
  error-container: "#F4DAD5"
  on-error-container: "#7A1F16"
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.4
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.06em
rounded:
  none: 0
  sm: 6px
  md: 10px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  gutter: 24px
  margin: 48px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 14px 28px
    height: 48px
  button-primary-hover:
    backgroundColor: "#F4C12E"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 14px 26px
    height: 48px
  button-secondary-hover:
    backgroundColor: "{colors.surface-container}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 14px 22px
    height: 48px
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 14px 16px
    height: 50px
  input-field-focus:
    backgroundColor: "{colors.surface}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px
  worked-example-card:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.lg}"
    padding: 24px
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  list-item:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    padding: 14px 0
  list-item-hover:
    backgroundColor: "{colors.surface-container}"
  checklist-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 14px 16px
---

# Basecamp Warmth

## Brand & Style

Basecamp Warmth is a warm, hand-drawn-adjacent design system built for a nervous beginner, not a power user. The aesthetic intent is **"a guide's warm camp, not a tech dashboard."** Where the rest of the AI category reaches for purple gradients, dark mode, and abstract orbs, this system reaches for warm paper, friendly rounded shapes, and a single glowing headlamp. It should feel like Scout — calm, patient, and quietly competent — got the room ready for you.

The system runs in **two modes**, and the choice between them is strategic, not decorative. **Beacon mode** (deep teal mountain-night) is for marketing and thumbnails, where the headlamp yellow needs darkness to glow and earn the click. **Learning mode** (warm paper daylight) is for every product surface where the customer actually reads and works — the Starter Kit, the course, emails — because the place she learns should feel safe and legible, never dramatic. The emotional response, in both modes: *you're in good hands, and you're not behind.*

## Colors

A warm-grounded palette with one reserved accent. Learning mode is canonical (it's where components live); beacon mode is the marketing variant.

- **Primary (#1C1917):** Warm near-black ink — headlines, body text, and text on accent buttons. The learning baseline.
- **Secondary (#8B6B4A):** Scout brown — illustration accents, secondary marks, warm dividers. The brand's "fur."
- **Tertiary / accent (#FFD24A):** Beacon yellow — *reserved* for the headlamp, one highlight word, and CTAs. Used as a fill behind ink text, never as text on a light surface. Two yellows on a screen kills the signal.
- **Neutral (#F8F5F0):** Warm paper — the learning-mode page background. Softer and more human than pure white.
- **Surface (#FFFFFF) / surface-container (#F2EEE7) / -high (#E8E3D9):** Paper-on-paper layers for cards, inputs, and grouped content.
- **Beacon surfaces (#0B2128 / #123038 / #163A44):** Deep teal night for marketing; **on-beacon-surface (#FFFFFF)** and **on-beacon-surface-variant (#CFE3E8)** carry text.
- **On-surface-variant (#6B6660):** Warm muted grey for captions and helper text — body-text-only on paper (meets AA at body sizes, not for fine print on color).
- **Semantics:** success #3F7D5B, warning #C77B30 (a burnt amber, deliberately *not* the reserved brand yellow), error #B23A2E. Design Tokens: see YAML frontmatter.

## Typography

The system pairs **Source Serif 4** (a literary, refined serif) for headlines with **Hanken Grotesk** (a friendly, highly legible grotesque) for body — both free on Google Fonts, and deliberately not the vibe-coded AI defaults (Inter, Outfit, Instrument Serif, Plus Jakarta).

- **Display & headlines** are Source Serif 4 600 with slight negative tracking — warm and editorial, never cold or techy. Its calm authority is the typographic version of Scout's face.
- **Body** is Hanken Grotesk 400 at **17–18px / 1.6** — intentionally larger than a typical SaaS system, because the reader is ~49 and **readability is a brand value, not an accessibility afterthought.** Small low-contrast grey text would betray the brand's whole promise on the page.
- **Labels** are Hanken Grotesk 600; the smallest uses 0.06em tracking for quiet eyebrows and tags. Never set body copy in all-caps.

## Layout & Spacing

A calm, single-thing-at-a-time layout — the visual enactment of the product's "we removed the firehose" mechanism.

- **Content width:** reading columns cap at ~660px; UI frames at ~1000px. Page margins start at 48px and grow on larger viewports.
- **Vertical rhythm:** an 8px base — `xs 4 · sm 8 · md 16 · lg 32 · xl 64`, with `gutter 24` and `margin 48` as named tokens. Section breaks use `xl (64)` to let the page breathe.
- **One thing at a time:** never present a wall of options. Onboarding and the Starter Kit show a single focal action per view; checklists reveal the next step, not all five at once.

## Elevation & Depth

Depth comes from warm hairline borders and paper-on-paper layering, not drama.

- **Level 1 (Page):** warm paper (learning) or teal night (beacon) — no border, no shadow.
- **Level 2 (Cards, inputs):** a paper-white surface with a 1px `outline-variant` border. No drop shadow in learning mode.
- **Level 3 (Floating, rare):** a single very soft shadow `0 1px 3px rgba(28,25,23,0.06)` for menus/popovers, always paired with the border.
- **Beacon exception:** in marketing mode, the *only* glow on the canvas is the headlamp — a soft radial of `accent-soft (#FFE9A8)`. Nothing else emits light. That restraint is what makes the beacon read.

## Shapes

Friendly and rounded, never sharp or architectural — the shape language of Everyman warmth, not a precision dashboard.

- Buttons and chips use `rounded-full` (pills) — approachable, tappable, unintimidating.
- Cards and the worked-example/answer surfaces use `rounded-lg (16px)`; inputs and checklist items use `rounded-md (10px)`.
- Sharp `none (0)` is reserved for full-bleed image and illustration edges only.

## Components

### Buttons
The **primary** button *is the brand CTA*: beacon-yellow fill with ink text, pill-shaped, 48px tall with generous padding (big, friendly tap targets for a nervous user). Hover deepens the yellow slightly. **Secondary** is a paper surface with ink text and a hairline border; **ghost** is transparent muted text for low-stakes actions ("I'm good with the free path"). Yellow never appears on more than the single primary action per view.

### Inputs & Forms
Paper-white fields, `rounded-md`, 50px tall, with a 1px `outline-variant` border that darkens to `outline` on focus. Labels sit above; helper text below in `body-sm` `on-surface-variant`; errors swap to `error` with text on `error-container`. Calm and roomy — never cramped.

### Cards
Standard **card** is paper white, `rounded-lg`, 24px padding. The **worked-example-card** (the read-it/judge-it surface central to the magic moment) uses `surface-container` and `body-lg` so the AI answer is the most readable thing on the page.

### Chips
Pill-shaped topic selectors (gardening · cooking · my job) — paper surface, ink text, hairline border. The scaffolding that replaces the blank box: she picks, never types into nothing.

### Lists & checklist
List items are borderless with `outline-variant` dividers and a `surface-container` hover. The **checklist-item** (the "one down, four to go" Starter Kit tracker) is a paper card with a circular check; the completed item fills with ink, the rest stay calm and de-emphasized.

## Do's and Don'ts

- **Do** reserve beacon-yellow (#FFD24A) for the headlamp, one highlight word, and the single primary CTA. Two yellows per screen kills the beacon.
- **Don't** use techy dark mode on learning surfaces — teal night is *only* for marketing, where the lamp needs the dark.
- **Do** set body text at 17–18px. Readability is a brand value; the reader is 49.
- **Don't** use shadows for hierarchy where a warm hairline border will do — this is paper-on-paper, not a card-stack.
- **Do** keep shapes friendly and rounded (pills for buttons/chips). Sharp corners read as cold and technical.
- **Don't** introduce purple gradients, abstract AI orbs, 3D blobs, robots, or headset-stock photography — ever.
- **Do** use Source Serif 4 + Hanken Grotesk only; never Inter, Outfit, Instrument Serif, or Plus Jakarta.
- **Do** maintain WCAG AA contrast: ink-on-paper (~16:1) and ink-on-yellow (~12:1) pass comfortably; `on-surface-variant` grey is body-text-only.
