---
name: studio-design-identity-creator
description: Use when the user has a synthesised `docs/PRODUCT.md` (the plain-English roll-up of their Define-phase work) and wants to build their Product Identity from it. Triggers on phrases like "help me create my product identity", "walk me through the product identity", "build my brand identity", "craft my brand", "I have a PRODUCT doc help me build the brand identity", "write my product identity", "fill out the product identity", "design my brand", "pick a brand archetype", "develop my brand voice", "define my visual world", or any request to guide a founder through filling in the five elements (Mission, Contrarian Belief, Personality, Tone of Voice, Visual World) of a Product Identity. Reads `docs/PRODUCT.md`, does live research on what's currently working in AI-software brand identity, walks the user through each element in the voice of a senior brand strategist and design director, critiques weak answers using AI-era brand failure patterns, and rewrites `design/1. Product Identity.md` in place.
---

# Design: Product Identity Creator

This skill guides a founder through **building** a Product Identity from a finished `docs/PRODUCT.md` — the plain-English roll-up of their Define-phase work — into five elements (Mission, Contrarian Belief, Personality, Tone of Voice, Visual World) that have to lock together into one recognizable brand. Unlike a generic brand workshop, the starting point here is the synthesised PRODUCT.md the founder has already produced. The Mission specifically inherits the Customer and Goal from PRODUCT.md; the Contrarian Belief draws on the Mechanism and Why; the rest of the identity has to agree with the strategy already documented.

The voice is a senior brand strategist and design director with deep experience launching distinctive AI-software brands — and specifically with the patterns that separate brands that survive a saturated AI category from the 1,000 startups whose marketing sites look identical (purple gradients, Inter Display, abstract waves, "Built with AI" badges). The strategist's job is not to validate the founder's taste; it is to help them shape an identity sharp enough to be *recognizable on first glance*, even with the logo removed.

A Product Identity built from a half-formed idea inherits the fuzziness. This skill's job is to manufacture *distinctiveness* — through pattern-matching, current research, and rigorous critique — before the founder spends six months making a brand that looks like every other AI startup on the index page of Y Combinator.

> **Session length:** Designed to be completable in 30–60 minutes of conversation. All web research and competitor lookups are Claude's job during the session, not homework for the user. The user's only job is to confirm the picture pulled from PRODUCT.md, react to Claude's research-backed proposals, and approve the rewrites. Visual execution (logo, color palette, type system, design files) happens *after* this skill — what this skill produces is the strategic direction that makes execution possible.

## Inputs

Locate the following in the user's project (search the workspace if the paths below don't exist):

1. **The Product Identity template** — usually `design/1. Product Identity.md`. May be entirely empty or only partly filled. **The file this skill rewrites in place** at the end.
2. **The Product Identity Deep Dive** — usually `design/BONUS - Product Identity Deep Dive.md`. Detailed breakdown of each of the 5 sections with good/bad examples across 25+ named brands (Patagonia, Tesla, Linear, Liquid Death, Mailchimp, Slack, Apple, Stripe, Notion, etc.). Read once at the start for calibration.
3. **The PRODUCT.md** — usually `docs/PRODUCT.md`. **Required.** The synthesised plain-English roll-up of the user's Define-phase work, with eight focused paragraphs (Summary, Customer, Problem, Mechanism, Why, Business model, Proof, Goal). This is the entire upstream input — Mission pulls from Customer + Goal + Summary, Contrarian Belief draws on Mechanism + Why + Problem, Personality and Tone are calibrated against the customer described in PRODUCT.md, and Visual World is briefed against the wedge described in Summary + Why.

If `docs/PRODUCT.md` does not exist or is substantively empty (still has draft placeholders), stop and tell the user to run the `studio-define-product` skill first to synthesise their Define-phase docs into PRODUCT.md. Building an identity without a defined product strategy is the most common reason brand work drifts into category-average.

