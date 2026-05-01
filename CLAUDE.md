# Project context for AI assistants

This file gets loaded by Claude Code (and similar tools) so any new session starts with full context. Don't delete or rename.

## TL;DR for routine tasks

When Marina says **"push it"** or **"send it live"**, paste this:

```
cd ~/Desktop/marina-costa-site
git add -A
git commit -m "<short message describing the change>"
git push
```

That's it. Cloudflare Workers auto-deploys from `main` in ~30–60 seconds. No build commands needed locally.

## Project at a glance

| Thing | Value |
|---|---|
| **Project root** | `/Users/marina/Desktop/marina-costa-site/` |
| **Stack** | Astro 4 (static prerender) + `@astrojs/cloudflare` adapter |
| **Repo** | [github.com/marinacostacomms/my-website](https://github.com/marinacostacomms/my-website) |
| **Hosting** | Cloudflare Workers (auto-deploys from GitHub `main`) |
| **Live URL** | `*.workers.dev` (custom domain TBD) |
| **Form handler** | Formspree (`https://formspree.io/f/maqvyjjq` → marina@costacommunication.ca) |
| **Dev command** | `npm run dev` (port 4321) |
| **Build command** | `npm run build` (output to `dist/`) |

## Where things live

```
src/
├── content/copy.ts      ← all editable text on the page (most edits go here)
├── data/roles.ts        ← Builder/Leader/Specialist data
├── pages/index.astro    ← page composition + interactive script (only file)
├── components/Icons.astro
├── layouts/Base.astro   ← <head>, favicons, page shell
└── styles/global.css    ← V6 Soft Brutal design system
public/assets/           ← logos, photo, future PDFs
SOP.md                   ← non-technical operations guide for Marina or contractors
DEPLOY.md                ← first-time setup guide
LAUNCH.md                ← pre-launch checklist + Formspree setup
```

## Brand tokens (in `global.css`)

```
--cream: #F5F3F0          page background
--firefly: #0C2432        primary text + all 2px borders + footer bg
--very-peri: #6868AC      primary buttons, role-card header bands, accents
--atomic-tangerine: #FFB27D   hero marker highlight, active states, footer ribbon
```

These are the only brand colors. **Do not introduce new ones.** The mac-cheese yellow that was originally in the design handoff has been removed at Marina's request.

## Design treatment notes

- **2px firefly borders** on every card / button / input / pill (no 1px borders anywhere).
- **0 border-radius** everywhere — sharp corners are part of the brand.
- **Soft glow shadows** with `translateY(-2px)` lift on hover (was hard offset shadows; Marina wanted them less '80s).
- **Hero `<em>clear</em>` highlight** is a wavy SVG data-URI background-image. Don't replace with a flat rectangle — it's the most distinctive design element.
- **Headshot** uses `background-size: cover` with `background-position: center top` to keep her face visible.

## Common gotchas (things that have actually broken in the past)

1. **Apostrophes inside single-quoted strings break the build.** `'where you're at'` is a syntax error. Either escape (`'you\'re'`) or use double quotes (`"you're at"`). This has caused failed Cloudflare deploys.
2. **Images go in `public/assets/`, never `dist/assets/`.** `dist/` is the build output and gets wiped every build.
3. **Two elements with `id="picker"`** caused the picker JS to wipe the section heading. The inner box now uses `id="picker-host"` — keep them distinct.
4. **`hidden` attribute is overridden by `display: grid/flex`** unless `[hidden] { display: none !important; }` exists (it does, near the top of `global.css`). Don't remove that line.
5. **Browsers cache aggressively.** After every deploy, hard-refresh (Cmd+Shift+R). If still stale, give CDN 60 more seconds.
6. **Marina runs `git` from her home directory by accident.** Always remind her to `cd ~/Desktop/marina-costa-site` first when giving terminal commands.

## Workflow patterns

- **For copy edits**: she usually edits via GitHub web UI (no terminal needed). For local edits, the dev server stays at port 4321.
- **For image swaps**: replace the file in `public/assets/`, keep the same filename to avoid touching CSS. If filename changes, update the `background-image` URL in `global.css` (only for headshot; logos don't change).
- **For verification**: dev preview is at `http://localhost:4321`. Production is the `*.workers.dev` URL.
- **For rolling back**: GitHub → Commits → "Revert" on a bad commit creates an undoing commit. Never tell her to `git reset --hard` — destroys work.

## Marina's working style (calibration notes)

- Non-technical. Don't explain Astro/Vite/build internals unless asked.
- Wants the shortest path to "site looks right." Verify with `preview_*` tools, share the result, give the push command.
- Prefers `cd ~/Desktop/marina-costa-site && git add -A && git commit -m "..." && git push` as a copy-paste block.
- Send screenshots back to her when verifying visual changes — the `preview_screenshot` tool sometimes captures only the top of the page; use `preview_eval` to confirm DOM/CSS state when screenshots are limited.
- Reads commit messages — keep them descriptive but short.
