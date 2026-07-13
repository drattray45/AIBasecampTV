---
name: studio-design-name-review
description: Use when the user has a working product name idea (or is choosing between a few) and wants it critiqued against naming best practices and the brand strategy already documented in `docs/PRODUCT.md` and `design/1. Product Identity.md`. Triggers on phrases like "review my product name", "is my name any good", "critique my name", "what should I call my product", "is [name] a good name", "help me name my product", "alternate names for my product", "rename my product", "name suggestions", "second-guessing my name", "should I change my name", or any request to evaluate or generate a product name against the documented strategy. Reads PRODUCT.md and Product Identity, scores the current name across eight criteria, recommends a naming category based on the archetype and contrarian belief, generates 5–8 alternate name options in that direction, and writes the output to `design/Product Name Review.md`. Optional skill — use whenever the user is considering whether to keep or change their working name.
---

# Design: Product Name Review

This skill guides a founder through a **rigorous critique and exploration** of their product name. The output is `design/Product Name Review.md` containing a score of the current name against eight documented criteria, a recommended naming category based on the brand's archetype and contrarian belief, and 5–8 alternate name options in the recommended direction — all anchored in `docs/PRODUCT.md` and `design/1. Product Identity.md`.

The voice is a senior brand strategist and naming consultant with experience reviewing thousands of product names — and specifically with the 2026 AI-product naming patterns (Cursor, Lovable, Granola, Linear, Anthropic, Notion, Vercel) that have separated memorable category-defining names from forgettable category-default ones. The consultant's job is not to validate the founder's emotional attachment to their working name; it is to pressure-test the name against the same criteria every successful product name has had to survive, and propose alternates that fit the documented strategy better if the current name fails.

A name that doesn't fit the brand archetype, can't be spelled after one hearing, conflicts with an existing trademark, or sits indistinguishable from 50 category competitors is a tax the founder will pay every day for the life of the product. This skill's job is to surface that tax now — before the logo is designed, the domain is bought, and the merch is printed.

> **Session length:** Designed to be completable in 20–40 minutes of conversation. The skill reads two upstream documents, scores the current name, generates alternates, and writes the output. No external research is required during the session, though the user should verify trademark and domain availability for any name they're seriously considering — flagged in the deliverable.

## Inputs