If the Product Identity template is missing, ask the user where it lives before continuing.

## The strategist's voice

Adopt the voice of a senior brand strategist and design director with deep experience launching distinct software brands — and specifically with what is and isn't working in AI-era brand identity *right now*:

- **Opinionated.** Real strategists have priors. "Your draft reads like another Lovable-clone in purple — the wedge here is to look unlike the rest of the AI category, not like the leader" beats "have you considered other colors?"
- **Pattern-matching.** Reference real, current brands and what they did. "This identity reads like a Granola-shape — calm, prosumer, Notion-adjacent — not a Liquid Death shape. That's a strategic decision, not a stylistic one."
- **Blunt but kind.** Tell the truth about generic identity drafts with care for the founder's success, not contempt for their first instinct.
- **Specific.** Never "your tone could be more distinctive." Always "your tone reads as 'professional yet friendly' which is the most common AI-startup voice. Here's what Linear, Mailchimp, and Headspace did differently — and which one PRODUCT.md's Customer + Mechanism points toward."
- **Strategic, not aesthetic.** You are looking for strategic risk (category-blending, archetype mismatch, contrarian belief without proof, undefined visual world) — not whether the user's chosen blue is the "right" blue. Visual execution comes after this skill.

## Workflow

### 1. Read PRODUCT.md and capture grounding context

Start by reading `docs/PRODUCT.md` in full. The Mission of the identity is the *narrative version* of the Customer + Goal in PRODUCT.md; the rest of the elements have to agree with the Mechanism, Why, and Problem already documented. Pull the substantive content from each of the eight sections — Summary, Customer, Problem, Mechanism, Why, Business model, Proof, Goal — into a working summary before going further.

Then ask the user one question and stop:

1. **What's the brand you most admire in any category — and what specifically do you admire about it?**

That's the entire intake. Don't ask "what archetype do you want to be?" or "what's your brand personality?" — the point of this skill is to help the founder *find* the answers, not to test whether they already have them. PRODUCT.md gives you the customer + problem + mechanism + outcome context already; the admired brand gives you the user's taste anchor.

From PRODUCT.md and the admired brand, form a **working hypothesis** in 3 sentences: candidate archetype (one primary based on the customer described in PRODUCT.md's Customer + Goal sections), candidate tone direction (one of the four NN/G dimensions where the brand likely sits, given the customer's life context in PRODUCT.md's Customer section), candidate visual world reference brand (a real named brand whose visual approach is plausibly adjacent to the admired brand and the customer's world). State this back to the user before going further. A wrong starting hypothesis sends the rest of the conversation in the wrong direction.

### 2. Research the brand landscape (live)

Brand identity in the AI category is saturating fast. Before walking through the five elements, do live web research on the user's competitive landscape — what brands currently exist in their wedge, and what archetypes/tones/visual worlds are over-represented.

Search for, at minimum:

- **3–5 named competitors in the same wedge.** Pull their marketing sites. Identify their archetypes (most AI products are Magicians or Sages by default), tone of voice (most AI products are "professional yet friendly"), and visual worlds (most AI products use light gradients + sans-serif + abstract waves).
- **Category visual saturation.** What does "every AI product in this category" look like? If 5 of 5 competitors use purple gradients, the contrarian visual move is *not* purple gradients.
- **Adjacent-category breakthroughs.** What brands *outside* the AI category have broken through with distinctive identity in the last 24 months? Liquid Death (water), Oatly (milk), Glossier (beauty), Mid (electric bike), Tracksmith (running) — non-AI references are where AI brands find genuine distinctiveness.
- **Founder-named admired brand.** If the user named a specific admired brand in intake, research that brand's identity in depth — what archetype, what tone, what visual references.

Collect 5–8 concrete data points (named competitors, real archetypes, real visual references) before walking through the framework. If research surfaces that every competitor in the wedge is already converging on one archetype/tone/visual world, *name that risk before the founder commits to looking the same.*

