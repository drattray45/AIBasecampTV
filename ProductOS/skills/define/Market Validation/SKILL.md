---
name: studio-define-market-validation
description: Use when the user has filled out their Product Offer and wants to pressure-test the idea before writing code. Triggers on phrases like "market validation", "validate my idea", "validation plan", "validation test", "pre-launch validation", "how do I validate this", "what's my pass threshold", "what's my pivot criteria", "before I build this", "is there proven demand", or any request to fill out a Market Validation document covering Proven Demand, Existing Distribution, Validation Test, Pass Threshold, and Pivot Criteria. Reads the Product Offer, researches competitor revenue and named distribution channels, recommends a specific validation tactic from the 15-tactic Idea Validation Cheat Sheet, forces concrete pass thresholds and pivot criteria, and produces a filled-in Market Validation document. Especially appropriate inside a ProductOS-style "Define" workflow where a Product Offer markdown file already exists and a Market Validation template is waiting to be filled in.
---

# Define: Market Validation

This skill turns a filled-in **Product Offer** into a concrete **Market Validation plan** — a five-section pre-launch contract with reality that names where money is already flowing, where the first ten users will come from, which cheap test will manufacture a real signal from a stranger, what concrete number means "keep going," and what concrete number within two to four weeks means "pivot."

The goal is not to fill in five sections. The goal is to *prevent the most expensive failure mode in software*: spending six months building a product that nobody pays for because the founder never put a buy button in front of a stranger. Every section in this framework exists to convert vague optimism ("I think people will love this") into a falsifiable bet with a deadline.

A weak Market Validation document looks fine on paper and runs for a year before the bank account tells the truth. This skill's job is to make the document *uncomfortable* — to force numbers, channels, and dates concrete enough that the user genuinely knows, four weeks from now, whether to keep going or to pivot.

> **Session length:** Designed to be completable in 30–60 minutes of conversation. **This skill produces the validation *plan* in-session — Claude does all the competitor revenue lookups, channel research, and tactic selection.** Executing the plan happens *after* the session and is bounded to a single ~7-day push (one Reddit post, one TikTok demo, a buy button on a landing page) — not weeks of research. The user leaves the session with a specific test, a specific channel, a specific number to hit, and a specific pivot trigger; the test itself is light enough to run in a normal week.

## Inputs

Before starting, locate the following in the user's project (typically a `define/` folder, but search the workspace if not found):

1. **The Product Offer** — usually `1. Product Offer.md`. The **required** input. If sections are blank or vague, stop and ask the user to tighten the offer before proceeding; a validation plan for a fuzzy offer validates nothing — even a real card swipe wouldn't tell you which version of the product the buyer was responding to.
2. **The Market Validation template** — usually `4. Market Validation.md`. Defines the exact output structure to follow, *and is also the file the skill rewrites in place* at the end (see step 5).
3. **The Idea Validation Cheat Sheet** — usually `BONUS - Idea Validation Cheat Sheet.md`. The required playbook. Read this in full at the start. It contains: the meta-rule (validation = stranger card swipe / calendar booking / closed-community referral, nothing else), 8 principles, a decision tree mapping idea shape to tactic, 15 named tactics organized by effort tier, and a signal-strength table. Every recommendation this skill makes for the Validation Test section should be a named tactic from this document, justified through the decision tree.
4. **The Pivot Framework** — usually `BONUS - Pivot Framework.md`. The required playbook for section 5. Read this in full at the start. The Pivot Criteria section is not vibes — it is a specific threshold that says "if X happens by date Y, the right move is a product / persona / price pivot, and the next test is Z." That structure comes from this document.
5. **The Customer Persona** — usually `2. Customer Persona.md`, if filled in. Optional but highly useful. The persona's *Watering Holes* section feeds directly into Existing Distribution; the *Willingness to Pay* section helps reality-check the Validation Test's price point. If the persona isn't filled in, note that Existing Distribution will need extra research and the pass-threshold prices will need extra validation.
6. **The Business Strategy** — usually `3. Business Strategy.md`, if filled in. Optional. The strategy's Revenue Model and Pricing Ladder constrain what a *real* validation looks like — if the strategy says "subscription at $49/mo," the validation test had better involve actual $49 charges, not waitlist signups.

If any of the required files are missing, ask the user where they live before continuing.

## Workflow

### 1. Absorb the offer and form a working hypothesis

Read the Product Offer end-to-end (and the Persona / Strategy if available). Extract:

