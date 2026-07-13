# AIBasecamp.TV — Design System

Beginner-AI education for everyday people who feel behind. Guide character: **Scout**, a warm brown bear with an always-on headlamp. This design system encodes the brand's two palette modes, type scale, spacing, components, and the voice/visual constraints that keep it warm and human — the opposite of hype-y AI branding.

**Namespace:** components mount from `window.AIBasecampTVDesignSystem_944591` in `@dsCard` HTML.

## Source materials
Built from uploaded brand docs (no codebase or Figma was provided):
- `uploads/1. Product Identity.md` — mission, contrarian belief, Everyman archetype, voice, visual world.
- `uploads/4. Landing Page.md` — the 11-section landing page spec and copy.
- `uploads/landing-page-wireframe.html` — lo-fi flow/copy wireframe.
- `uploads/AIBasecamp-banner-2560x1440.png` — the beacon-mode banner. **Scout was extracted from this file** into `assets/scout-portrait.png` (his headlamp portrait) and the banner downscaled to `assets/beacon-banner.png`. These are the only real brand image assets available.

## The one-line identity
Everyman brand helping everyday people use AI for the real things in their life — and feel completely capable doing it. *You were never behind; you were handed AI in the wrong order.*

---

## CONTENT FUNDAMENTALS — how the brand writes

**Register:** warm-but-not-parental, plain-but-not-dumbed-down, calm-but-not-boring, encouraging-but-not-a-cheerleader, honest-but-not-preachy. Peer-with-your-back, never "let me help you, dear."

**Person:** speaks to "you" directly; the guide is "we"/"Scout." First-person, warm CTAs ("Get **my** free Starter Kit").

**Casing:** sentence case everywhere — headlines, buttons, nav. Eyebrows/labels are the one exception (uppercase, tracked). Source Serif 4 headlines are sentence-case, not title-case.

**Emoji:** none. The wireframe used 🐻🧭📋🌙 as placeholders — in the real system these become Scout illustrations or quiet glyphs, never emoji.

**The tuning fork** (read any copy aloud against this): *"That bland answer wasn't you failing — it was the wrong starting point, that's all. Let's try one you already know."*

**We say:** "you're not behind," "here's the first step," "let's try one you already know," "nice — you just did that," "no rush," "that wasn't your fault," "at basecamp," "I tried the confusing way so you don't have to."

**We NEVER say** (kill-list, absolute): "easy," "simple," "just" (minimizing her task), "obviously," "for dummies," "unlock," "supercharge," "10x," "game-changer," "blow your mind," "don't get left behind," "everyone else is ahead," "revolutionize." Never call the thing easy — make it *doable*.

---

## VISUAL FOUNDATIONS

**Two palette modes** (the core of the system):
1. **Beacon** (`.beacon` class / `data-mode="beacon"`) — deep teal-slate mountain-night, campfire-dark (NOT techy dark-mode). For marketing: hero, thumbnails, banners. Dramatic and quiet so the headlamp reads as the one glowing point of light. Backdrop: `--beacon-gradient` (radial teal). Headlamp glow: `--headlamp-beam`.
2. **Warm-paper** (default `:root`) — warm off-white daylight. For learning surfaces: lead magnet, course, emails, docs. Calm, generous negative space, high legibility. Feels safe, not dramatic.

**When to use which:** if the surface sells or attracts (feed, ad, hero, thumbnail) → beacon. If the surface teaches or is read at length (kit, course, email, docs, forms) → warm-paper. A single page may open in beacon and settle into warm-paper (see the landing kit).