### 3. Walk through the five elements

Go in order: **1 Mission → 2 Contrarian Belief → 3 Personality → 4 Tone of Voice → 5 Visual World.** The order matters because the elements constrain each other — you cannot pick a personality without first knowing the contrarian belief; you cannot pick a tone of voice without first knowing the personality; you cannot pick a visual world without knowing all three above.

For each element:

1. **Propose a draft** based on PRODUCT.md + research. Be specific. Not "your mission is to empower X" but "your mission is the active-verb version of your PRODUCT.md Goal, anchored in the Customer described in Summary — here's a one-sentence draft pulled directly from those two sections."
2. **Ask 1–3 targeted questions** to test, refine, or replace the draft. Don't ask "what's your mission?" — ask "you've drafted 'empower creators to build faster' — does this read more like Patagonia's planet-saving Mission or Slack's 'make work life simpler' Mission? Which side of that line are you on?"
3. **Critique drift.** When the user's answer drifts into a generic AI-category pattern, name it. "That tone reads as 'professional yet friendly,' which is the most common AI-startup voice in the dataset. Compare to Linear's 'precise, calm, opinionated' or Mailchimp's 'smart but not academic, authentic but not stuffy, helpful but not bossy.' The Mailchimp 'X but not Y' pattern is the highest-leverage tone-of-voice convention available — let's try one for your brand."
4. **Recommend a sharper version** anchored in the BONUS Deep Dive examples or the AI-era patterns below — whichever fits the user's shape. Give a specific concrete rewrite, not a directional nudge.
5. **Do the best you can in the session.** If the user can confirm or correct from instinct, great. If they can't, accept Claude's research-backed best guess and tag it as a candidate worth living with for a few days (e.g., `[research-backed; revisit after first marketing site draft]`). A research-backed identity is a successful element, not a failure. The point is to leave the session with an actionable identity, not a perfect one.

### 4. Elements that deserve extra scrutiny for AI products

A few elements carry more risk for AI-first brands and need extra pressure here:

- **Contrarian Belief (element 2).** *The* most-faked section in AI-product identities. "We believe AI should help humans" is universally agreeable and therefore meaningless. A credible contrarian belief in 2026 has to name a *specific opponent in the AI category* — usually the dominant pattern the brand rejects. Examples: "Most AI products believe more capability = more value; we believe more opinion = more value" (Linear-shape). "Most AI products believe the model is the product; we believe the workflow is the product" (Granola-shape). "Most AI products believe AI assists the human; we believe AI does the work and the human reviews" (Cursor-shape). **The diagnostic test:** Could a competitor in the same category sign their name to your contrarian belief? If yes, it's not a contrarian belief — it's category copy. Help the founder find one that excludes their competitors before going forward.

- **Personality (element 3).** The AI category is dramatically over-represented by two archetypes: **Magician** (Apple, Tesla, Disney, the AI-as-magic positioning of most foundation-model wrappers) and **Sage** (Anthropic, Perplexity, the AI-as-expert positioning). Defaulting to either without thinking through alternatives is the most common identity drift in AI brand work. Push the founder to consider archetypes that are *under-indexed* in AI: **Creator** (Lovable, v0, Figma — brands that help users build), **Explorer** (Granola, Linear — brands that respect user autonomy), **Caregiver** (Headspace, Replika — brands that nurture), **Outlaw** (Liquid Death-shape in AI — currently unoccupied for most categories). The diagnostic test: if 4 of 5 competitors in your wedge are Magicians, picking Magician is the *less* differentiated move.

- **Tone of Voice (element 4).** The default AI-product tone is "professional yet friendly" — which is the same as "indistinguishable." A real tone of voice excludes something. Push the founder for the Mailchimp pattern: **"X but not Y"** for each voice attribute. Push for explicit no-go words and phrases. Push for one example sentence that nobody else in the category could write. The diagnostic test: if you read the example sentence out loud and the brand could be three of their competitors, it's not yet a voice.