- **Idea shape** — is this consumer mobile, prosumer SaaS, B2B SaaS, indie Mac app, WordPress LTD, productized service, marketplace, dev tool, agent-native app? The shape determines which validation tactics fit.
- **Category** — what's the named space? "Habit-tracking apps," "WordPress booking plugins," "AI sales tools," "music sample marketplaces." This is what to search for proven demand against.
- **Distribution surface** — is the audience reachable via Reddit, TikTok, Discord, Facebook groups, an SEO keyword cluster, a closed professional network, or a paid channel? Each opens a different tactic.
- **Price point** — from the Strategy if available, otherwise estimated from the offer. Validation at $9/mo is a different test than validation at $4,995/mo.
- **Builder context** — does the user already have an audience (even 500 followers), or are they cold? Several tactics in the cheat sheet require an audience; others are built for cold founders.

From this, form a **working validation hypothesis** in one paragraph: "Idea shape is X, category is Y, plausible distribution surface is Z, candidate validation tactic from the cheat sheet is #N, predicted pass threshold is P, predicted pivot signal is Q." State this back to the user and ask them to confirm or correct before doing research. A wrong starting hypothesis sends the user down a tactic that doesn't fit their idea shape and wastes the test.

### 2. Research proven demand and named distribution

Spend real effort here. The Market Validation's two hardest sections (Proven Demand and Existing Distribution) require *evidence from the world*, not founder gut. Use web search and any connected research tools to investigate:

- **Proven demand evidence** — find 2–3 named competitors in the user's category with disclosed or estimable revenue figures. Sources: Indie Hackers public revenue pages, Starter Story interviews, founder Twitter/X revenue screenshots, Product Hunt comments, App Store rankings (with Sensor Tower or similar revenue estimates if accessible). Goal: confirm or refute the framework's bar of *"2+ competitors clearing $50K+ MRR on the same core problem."* If you can't find this evidence, that *is* the finding — the market may not be proven.
- **Named distribution channels** — find the actual subreddits, Discord servers, Facebook groups, TikTok hashtags, or SEO keywords where this idea's first 10 users live. Pull names, not categories. "r/ChatGPTCoding" beats "AI subreddits." If the Persona's Watering Holes section is filled in, use those as starting points and verify they're still active.
- **Existing UGC / virality evidence** — for consumer/prosumer ideas, search TikTok and YouTube for related hashtags. If users are already creating viral content about the problem (millions of views), demand is independently proven — and the channel is named for free.
- **Competitor pricing and packaging** — to inform what the Validation Test should actually charge. If 3 competitors all charge $19/mo, the validation test for $4,995/mo at a similar product shape is questionable.

Collect 5–8 concrete data points before walking the user through the framework. Note explicitly which points came from research and which still need user validation.

### 3. Walk the user through the validation plan, section by section

Go through the template in order: **1 Proven Demand → 2 Existing Distribution → 3 Validation Test → 4 Pass Threshold → 5 Pivot Criteria.** The order matters: each section constrains the next. There's no point picking a Validation Test before you've named the channel, and there's no point setting a Pass Threshold before you've picked a test.

For each section:

1. **Propose a hypothesis** anchored in the research. Be specific — not "we'll do a Reddit post" but "Tactic #3 (Show-Don't-Tell Reddit Demo Post) in r/Notion and r/Productivity, with the deep-linked feature gated behind a real $19/month Stripe checkout."
2. **Ask 1–3 targeted questions** to confirm, refine, or reject. Use the **decision tree from the cheat sheet** explicitly: "Are you already using a clunky workaround for this problem daily? Can you name 2+ apps in this category each doing $50K+ MRR? Is your audience a tightly-defined community under 100K people?" Each "yes" routes the recommendation to a specific tactic — name the tactic by number.
3. **Critique weak answers.** Each section in the template has explicit "good vs bad" criteria — quote them when the user's answer drifts. Also watch for the failure patterns listed below.
4. **Recommend a sharper version** drawing on the cheat sheet's named tactics and the pivot framework's three-variable structure. For Validation Test specifically, recommend a *named, numbered* tactic — not a generic plan.
5. **Do the best you can in the session.** Claude does the research (competitor revenue, channels, anchor prices) live during the conversation; the user's job is to react and confirm. If a specific point is genuinely unknowable in the session, accept Claude's research-backed best guess and tag it `[research-backed; tighten before launch]` — then continue. A research-backed plan with tagged items is a successful output; the conversation should not stall on data Claude is about to surface anyway.

### 4. Sections that deserve extra scrutiny

A handful of sections do disproportionate damage when they're weak:

