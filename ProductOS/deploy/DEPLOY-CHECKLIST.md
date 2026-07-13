# Deploy — Checklist

Work top to bottom. Requires `docs/PRODUCT.md` and `docs/DESIGN.md` to exist (run the Define and Design phases first). Steps 1–3 take you from spec to working MVP; steps 4–6 are the ongoing build rhythm; step 7 puts the product in front of customers.

---

## Step 1 — PRD & Roadmap

- **What to do:** Run `studio-deploy-prd-roadmap`.
- **What it does:** Scopes your MVP through a structured interview (core loop, feature cuts, tech stack), then produces `docs/PRD.md` — the technical spec a coding agent builds from — and `docs/ROADMAP.md` — the phased build plan with task checkboxes. Draws on `deploy/guides/PRD-GENERATION.md`, `ROADMAP-GENERATION.md`, and `TECH-STACK-OPTIONS.md`.

## Step 2 — Set up your codebase

- **What to do:** If you're building from scratch, create a new folder and initialize it as a git repository. Then copy into it:
  - `deploy/CLAUDE.md` and `deploy/AGENTS.md` → the repo root (behavioral guidelines your coding agent reads automatically)
  - `docs/PRODUCT.md`, `docs/DESIGN.md`, `docs/PRD.md`, `docs/ROADMAP.md` → a `docs/` folder in the repo
- **Also recommended:** Push the repo to GitHub so your work is backed up and versioned. The agent builds straight through all phases in one go — there's no need to gate each phase behind a pull request. For code review, use your coding agent's built-in review (`/review` in Claude Code, or the built-in review in Cursor or Codex) rather than a separate service.

## Step 3 — Build the MVP

Pick the path that matches your situation:

### 3a — Building from scratch

- **What to do:** Open your coding agent in the new repo and run `studio-deploy-mvp-build`.
- **What it does:** Works through every roadmap task in order — implementing, testing, and verifying each before moving on — until all tasks are checked off and the magic moment works end to end.

### 3b — Refactoring an existing codebase

- **What to do:** First protect your working code — work in a git worktree or duplicate the codebase folder before refactoring, so you can always get back to a working version. Then run `studio-deploy-refactor-plan`, review each difference it finds with you, and once `docs/REFACTOR.md` exists, run `studio-deploy-refactor-build`.
- **What it does:** The plan skill audits your code against the PRD and turns your keep/remove decisions into `docs/REFACTOR.md`; the build skill executes it task by task until the codebase matches the PRD.

## Step 4 — Build new features with the build loop

- **What to do:** For every feature you add after the MVP, run the build-loop skill matching your tool: `cursor-build-loop`, `claude-code-build-loop`, or `codex-build-loop`.
- **What it does:** Forces each feature through build → code review (`/review`) → end-to-end testing → fixes before it counts as done — so quality doesn't drift as the app grows.

## Step 5 — Design changes

- **What to do:** Run `studio-build-design-better` whenever you're generating or changing UI, and `studio-build-design-review` before committing design work.
- **What it does:** Keeps every screen aligned with `docs/DESIGN.md` tokens and catches visual drift before it ships.

## Step 6 — Conversion review

- **What to do:** Run `studio-build-cro-audit` once the product is usable end to end (and again once it has real traffic).
- **What it does:** Reviews your app against conversion best practices — onboarding friction, activation drop-off, pricing page, CTAs — and produces prioritized improvements.

## Step 7 — Deploy to customers

- **What to do:** Run `studio-deploy-checklist` from your app's repo when you're ready to go live.
- **What it does:** Audits the codebase and produces `docs/DEPLOY.md` — a plain-English, step-by-step launch guide where every step is marked 🧑 you / 🤖 agent / 🤝 together. Work through it top to bottom; you're live when the final smoke test passes as a real customer.

---

## Next phase

Once customers can reach the product, move to the Distribute phase.