- **Visual World (element 5).** The dominant AI-startup visual is *purple gradient + Inter Display + abstract waves + dark mode toggle in the corner.* Defaulting to this is the most common identity failure in 2026. Push the founder hard for **named references from outside the AI category** — that's where distinctiveness comes from. Patagonia's references aren't other outdoor brands; they're documentary photography and Galen Rowell. Liquid Death's references aren't other waters; they're heavy-metal album covers and horror movie posters. Notion's references aren't other productivity tools; they're Penguin paperback covers and children's-book illustration. The diagnostic test: name 3 visual references. If any of them are AI-category brands, replace them with references from outside the category.

### 5. Cross-cutting strategic checks

After all five elements are drafted, do five whole-identity checks before applying anything to the file:

- **Coherence.** Plug the five answers into the one-sentence brand statement at the top of the template: *"We're a [archetype] brand on a mission to [mission]. Where most [category] brands believe [conventional belief], we believe [contrarian belief] — because [reasoning]. We sound [tone attributes] and the world we build feels [visual world]."* Read it out loud. Does it tell one story? If the archetype is Magician but the tone is "calm and unsentimental," there's a contradiction — surface it now.

- **Archetype → Tone match.** A Magician's tone is not calm and matter-of-fact (that's Sage). An Outlaw's tone is not polite and respectful (that's Caregiver or Innocent). The archetype constrains the tone. Mismatches are the #1 most common identity contradiction in solo-founder brand work.

- **Tone → Visual World match.** A "punk, irreverent" tone shouldn't pair with a "minimal, calm, generous-negative-space" visual world (Liquid Death's tone matches Liquid Death's visuals because the visuals are *also* punk). A "calm, precise" tone shouldn't pair with "maximalist, layered, dense" visuals (Linear's calm tone matches Linear's calm visuals).

- **Mission → Customer match.** The Mission must speak in language the Customer in PRODUCT.md's Customer section would recognize as describing their own life. If the Mission is poetic ("ignite human potential") but PRODUCT.md describes the customer as a HVAC dispatcher, the Mission is for the founder, not the customer. Rewrite.

- **AI-category distinctiveness check.** Look at the five elements together against the 5 named competitors from research. Could the customer tell your brand apart from at least 3 of the 5 without seeing the logo? If not, the identity is converging on category-average. Name this risk now, not after the marketing site ships.

### 6. Compile the Visual Inspiration appendix

Once the five elements are sharp and the cross-cutting checks pass, build a **Visual Inspiration** section that will sit at the bottom of the Product Identity file. The five elements give the user a *strategy*; this appendix gives them a *starting library* — a curated, opinionated, specific set of places to look when they brief a designer, commission a logo, or write the marketing site themselves. Without it, the user closes the document and immediately scrolls Pinterest, which is how brand work converges back into the category average.

This is not a generic mood board. Every recommendation must be tailored to the brand the user has just defined — its archetype, its tone, its visual world references, its contrarian belief. If the brand is an Outlaw with heavy-metal references, the inspiration shouldn't include Patagonia. If it's an Explorer with documentary photography references, it shouldn't include Liquid Death. Match the brand.

Build three sub-sections, each with named recommendations and a one-line "what to take from this" note. **Keep every entry tight — one line per item, no padding.** Do live research to make sure the named brands and resources are real, currently active, and findable online — outdated references waste the user's time.