- **Proven Demand (section 1).** The single most-skipped section, and the single most predictive. The cheat sheet's principle is blunt: *"No competitors = no market."* If the user can't name 2+ competitors clearing $50K+ MRR on the same core problem, the right move is almost always to find proven money first — not to congratulate themselves on being "first to market." Push hard. "First mover advantage" is one of the most expensive lies in software.
- **Existing Distribution (section 2).** If the user can't name a *specific* subreddit, Discord, Facebook group, TikTok hashtag, or SEO keyword where the first 10 users live, the idea will not validate regardless of how clever it is. "We'll run ads" / "we'll go viral" / "word of mouth" are not channels — they are wishes. Force a named channel; if the user truly doesn't have one, the validation plan is to *find* one (Tactic #2 Reddit Pain Mining Dig) before testing the product.
- **Validation Test (section 3).** The single most-faked section. "We'll launch a waitlist" or "we'll do a survey" are not validation tests — the cheat sheet's signal table puts both near the bottom (★ and ½). A real validation test manufactures a stranger card swipe, a calendar booking, or a closed-community referral. Recommend one of: Tactic #5 Buy Button Test, #7 Commitment-Metric Pre-Sale, #8 Lifetime Deal Cash Probe, #10 Niche Sub-Community Smoke Test, #12 Concierge MVP. The specific tactic depends on the decision tree — name the tactic and explain why it fits.
- **Pass Threshold (section 4).** Must be **number + deadline**. "1+ unsolicited card swipe in 14 days." "10+ calendar bookings in 21 days." "20+ paying users in 30 days." Push hard if the user proposes upvotes, signups, replies, or "engagement" — these are vanity metrics that look like validation and aren't. The cheat sheet's signal table is the calibration: if the threshold isn't in the ★★★★+ band, it doesn't count.
- **Pivot Criteria (section 5).** Must be **number + timeframe + which-pivot-next**, drawn from the Pivot Framework. Not "we'll see how it feels" but "zero card swipes after 3 demo posts in 14 days → run a persona pivot using Tactic #10 in r/Notion instead of r/Productivity." The pivot framework's three variables (product / persona / price) are the menu of *what* to change; the cheat sheet's tactics are the menu of *how* to re-test. Pair them.

### 5. Rewrite the Market Validation file in place

Output: **rewrite `4. Market Validation.md` in place** with the filled-in answers. Do not create a new file — the user wants the validation plan to be the canonical, living version, not a sibling draft.

Match the template's structure exactly: same section headers, same italic prompts, same `> Good: ... / Bad: ...` guidance lines. Replace each `**Your answer:**` block with the filled-in answer.

At the top of the rewritten file, add:

- A short **validation summary** — 2–3 sentences naming the candidate tactic, the named channel, the pass threshold, and the pivot trigger, so a co-founder can read it in 10 seconds. Example: *"Run Tactic #5 (Buy Button Test) at $19/month in r/Notion + r/Productivity for 14 days. Pass = 3+ unsolicited card swipes. Pivot trigger = zero swipes after 3 demo posts → persona pivot to r/ChatGPTCoding."*
- A **dated header** — e.g., "Drafted: May 2026"
- A short **evidence footer** — e.g., "Based on: 1 Product Offer, 1 Customer Persona, 4 competitor revenue lookups, 3 channel research passes (Reddit / TikTok / X). Recommended next step: launch the named test within 7 days; do not iterate on copy until the pass or pivot threshold is hit."

At the bottom of the rewritten file, add a **Sources** section listing the competitor revenue URLs, channel research, and any other research used — so the user can re-verify and re-research later.

Because this overwrites the template, **read the existing file first** to preserve any user notes or modifications they have already made, and surface any conflicts to the user before writing.

### 6. Verify before delivering

Re-read the rewritten validation plan against the framework's "good vs bad" criteria, the cheat sheet's signal table, and the failure patterns below. Specifically check:

- Does Proven Demand cite **named competitors with revenue numbers**, or is it hand-wave?
- Does Existing Distribution name a **specific channel** the user could post in tomorrow?
- Is the Validation Test a **named tactic** from the 15 in the cheat sheet, not a generic plan?
- Is the Pass Threshold a **★★★★+ signal** (card swipe, calendar booking, closed-community referral) — not a vanity metric?
- Is the Pivot Criteria a **specific number + timeframe + which-pivot-next**, pulling from the Pivot Framework's three-variable model?
- Could the user actually run this test within 7 days? If not, the test is too big — push for the cheapest credible version.

Deliver the rewritten file via a `computer://` link and a one-paragraph summary of what is solid and what still needs validation.

## Failure patterns to look for

Common ways a Market Validation plan underperforms. Name them when you see them — naming compounds learning, and the user will catch them earlier next time:

- **The First-Mover Mirage.** "No competitors yet" framed as opportunity. The cheat sheet is unambiguous: *"No competitors = no market."* It's almost always a sign nobody pays for this problem, and you'll spend your runway *educating users on the problem* instead of selling them the solution. Push the user to find the proven money first.
- **The Unnamed Channel.** Distribution is "ads," "viral," or "word of mouth." None of these are channels — they're hopes that something will happen *to* the user. A channel is a named place where the user can show up tomorrow morning and post.
- **The Waitlist Substitute.** Validation test is a waitlist, an email signup, or a "would you pay?" survey. None of these manufacture a stranger card swipe, a calendar booking, or a closed-community referral. They produce ★ or ½ signal at best.
- **The Friend Audience.** Validation only with the user's own followers, Slack, or Twitter circle. Friends, family, and existing audience encourage out of love, not market truth. Real validation must include strangers in the ICP who don't know the user's name.
- **The Vanity Pass Threshold.** "Pass = lots of signups" / "Pass = trending on Product Hunt" / "Pass = 1000 Twitter likes." These validate attention, not need. Force the threshold into the ★★★★+ band — card swipes, calendar bookings, closed-community referrals, repeated feature requests from 10+ unrelated users.
- **The Open-Ended Pivot.** Pivot criteria reads "we'll see how it feels" or "we'll iterate based on feedback." That's not a pivot plan — that's a hope. Real pivot criteria name a number, a timeframe, and which-pivot-next, drawn from the three-variable model.
- **The Over-Polished Pre-Launch.** Validation plan involves building a beautiful site, polishing the brand, designing the logo, before testing. The cheat sheet's principle is *"Ship ugly, ship cheap, escalate only on signal."* If the validation test requires more than a few days of work to run, it's too big.
- **The Multi-Variable Pivot.** Pivot criteria says "if X happens, we'll change the product *and* the price *and* the audience." The pivot framework is blunt: change one variable per cycle, period. Otherwise you can't tell what fixed the problem (or what broke it).
- **The "We'll Validate While Building" Trap.** No validation test at all — the plan is to launch and see what happens. Six months in, the only finding is that the founder built something. Force the test *before* the build, not after.

When you spot one of these, name it. Naming is half the cure, and the user will catch them earlier next time.

## Tone and pacing

- **Conversational, not robotic.** The user is making real strategic decisions about how to spend the next 30 days; treat them like a peer, not a form to fill in.
- **Push back when answers are weak.** The user invoked this skill to be rigorous; collapsing into agreement is the worst possible outcome. Quote the framework's "bad" criteria, name the failure pattern, recommend a sharper version every time the answer drifts.
- **One section at a time, in order.** The order matters and each section constrains the next. Don't let the user jump to Pass Threshold before they've picked a test, or to Validation Test before they've named a channel.
- **Confirm the working hypothesis before researching deeply.** Research takes time and tokens. A 30-second hypothesis check saves a 10-minute wrong-direction competitor-revenue lookup.
- **Force the number.** For Pass Threshold and Pivot Criteria especially, do not accept a verbal answer. Make the user commit to a number and a date. A validation plan without numbers and dates is a wish.
- **Use the decision tree explicitly.** When recommending a Validation Test, walk through the cheat sheet's decision tree out loud: *"You can name 2+ apps in this category clearing $50K+/mo → routes to Tier 2 tactics. Audience is a community under 100K → Tactic #10. Visually demonstrable in under a minute → also Tactic #3 in parallel."* This teaches the user the decision tree, not just the answer.

## What "done" looks like

A rewritten Market Validation file where:

- **Proven Demand** cites 2+ named competitors with disclosed or estimated revenue figures, with sources.
- **Existing Distribution** names a specific subreddit / Discord / Facebook group / TikTok hashtag / SEO keyword the user can post in tomorrow.
- **Validation Test** is one of the 15 named tactics from the cheat sheet, justified through the decision tree, and runnable within 7 days.
- **Pass Threshold** is a number + a deadline, sitting in the ★★★★+ band of the cheat sheet's signal table.
- **Pivot Criteria** is a number + a timeframe + which-pivot-next (product / persona / price), drawn from the Pivot Framework.
- The validation summary at the top reads in 10 seconds and tells a single coherent story.
- The file is dated and sourced.

Anything less is a wish. Say so explicitly, surface the remaining gaps, and recommend the next step — usually: pick the cheapest credible test from the cheat sheet, run it this week, do not iterate on the product until the test produces signal.