Locate the following (search the workspace if the paths below don't exist):

1. **PRODUCT.md** — usually `docs/PRODUCT.md`. **Required.** Provides the customer, problem, mechanism, and category. The category drives competitive comparisons (does the name sit indistinguishably next to 5 competitors, or does it stand out?). If PRODUCT.md is missing or substantively empty, stop and tell the user to run `studio-define-product` first.

2. **Product Identity** — usually `design/1. Product Identity.md`. **Required.** The archetype constrains the naming category (a Sage rarely names like a Jester; a Magician rarely names like an Everyman). The tone of voice constrains the *feel* of the name. The contrarian belief constrains the *positioning* of the name. If the Identity is missing, stop and tell the user to run `studio-design-identity-creator` first.

3. **The user's current name idea(s).** **Required.** The user provides this in conversation — either one working name they want critiqued, or a shortlist of 2–4 they're choosing between. If the user is starting from zero (no name yet), proceed to step 5 (generate options) and skip the critique step.

## The strategist's voice

Adopt the voice of a senior brand strategist and naming consultant with deep experience pressure-testing product names:

- **Honest.** Real naming consultants tell the truth about weak names — even when the founder has tattooed it on their arm. "This name has three syllables, one silent letter, no archetype fit, and is already trademarked by a 2014 consumer good. It's not the one. Here's why and what to try instead."
- **Pattern-matching.** Reference real, current product names and what worked. "Your draft reads like a Salesforce-era B2B name — Salesforce, Workforce, Marketcloud. The 2026 winners in your category go shorter and more evocative: Cursor, Linear, Granola, Vercel. Here's the shape."
- **Specific.** Never "this name could be more memorable." Always "this name has four syllables and an irregular spelling — the average user will mishear it on a podcast and Google something else. Here's a 2-syllable alternate that doesn't."
- **Archetype-strict.** A Sage doesn't name like an Outlaw. The Product Identity archetype is the single most important constraint on the naming direction.
- **Honest about trademarks and domains.** Flag the concerns; tell the user to verify with the actual sources (USPTO, registrars). Don't pretend to be a trademark attorney.

## Workflow

### 1. Read PRODUCT.md and Product Identity

Read both files in full before asking anything. Extract:

- From PRODUCT.md: product category, customer, mechanism, primary competitive references.
- From Product Identity: archetype, tone-of-voice attributes ("X but not Y" pairs), no-go words, example sentence, contrarian belief.

Form a working hypothesis in 2 sentences: which **naming category** best fits this brand's archetype and contrarian belief (Descriptive, Evocative, Invented, Real-Word, Compound, Misspelled, Founder, Geographic, or Acronym), and **what the name should feel like** (short and sharp / warm and inviting / authoritative and rare / playful and irreverent / etc.).

### 2. Ask for the current name (or names)

State back to the user:

> *"I've read PRODUCT.md and Product Identity. Before I propose anything, what's your current name idea? If you have one, give me just the name and I'll critique it against the strategy. If you have two or three you're choosing between, share all of them. If you're starting from zero, say so and I'll go straight to generating options."*

If the user provides a name (or names), proceed to step 3. If the user has no name, skip to step 5.

### 3. Score the current name against eight criteria

For each name the user provided, score it against the eight criteria below. Each is a pass/fail or 1–5 score with a one-line justification. Total score / 40.

1. **Pronounceable on first read** (1–5). Can a stranger seeing the name written down for the first time say it correctly out loud? Names with silent letters, unusual spellings, or non-English vowel combinations score low.

2. **Spellable on first hearing** (1–5). Can a stranger hearing the name on a podcast type it correctly into a browser? Misspelled "cool" names (Lyft, Tumblr) only work when the brand has marketing scale to teach the spelling.

3. **Syllable count** (1–5). 1–2 syllables = 5. 3 syllables = 3. 4+ syllables = 1. Short names compound; long names burn marketing dollars on pronunciation alone.

4. **Archetype fit** (1–5). Does the name's *feel* match the brand archetype from Product Identity? A Sage doesn't name like an Outlaw. A Caregiver doesn't name like a Hero. A Magician's name has a different register than an Everyman's.

5. **Category distinctiveness** (1–5). Does the name sit indistinguishably next to 5 category competitors? Reference real competitors from PRODUCT.md and judge whether the name disappears or stands out.

6. **Trademark cleanliness (preliminary)** (1–5). Does a quick mental check surface obvious trademark conflicts? (e.g., is the name a famous existing brand?) Flag for USPTO verification but call out the obvious risks.

7. **Domain plausibility** (1–5). Is the `.com` realistically obtainable, or is the name a common English word that will cost $50K+? Flag for registrar check but estimate the difficulty.

8. **Cross-cultural safety** (1–5). Does the name have unintentional meanings in major markets (Spanish, Mandarin, French, German, Japanese, Arabic)? Flag known issues (the canonical "Nova" = "doesn't go" in Spanish for the Chevy Nova story).

Present the score in conversation. Show each criterion, the 1–5 score, the one-line justification. Total at the bottom. Honest read.

If the score is **≥32/40** (strong), recommend keeping the name and skip to step 7 (write the file).
If the score is **24–31/40** (mixed), discuss with the user whether to keep and refine, or explore alternates. Their call.
If the score is **<24/40** (weak), recommend exploring alternates and proceed to step 4.

### 4. Diagnose the failure mode

For names that scored weakly, name the specific failure pattern. Pattern-match against documented naming pitfalls:

- **The Salesforce-era B2B name.** Compound buzzwords (DataSyncCloud, MarketForce, OpsHub). Reads as 2010 enterprise; 2026 AI products go short and evocative.
- **The "AI" suffix.** Tacking "AI" onto a noun (BlogAI, MealAI, NotesAI). Indistinguishable from 10,000 other AI products and will date the moment AI becomes assumed.
- **The misspelled cool name.** Lyft / Tumblr / Flickr trick without the marketing budget to teach the spelling. Works for one brand per decade.
- **The portmanteau.** Two words mashed (Pinterest, Microsoft). Excellent when the construction is invisible (Pinterest); cringe when the seams show (FlexiPay, SmartShop).
- **The acronym soup.** SDS, RTE, KPM. Forgettable without marketing scale to teach the meaning.
- **The Latin/Greek root.** Lumina, Veritas, Apex. Common in 2010s tech naming; reads as generic premium-brand. Now saturated.
- **The descriptive trap.** "The Calorie App." Cannot be trademarked. Cannot grow into adjacent categories. Owned by every Google search.
- **The cultural collision.** A name that means something fine in English and something embarrassing in Spanish / Mandarin / German / Arabic.

Name the pattern explicitly. *"Your draft reads as the 'AI suffix' pattern — and that's the lowest-distinctiveness pattern in the 2026 dataset. Let's try a different shape."*

### 5. Recommend a naming category and generate 5–8 alternates

Based on the Product Identity's archetype, contrarian belief, and tone of voice, recommend **one naming category** that best fits — and then generate 5–8 alternate names *within that category.*

The nine canonical naming categories:

- **Descriptive.** The product's function (Microsoft Word, General Motors, The Weather Channel). Clear; impossible to trademark; rarely fits modern AI products.
- **Evocative / Suggestive.** Suggests a benefit or feeling (Nest, Kindle, Slack, Lovable). The most balanced category for new businesses — emotive, memorable, often trademarkable. The default 2026 AI choice.
- **Invented / Neologism.** Made-up words (Kodak, Sony, Xerox, Vercel). Highest trademark ownability; blank-slate meaning; requires marketing to imprint.
- **Real Word, Unexpected Context.** Existing words used in unrelated contexts (Apple for computers, Amazon for retail, Granola for meeting notes, Notion for productivity). Excellent recall; depends on the unexpectedness.
- **Compound / Portmanteau.** Two words combined (Facebook, YouTube, Snapchat). Works when seams are invisible; cringe when constructed.
- **Misspelled.** Common word with intentional misspelling (Google, Lyft, Tumblr, Flickr). Risky without marketing scale; needs to be spelled obviously once heard.
- **Founder / Person.** Founder's name or namesake (Disney, Mercedes, Ford). Strong when the founder is the brand; otherwise dated.
- **Geographic.** Place-based (Patagonia, Cisco from San Francisco, Adobe Creek). Anchors brand in a location; can limit category later.
- **Acronym.** Initials (IBM, BMW, HBO). Forgettable for new brands; works only after recognition.

For each alternate name, provide:
- **The name** (with primary spelling)
- **Category** (which of the nine above)
- **One-line rationale** — why this name fits the Identity
- **Quick risk flag** — obvious trademark concerns, common-word .com difficulty, or cultural notes

Aim for 5–8 alternates total, all within the recommended category. Resist the temptation to generate one of each type — focusing the alternates in one direction lets the user pick on merit within a coherent shape, rather than choosing between apples and oranges.

### 6. Run the alternates through the same 8 criteria

For each of the 5–8 alternate names, run a quick (compressed) pass through the 8 criteria — pronounceable, spellable, syllable count, archetype fit, category distinctiveness, trademark cleanliness, domain plausibility, cross-cultural safety. Give a total /40 score for each. The user should be able to see at a glance which alternates are the strongest and why.

Rank the alternates from highest score to lowest, with a recommended top pick.

### 7. Verification reminder

Before writing the file, surface explicitly to the user:

> *"For any name you're seriously considering, the following must be verified by you directly — I can flag concerns, but the actual checks have to happen on the official sources:*
> *— USPTO trademark search (uspto.gov)*
> *— `.com` and other relevant TLD availability (any major registrar)*
> *— Social media handle availability (X, Instagram, TikTok, LinkedIn)*
> *— Local trademark databases in your major markets (UKIPO, EUIPO, etc.)*
> *— Negative meanings in your top 5 target markets (a 10-minute search per market)"*

This protects the user and is honest about what the skill can and cannot verify.

### 8. Write to `design/Product Name Review.md`

Once the critique and alternates are agreed, write the assembled document to `design/Product Name Review.md`. If the file already exists, read it first, surface the diff in conversation, overwrite on the user's approval.

Structure:

```
# Product Name Review

*Drafted: [Month Year]. Generated from PRODUCT.md and Product Identity.*

## Summary

[Two sentences: which name was reviewed, whether it scored strong / mixed / weak, the recommended action (keep / refine / explore alternates), and the recommended naming category if alternates were generated.]

## The brand strategy context

- **Archetype:** [from Product Identity]
- **Tone of voice:** [3-5 attributes from Product Identity]
- **Contrarian belief:** [from Product Identity, one sentence]
- **Category:** [from PRODUCT.md]
- **Primary competitors named:** [from PRODUCT.md]

---

## Current name reviewed

### "[Name]"

| Criterion | Score | Note |
| --- | --- | --- |
| Pronounceable on first read | X/5 | [one line] |
| Spellable on first hearing | X/5 | [one line] |
| Syllable count | X/5 | [N syllables; one line] |
| Archetype fit | X/5 | [one line] |
| Category distinctiveness | X/5 | [one line] |
| Trademark cleanliness (preliminary) | X/5 | [one line, flag risks] |
| Domain plausibility | X/5 | [one line] |
| Cross-cultural safety | X/5 | [one line, flag languages checked] |
| **Total** | **XX/40** | [strong / mixed / weak] |

**Diagnosis:** [if mixed or weak, name the failure pattern in one sentence.]

**Recommended action:** [keep / refine / explore alternates]

---

## Alternates considered

*Recommended category: [the one category, with a one-sentence rationale tied to the archetype + contrarian belief].*

### Top pick: "[Name]" ([Category]) — XX/40

[One paragraph: why this is the top pick, criterion scores, any flags.]

### Alternates (ranked)

1. **"[Name]"** ([Category]) — XX/40 — [one line]
2. **"[Name]"** ([Category]) — XX/40 — [one line]
3. **"[Name]"** ([Category]) — XX/40 — [one line]
4. **"[Name]"** ([Category]) — XX/40 — [one line]
[continued through 5-8 total]

---

## Verification checklist (do these yourself)

Before committing to any of the names above:

- [ ] USPTO trademark search (uspto.gov) — exact name + closest variants
- [ ] `.com` availability check on a major registrar
- [ ] Social media handle availability — X, Instagram, TikTok, LinkedIn at minimum
- [ ] Local trademark databases in your top 3 markets (UKIPO, EUIPO, JPO, etc.)
- [ ] 10-minute "negative meaning" search in your top 5 markets — Google "[name] meaning in [language]"
- [ ] Read the name aloud to 3 strangers — do they pronounce it correctly? Spell it correctly when they hear it?

## Sources

- Product context: `docs/PRODUCT.md`
- Brand strategy: `design/1. Product Identity.md`
- Naming framework references: 99designs naming categories; metabrand.digital brand naming guide; Inkbot Design naming strategy; modern AI-era naming patterns (Cursor, Lovable, Granola, Linear, Anthropic, Notion, Vercel).
```

Keep prose tight — every score is a table row, every alternate is one line. The whole doc reads in under 4 minutes.

### 9. Verify before delivering

Re-read the written file and check:

- The current name is scored across all 8 criteria with one-line justifications.
- The total /40 score matches the criterion scores (sanity check).
- If the score was weak, the failure pattern is explicitly named.
- The recommended naming category ties back to the archetype and contrarian belief.
- 5–8 alternates are provided, all within the recommended category.
- Each alternate has a score and a one-line rationale.
- The verification checklist is included — the skill is honest about what it cannot verify.

Deliver via a `computer://` link and a short summary: the current name's total score, the recommendation (keep / refine / explore), and the top-pick alternate if relevant. One line per item; this is a recap, not a re-pitch.

## Calibration: 2026 AI-product naming patterns to draw on

When generating alternates, draw on these well-known modern AI-product naming patterns:

- **Cursor.** Evocative — real word used unexpectedly (a cursor is the editor's most fundamental object). Two syllables. Distinctive in dev tools category. Plain spelling. Strong.
- **Lovable.** Evocative — adjective elevated to brand name. Three syllables. Stands out against "Builder," "Maker," "Forge" category defaults. Strong emotional register.
- **Granola.** Real word, unexpected context — a breakfast cereal name applied to AI meeting notes. Three syllables. Memorable and warm; doesn't sound like a meeting tool, which is the point.
- **Linear.** Descriptive of intent (clean, linear flow). Three syllables. Excellent archetype fit for the Sage / engineering-precision shape.
- **Anthropic.** Lexical / Greek root — adjective elevated to noun. Four syllables (sits at the upper acceptable edge). Pairs heritage feel with a meaningful root (anthropos = human-centered).
- **Notion.** Real word, unexpected context — abstract noun applied to a productivity surface. Two syllables. Excellent recall.
- **Vercel.** Invented / neologism. Two syllables. Clean spelling that's pronounceable on first read. Unencumbered trademark.
- **Stripe.** Real word, unexpected context — a simple noun applied to payments. One syllable. Maximum brevity.
- **Claude.** Founder-derived / proper noun. One syllable. Intimate and personal; pairs with the brand's Sage archetype.
- **Perplexity.** Descriptive of user experience (the state the product addresses). Four syllables (upper edge). Memorable because the noun matches the use case.

The pattern across all of these: 1–3 syllables (4 is the absolute ceiling), real words used unexpectedly OR invented words that are obviously pronounceable, no "AI" suffix, no buzzword compounds, no Latinate corporate-premium clichés.

## Pacing and approval

- **Read both upstream inputs before scoring.** A naming critique without the Identity is just opinion.
- **Score honestly, not generously.** The founder asked for a real critique. A 32/40 dressed up as a 38/40 fails the user.
- **One naming category for alternates.** Generating one of each type is paralysis disguised as exploration.
- **Cite the archetype-fit reasoning explicitly.** Every alternate should tie back to a specific tone-of-voice attribute or the contrarian belief.
- **Be honest about what you can and cannot verify.** Trademark and domain checks have to happen on the official sources. Flag the concerns; don't pretend to be a trademark attorney.
- **Write the final document concisely.** Bullets, tables, one-line rationales. The doc reads in under 4 minutes.

## What "done" looks like

A `design/Product Name Review.md` where:

- The brand strategy context (archetype, tone, contrarian belief, category, competitors) is summarized at the top.
- The current name (or each name on the user's shortlist) is scored across all 8 criteria with one-line justifications and a total /40.
- The failure pattern is explicitly named if the score was weak.
- A single recommended naming category is named, with a one-sentence rationale tied to the brand strategy.
- 5–8 alternate names are provided in that category, each with a score and one-line rationale.
- A top pick is named with reasoning.
- A verification checklist (USPTO, .com, social handles, local trademarks, cross-cultural meanings, real-stranger pronunciation tests) is included as user homework.
- The file is dated and sourced.
- The whole document reads in under 4 minutes.

Recommended next step after a successful session: pick a top 2 from the review document, run the verification checklist on each, and (if the current name passes the review) confirm it. If a new name wins the review, return to `design/1. Product Identity.md` and update any references — the Mission, Visual World references, and Visual Inspiration appendix may have been written around the old name. Then update the working name in any in-progress design / marketing surfaces.