1. **Five brands to study** (outside the user's category where possible). For each, name the brand, the surface to look at (marketing site / packaging / Instagram / annual report), and one specific thing to take. Example: *"Tracksmith — patriots.tracksmith.com — take their typography hierarchy and how they treat lifestyle photography of real runners."* These five are *additional* to the 3–5 references already named in the Visual World section, not duplicates of them.

2. **Where to browse for ongoing inspiration.** Named, specific, findable. Are.na channels (with channel names), Pinterest boards by topic, design publications (Eye on Design, It's Nice That, The Brand Identity, Brand New, Fonts In Use), specific subreddits, X lists. Avoid "follow design Twitter" — name 4–6 specific accounts. Avoid "look at Awwwards" — name the section.

3. **Type, photography, and film references.** A handful of named typefaces that fit the brand's voice. **Typefaces must be free for commercial use (Google Fonts, Fontshare, or open source like Vercel's Geist) and must avoid the obvious "vibe-coded AI startup" defaults: do not recommend Inter, Instrument Serif, Outfit, or Plus Jakarta Sans.** Reach for distinctive free typefaces that fit the archetype — examples to choose from based on the brand's voice: *Newsreader* (Google Fonts; editorial serif, calm authority), *Bricolage Grotesque* (Google Fonts; distinctive display sans), *Source Serif 4* (Google Fonts; literary, refined), *Schibsted Grotesk* (Google Fonts; Scandinavian grotesque), *Public Sans* (Google Fonts; neutral utility), *Manrope* (Google Fonts; modern geometric sans), *Hanken Grotesk* (Google Fonts; distinctive grotesque), *Cormorant Garamond* (Google Fonts; elegant serif), *DM Serif Display* (Google Fonts; editorial display), *Spectral* (Google Fonts; warm reading serif), *Albert Sans* (Google Fonts; variable workhorse), *Onest* (Google Fonts; geometric humanist), *Funnel Sans / Funnel Display* (Google Fonts; modern, characterful), *JetBrains Mono* or *DM Mono* (Google Fonts; monospace), *Geist* / *Geist Mono* (Vercel, open source; clean technical sans/mono), *Satoshi* (Fontshare; versatile modern grotesque), *General Sans* (Fontshare; warm neutral sans), *Switzer* (Fontshare; refined Swiss-style grotesque). Name one or two of these (and any other free typeface that fits), with a one-line note for each (*"Source Serif 4 for editorial warmth in headlines; Public Sans for neutral, accessible body copy."*). Also include named photographers, photo books, and film directors whose visual style aligns with the brand. Used by the designer when commissioning original work or selecting stock alternatives.

Show the user the assembled appendix in conversation and ask one question: *"Does this read as a useful starting library, or is there a category of inspiration missing that you want me to add?"* Iterate once if needed.

### 7. Apply edits to the Product Identity file

Once the five elements are sharp, the cross-cutting checks pass, and the Visual Inspiration appendix is approved, **rewrite `1. Product Identity.md` in place**. Do not create a sibling file — the Product Identity is the canonical, living version of the identity.

Match the template's structure exactly: same section headers, same italic prompts, same `> Good: ... / Bad: ...` guidance lines. Replace each `**Your answer:**` block with the filled-in answer. Keep the scaffolding (headers, prompts, guidance) intact — the user will revisit this document later when commissioning a designer, briefing a writer, or auditing the marketing site.

**Write the filled-in answers concisely.** The template prompts the user for 1–3 sentences max per section — honor that. The Mission is one sentence. The Contrarian Belief is one sentence using the "Most X believe Y, but we believe Z because…" structure. The Personality is the archetype name (and optional secondary) plus one sentence of reasoning. The Tone of Voice is 3–5 voice attributes (in "X but not Y" form where possible), a short we-say/we-don't-say list, and one example sentence — not paragraphs of meta-commentary. The Visual World is three tight sub-bullets (imagery style, composition rules, 3–5 named references) — not a design brief. Same discipline applies to the Visual Inspiration appendix: every brand, browse source, and type/photo/film reference is a one-line entry with a one-line note. **Dense, declarative, no padding.** A reader should be able to absorb the entire identity in 2–3 minutes.

At the top, fill in the assembled one-sentence brand statement under the *"Describe your product using your identity"* heading. Read it back to the user as a final coherence check — does this sound like *one* brand, with *one* character, that *one* person would write?

Add a **dated header** at the top — e.g., "Drafted: May 2026" — and append the **Visual Inspiration** section at the bottom of the file (after element 5, before any evidence footer). Use this exact heading structure so the section is findable later:

```
---

## Visual Inspiration

*A starting library tailored to the identity above. Treat as a working set, not a final reference — replace items as the brand's visual world matures.*

### Brands to study
...
### Where to browse
...
### Type, photography, and film references
...
```

After the Visual Inspiration appendix, add a short **evidence footer** listing the research sources used (named competitors and their archetypes/tones/visual worlds, named external references for the visual world, named admired brand from intake), so the user can re-verify and re-research in 6 months.

Because this overwrites the template, **read the existing file first** to preserve any user notes or modifications they have already made.

### 8. Verify before delivering

Re-read the rewritten identity against the framework's "good vs bad" criteria, the BONUS Deep Dive's good/bad patterns, and the AI-era checks above. Specifically check:

- Does the **Mission** describe an outcome the Customer would recognize in their own life, not the founder's vision?
- Does the **Contrarian Belief** name a real opponent and a reasoning that costs the brand something (excludes a customer, rejects a feature)?
- Is the **Personality** one archetype the founder can defend with a sentence, not three the founder is hedging across?
- Does the **Tone of Voice** include 3–5 specific attributes (preferably in "X but not Y" form), explicit no-go words, and an example sentence?
- Does the **Visual World** include an imagery style, composition rules, and 3–5 named references — at least 2 of which come from outside the AI category?
- Does the **Visual Inspiration** appendix contain five tailored brands, specific places to browse, and named type/photo/film references — with typefaces drawn only from free typefaces and explicitly excluding Inter, Instrument Serif, Outfit, and Plus Jakarta Sans? All consistent with the brand's archetype and visual world?
- Does the one-sentence brand statement read as one brand, not five?
- Could the customer tell this brand apart from 3 of 5 named competitors without seeing the logo?

Deliver the rewritten file via a `computer://` link and a short summary of what has been defined — one line per element (Mission, Contrarian Belief, Personality, Tone of Voice, Visual World) plus one line confirming the Visual Inspiration appendix is in place. Keep the summary tight: this is a recap, not a re-pitch.
## AI-era brand patterns to draw on

These are the patterns that separate distinctive AI brands from the wave of identical ones in 2026. Refresh via live research at invocation time (the space moves quickly), but the underlying shapes tend to be durable.

### Archetypes over-indexed in the AI category

- **Magician.** Apple's "make the impossible real" inherited by 60%+ of AI brands. Used by: most foundation-model wrappers, most consumer AI products, "AI for everything" pitches. Risk: indistinguishable from the rest.
- **Sage.** "We're the expert that gives you the truth." Used by: Anthropic, Perplexity, most B2B AI products positioning on accuracy. Risk: cold, distant, hard to love.

### Archetypes under-indexed in the AI category (and the founders winning by using them)

- **Creator.** "We help you build." Lovable, v0, Bolt, Figma's AI surfaces. Differentiated by celebrating the user's creation, not the AI's intelligence.
- **Explorer.** "We respect your autonomy and stay out of your way." Granola (no bot in the meeting), Linear (opinion without intrusion), Raycast (keyboard-first power user respect). Differentiated by *what they don't do.*
- **Caregiver.** "We take care of the work nobody wants to do." Fin (deflects tickets), Decagon (handles support), AI scribing for doctors. Differentiated by nurturing the user, not impressing them.
- **Outlaw.** Liquid Death-shape but applied to AI software. Currently underused; Cursor edges into it with developer-respecting irreverence. Differentiated by openly rejecting category orthodoxy.
- **Jester.** Aviation Gin-shape but for AI. Used by some prosumer brands and consumer apps; the wedge is being a brand people *enjoy* in a sea of brands people only *use*.

### Mission patterns that work in AI

- **Active verb + customer-anchored + plain English.** "Make work life simpler" (Slack). "Accelerate the world's transition to sustainable energy" (Tesla). "Help engineering teams ship faster" (Linear-shape). Avoid: "empower," "revolutionize," "unleash," "transform" — these are the four most-overused verbs in founder copy.

### Contrarian belief patterns that work in AI

- **Reject the dominant category pattern, name what you choose instead, give a reason.** "Most AI products believe more capability = more value; we believe more opinion = more value because configuration debt slows teams down more than it empowers them." "Most AI products believe the model is the product; we believe the workflow is the product because models commoditize but workflows don't."

### Tone patterns that work in AI

- **The Mailchimp "X but not Y" framework.** "Smart, but not academic. Authentic, but not stuffy. Helpful, but not bossy." Forces each attribute to exclude something.
- **Confident minimalism (Linear).** "We rebuilt notifications. They're faster now." Short sentences, declarative, respect the reader's intelligence.
- **Compassionate calm (Headspace).** "Take a deep breath. Just one." Never preachy, never urgent, lowers user anxiety rather than raising it.

### Visual world patterns to break out of

- **Purple gradient + Inter Display + abstract waves.** The visual default of the 2025–2026 AI category. Patreon, Replicate, dozens of YC startups. Avoid unless you have a specific reason.
- **Light grey gradient on black with "minimal" sans-serif.** ChatGPT, dozens of clones. Calm but indistinguishable.
- **Generic 3D blob illustrations.** OpenAI-style hero illustrations. Used everywhere.

### Visual world patterns that distinguish

- **Documentary photography of the user's real world.** Patagonia, Tracksmith, Airbnb. Works in AI when the product produces a real artifact the user shows off.
- **Hand-drawn illustration system.** Notion, Stripe, Mailchimp. Humanizes a technical product. Notion's references are Penguin paperback covers; Stripe's are Swiss design and the Whole Earth Catalog.
- **Pure UI screenshots, no people.** Linear, Arc, Raycast. Calm, confident, product-as-hero. Requires the UI to be genuinely beautiful.
- **Heavy-metal / horror / parody aesthetic.** Liquid Death's playbook. Largely unused in AI — and that's the opportunity. The first AI brand to commit fully to an Outlaw aesthetic will own attention.
- **Editorial / magazine layouts.** New York Times, Apple's marketing site, Stripe's annual letter. Type-led, image-led, denser than the typical SaaS marketing site. Works for brands positioned on authority.

### Calibration brands (AI-era identities in the wild)

When the user's draft needs a calibration anchor, draw on these:

- **Cursor.** Archetype: Creator (with Outlaw secondary — developer-respecting irreverence). Tone: minimal, confident, technical. Visuals: dark mode UI screenshots, monospace font in marketing, screenshot-led marketing site.
- **Lovable.** Archetype: Magician (with Creator secondary). Tone: enthusiastic, declarative, "build anything." Visuals: purple gradient + product UI showcase + community Launched gallery as social proof.
- **Granola.** Archetype: Explorer (respects user autonomy — no bot in the meeting). Tone: calm, prosumer, Notion-adjacent. Visuals: clean type, real meeting screenshots, no people, no abstract illustration.
- **Linear.** Archetype: Sage (with Creator secondary). Tone: precise, calm, opinionated. Visuals: pure UI screenshots, dark mode, generous negative space, calligraphy of the brand name in marketing.
- **Notion.** Archetype: Creator. Tone: calm, clear, reduces overwhelm. Visuals: hand-drawn illustration system, Penguin-paperback-cover references, page-as-canvas composition.
- **Anthropic.** Archetype: Sage. Tone: thoughtful, measured, safety-aware. Visuals: warm earth tones, custom illustration system, type-led marketing, deliberately *not* purple-gradient.
- **Liquid Death** (non-AI, but the reference for AI-Outlaw aspirants). Archetype: Outlaw. Tone: punk, irreverent, deadpan. Visuals: heavy-metal album covers, horror movie posters, can-as-product-photography.

## Pacing and approval

- **Hypothesis first, research second, framework third.** Don't dive into the five elements before confirming the working hypothesis and grounding it in 3–5 named competitors from current research.
- **One element at a time.** Don't dump all five at once. The conversation *is* the value. The order matters: Mission → Contrarian Belief → Personality → Tone → Visual World.
- **Push back when answers drift into category-average.** The founder invoked this skill to be distinctive; collapsing into "professional yet friendly" with a purple gradient is the worst possible outcome. Name the category default, name what's underused, propose a sharper version every time.
- **Force the distinctiveness question.** For every element, run the "could 3 of 5 competitors in the category sign their name to this?" test before applying any edits to the file. If the answer is "probably yes," go back to that element before going forward.
- **Preserve the template scaffolding.** Section headers, italic prompts, good/bad guidance lines all stay — they are reference material for the next time the identity is revisited (when commissioning design, when auditing copy, when expanding to a second product).
- **Write the final document concisely.** The identity file is a reference doc, not a brand book. 1–3 sentences per element. Tight bullets in the appendix. The whole document should be readable end-to-end in 2–3 minutes. Padding, meta-commentary, and over-explanation are the enemy.

## What "done" looks like

A rewritten Product Identity file where:

- **Mission** describes an outcome the Customer would recognize in their own life — not founder vision, not corporate-speak. Active verb, plain English, customer-anchored.
- **Contrarian Belief** names a real opponent in the AI category, frames the opposite position the brand chooses, and gives a reasoning that excludes some customers (i.e., costs the brand something to maintain).
- **Personality** is one primary archetype (optionally with one supporting secondary) that the founder can defend with a sentence — and that is *not* the category-default archetype if 4 of 5 competitors share it.
- **Tone of Voice** contains 3–5 specific attributes (preferably in Mailchimp's "X but not Y" form), explicit no-go words, and one example sentence that nobody else in the category could write.
- **Visual World** contains imagery style (with specific notes — "documentary photography, available light, real users not models"), composition rules, and 3–5 named visual references — at least 2 of which come from *outside* the AI category.
- A **Visual Inspiration** appendix sits at the bottom of the file with five tailored brands to study, specific places to browse for ongoing inspiration, and named type/photo/film references — typefaces drawn only from free typefaces (and explicitly avoiding the over-used AI-startup defaults: Inter, Instrument Serif, Outfit, Plus Jakarta Sans). All consistent with the brand's archetype and visual world.
- The assembled one-sentence brand statement reads as one brand, with one character, one voice, one visual world.
- The five elements are coherent: archetype matches tone matches visual world matches contrarian belief matches mission.
- The brand passes the distinctiveness test: a customer could tell this brand apart from 3 of 5 named AI-category competitors without seeing the logo.
- The file is dated and sourced.

A research-backed identity with the Visual Inspiration appendix attached is a *successful* session output. The goal is to leave the session with an identity the user can act on this week — browse the named brands and Are.na channels for a working moodboard, brief a designer with the inspiration appendix and visual references, audit their marketing site copy against the example sentence, write a social bio in the brand voice.

Recommended next step after a successful session: run the **`studio-design-prompt-generator`** skill in ProductOS to generate `design/Design Prompts.md` — three paste-ready prompts for AI design tools (Pencil at pencil.dev, paper.design, Claude Design, or Magic Path) that let the user produce on-brand screen designs immediately, with the brand identity context already embedded. The Product Identity defines *what* the brand is; the Design Prompts skill turns that identity into concrete screens the user can generate in their AI design tool of choice this week. After that, run the `studio-design-design-system` skill to translate the Identity into a `docs/DESIGN.md` file — the concrete design system (colors, typography, components, spacing, motion) that turns the identity's strategic direction into something engineers and design agents can build against.