**Color rules:** warm brown = Scout; teal-slate = marketing grounds; warm off-white = learning. **ONE amber-yellow** (`--amber-glow` #ffd24a, CTA `--amber-500`) reserved ONLY for the headlamp glow, a single highlighted word, and CTAs — never a decorative fill, never a background wash beyond the faint `--accent-quiet`.

**Type:** Source Serif 4 (headline serif, warm/editorial, weights to 900) + Hanken Grotesk (body, highly legible). Large legible type is a brand VALUE — body floor is 18px, nothing below 16px, generous line-height (1.6 body / 1.12 display), short measures (~46ch body, ~18ch heading), strong contrast. Deliberately NOT Inter/Outfit/Instrument Serif/Plus Jakarta.

**Spacing:** calm, generous negative space — the visual enactment of "we removed the firehose." Section rhythm at 96px; roomy card padding (32px). One thing at a time, never a wall of options.

**Backgrounds:** beacon uses a soft radial teal gradient + the real banner/Scout art; warm-paper is flat off-white with subtly raised surfaces (`--surface-raised`). No decorative gradients on paper, no patterns, no purple.

**Corners & cards:** soft radii (8/14/20/28px; pills at 999px for CTAs), never sharp-techy. Cards = white/paper surface, hairline border, warm low shadow. No colored-left-border cards.

**Shadows:** warm-brown-tinted, soft, low (`--shadow-sm/md/lg`). Never a hard techy drop-shadow. On beacon, glow (`--glow-lamp`) replaces shadow.

**Motion:** calm, no bounce, no hype. Gentle fades + small slides on `--ease-calm`, 140–420ms. FAQ expands smoothly; buttons lift 1px on hover, press down 1px. No infinite decorative loops.

**Hover/press:** primary CTA brightens amber→glow on hover and lifts 1px; secondary borders warm to the focus color; press translates +1px down. Links go from brown to lighter brown (amber on beacon).

**Borders & focus:** 1–2px; warm focus ring (`--focus-ring` brown on paper, amber on beacon) plus a soft `--accent-quiet` halo on inputs.

**Imagery vibe:** warm, hand-drawn, Scout-led (New Yorker/Notion warmth, never cartoonish). No stock photos of people, ever. Photography is earned-proof only (a real named student who chose to share). Warm color temperature throughout.

**NEVER in frame:** purple gradients, abstract AI orbs, 3D blobs, robots, glowing-neural anything, headset stock, slick-UI-floating-in-space.

---

## ICONOGRAPHY

The brand is **illustration-led, not icon-led** — Scout scenes carry meaning where most products would drop an icon. No built-in icon font, no icon set in the source materials.

- **Primary "icon" system = the Scout kit**: expression/pose/scene illustrations mapped to content moments (pointing at the first step, beside her, celebrating a small win, at the door out). Only `assets/scout-portrait.png` (the headlamp head) exists today — the full pose kit is a **needed asset** (see Caveats).
- **Emoji:** never.
- **Unicode as glyph:** used sparingly and quietly — the `+` toggle in `FAQItem`, the `→` arrow auto-appended to `Button variant="quiet"`. That is the extent of glyph usage.
- **If a small UI icon is genuinely required** (e.g. a nav chevron), use a quiet line glyph or a CDN line-icon set (Lucide, matching the calm 1.5px stroke feel) and keep it monochrome in `--text-muted`. Flagged as a substitution — no icon set was provided.

---

## COMPONENTS

Mount from `window.AIBasecampTVDesignSystem_944591`. All read tokens, so they invert automatically inside a `.beacon` container.

- **Button** (`core/`) — the single action; `primary` = reserved amber CTA pill, `secondary` outline, `quiet` text+arrow.
- **ToolChip** (`core/`) — honest plain name-tag for a familiar tool (no fake logos).
- **Badge** (`core/`) — small calm label; `free` / `success` / `note` / `neutral`.
- **Input** (`forms/`) — calm labeled text field, warm focus ring.
- **Textarea** (`forms/`) — multiline; `monospace`+`readOnly` for prompt boxes.
- **Card** (`content/`) — base warm surface; `paper` / `quiet` / `beacon`, `elevated`.
- **Callout** (`content/`) — warm aside; `reassure` / `honest` / `note`. Never an alert.
- **StepCard** (`content/`) — one step on the Basecamp Path.
- **FeatureCard** (`content/`) — reassurance-led benefit with icon slot.
- **PricingCard** (`content/`) — one rung of the gentle one-time ladder; `featured` = free kit.
- **FAQItem** (`content/`) — honest expandable objection-handler.
- **Logo** (`brand/`) — the AIBasecamp.TV wordmark + Scout mark (typographic; no separate drawn logomark).

**Intentional additions** (no source component library existed): the set above was authored from the landing-page spec. `ToolChip`, `StepCard`, `FeatureCard`, `PricingCard`, `FAQItem`, and `Logo` are landing-specific compositions; `Button`, `Badge`, `Input`, `Textarea`, `Card`, `Callout` are the general primitives.

---

## INDEX / manifest

**Root**
- `styles.css` — global entry (import this one file). `@import`s the four token files.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper.

**tokens/** — `fonts.css` (Source Serif 4 + Hanken via Google Fonts), `colors.css` (both modes), `typography.css`, `spacing.css` (spacing/radius/shadow/motion).

**assets/** — `scout-portrait.png` (headlamp head, extracted from banner), `beacon-banner.png` (full banner, downscaled).

**components/** — `core/` (Button, ToolChip, Badge), `forms/` (Input, Textarea), `content/` (Card, Callout, StepCard, FeatureCard, PricingCard, FAQItem), `brand/` (Logo). Each dir has a `*.card.html` specimen.

**guidelines/** — foundation specimen cards (Colors ×6, Type ×3, Spacing ×3, Brand ×3).

**ui_kits/landing/** — the full AIBasecamp.TV landing page (`index.html` + `LandingPage.jsx`): beacon hero → warm-paper body, with a working Starter-Kit email-capture flow.

---

## Caveats / needed assets
- **Fonts load from Google Fonts CDN** (Source Serif 4 + Hanken Grotesk — the real brand faces), not self-hosted binaries. If you need offline/self-hosted webfonts, drop the `.woff2` files in `assets/` and swap `tokens/fonts.css` to `@font-face` rules.
- **Only Scout's headlamp portrait exists.** The brand's real deliverable is a full Scout *pose kit* (pointing / beside-her / celebrating / at-the-door). Those illustrations are not in the source — components use the single portrait as a stand-in. Commission or supply the pose kit to complete the system.
- **No separate logomark** was provided; the identity is the typographic wordmark + Scout portrait.
