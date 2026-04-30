# Website SOP — Marina Costa Communication

Standard operating procedure for updating [marina-costa-site](https://github.com/marinacostacomms/my-website). Hand this document to anyone helping you. They don't need to know Astro, JavaScript, or CSS — they just need to follow these steps.

---

## Quick reference

| What you want to do | Where you do it | How long |
|---|---|---|
| Change words on the page | GitHub web UI → `src/content/copy.ts` | 2 min |
| Update Builder/Leader/Specialist details | GitHub web UI → `src/data/roles.ts` | 3 min |
| Add or replace an image / PDF | GitHub web UI → `public/assets/` | 2 min |
| Replace Marina's headshot | GitHub web UI → upload + edit one path | 3 min |
| Update Formspree form endpoint | GitHub web UI → `src/content/copy.ts` | 1 min |
| Check what landed where | Cloudflare dashboard → Deployments | 30 sec |
| Roll back a bad change | GitHub → Commits → "Revert" | 1 min |

Every change you commit to GitHub triggers Cloudflare to rebuild and redeploy automatically. Live in ~30–60 seconds.

---

## What you need before you start

| Item | Where | Notes |
|---|---|---|
| **GitHub account** with access to `marinacostacomms/my-website` | github.com | Marina invites you as a collaborator under repo Settings → Access → Collaborators |
| **Cloudflare account** with access to the project | dash.cloudflare.com | Optional — only needed for checking deploys or env vars |
| **Formspree account** | formspree.io | Optional — only needed for changing form settings |
| Browser only | — | You do **not** need to install anything on your computer for routine edits |

The whole system is designed so you can edit from any browser, anywhere. No terminal, no code editor, no local setup needed for normal updates.

---

## How the site is organised

The site is a single page with sections: nav → hero → role cards → about → picker quiz → contact form → footer. Editable content is split across a small number of files:

```
src/
├── content/copy.ts      ← all the words on the page (most edits go here)
├── data/roles.ts        ← detailed copy for Builder / Leader / Specialist cards
└── styles/global.css    ← visual design (don't touch unless needed)
public/
└── assets/              ← all images, photos, and PDFs
```

You'll mostly only ever edit two files: `copy.ts` and the contents of `public/assets/`.

---

## Task 1 — Edit text on the page

The most common task. Use this for changing the hero headline, the about paragraphs, the contact form labels, the footer blurb, etc.

1. Go to [github.com/marinacostacomms/my-website](https://github.com/marinacostacomms/my-website).
2. Click into `src` → `content` → `copy.ts`.
3. Click the **pencil icon** (top right of the file) to open the editor.
4. Find the line you want to change. The file is organised into clearly labelled sections: `nav`, `hero`, `roles`, `about`, `picker`, `contact`, `footer`.
5. Edit text **inside the quotes** only. Examples:

   ```ts
   // BEFORE
   primaryCta: 'Start a conversation',

   // AFTER
   primaryCta: 'Get in touch',
   ```

6. Scroll to the bottom of the page → write a short commit message like `"Update hero CTA"` → click the green **Commit changes** button → click **Commit changes** again.
7. Wait ~30–60 seconds. Visit the live site, do a hard refresh (**Cmd+Shift+R** on Mac, **Ctrl+Shift+R** on Windows) to bypass the browser cache.

### ⚠️ Critical rule about apostrophes

If a string is wrapped in single quotes (`'...'`), it cannot contain an apostrophe — that ends the string early and breaks the build.

```ts
// BREAKS the build
lead: 'Where you're at and where you're going.',

// FIX 1: use double quotes around the outside
lead: "Where you're at and where you're going.",

// FIX 2: escape the apostrophe with a backslash
lead: 'Where you\'re at and where you\'re going.',
```

Double quotes are easier and safer. **If your edit fails to deploy, look here first.**

### What you can edit safely

- Anything **inside the quotes** in `copy.ts`
- Headings, eyebrows, button labels, paragraphs, error messages, footer blurb

### What to leave alone

- The field names (`hero:`, `eyebrow:`, `primaryCta:`, etc.) — those are how the code finds the text
- The brackets, commas, colons, and quotes themselves
- Anything in `index.astro`, `global.css`, or files outside `content/` and `data/` (unless you're a developer)

---

## Task 2 — Update role descriptions

Builder, Leader, and Specialist details (the three cards and their expanded panels) live in a separate file because they have more structure.

1. github.com → `src` → `data` → `roles.ts` → pencil icon
2. Each role has these editable fields:
   - `title` — "Builder", "Leader", "Specialist"
   - `tag` — "Program", "Retainer", "Project" (the yellow pill on the card)
   - `shape` — "Fixed-scope · 3–6 months" (the small mono text)
   - `note` — "Knowledge transfer is the deliverable." (one line below the shape)
   - `outcome` — the paragraph on the card
   - `detail.ideal` — paragraph in the expanded panel under "Ideal for"
   - `detail.what` — array of bullet points under "What's included"
   - `detail.outcomeLong` — paragraph under "The outcome"

3. Edit the strings, commit. Same apostrophe rule applies.

---

## Task 3 — Add or replace an image, photo, or PDF

For the one-pager PDF, full bio PDF, blog images, hero illustrations, etc.

### Adding a new file

1. Go to the repo on github.com → click into `public` → click into `assets`.
2. Top right: **Add file** → **Upload files**.
3. Drag the file in (or click "choose your files"). Use lowercase, hyphens, no spaces in the filename — e.g. `marina-costa-one-pager.pdf` not `Marina Costa One Pager.pdf`.
4. Scroll down → **Commit changes**.
5. The file is now live at `https://[your-site-url]/assets/[filename]`.

### Linking to it from the page

Once uploaded, you usually need to point a link at it. For PDF downloads:

1. Go to `src/content/copy.ts`.
2. Find the relevant `*Href` field, e.g. `onePagerHref:` or `bioHref:`.
3. Change `'#'` to `'/assets/your-filename.pdf'`. Note the **leading slash**.
4. Commit.

### Replacing an existing file

Easiest path: upload a new file with the **same exact filename** as the old one. It overwrites. No code changes needed.

---

## Task 4 — Replace Marina's headshot

The headshot lives at `public/assets/MarinaCosta_Headshot.jpg`. The about-section CSS points at this filename.

### If you have a new photo:

1. **Optimise it first.** A 4 MB phone photo is overkill for a 280×350 portrait slot. Run it through [tinypng.com](https://tinypng.com) or [squoosh.app](https://squoosh.app) — aim for under 200 KB.
2. **Save it with the exact filename** `MarinaCosta_Headshot.jpg` (case matters).
3. Upload to `public/assets/` (overwrites the old one).
4. Commit. Hard-refresh the live site to see the new photo.

### Want a totally different filename?

Then you also need to update one CSS line:

1. Go to `src/styles/global.css`.
2. Find `background-image: url('/assets/MarinaCosta_Headshot.jpg');`
3. Change to your new filename.
4. Commit.

---

## Task 5 — Update Formspree (contact form) settings

The contact form posts submissions to Formspree, which emails them to **marina@costacommunication.ca**.

### To change which Formspree form receives submissions

1. Sign in at [formspree.io](https://formspree.io) → find or create the form you want.
2. Click into the form → **Integration** tab → copy the URL from the `<form action="...">` snippet (looks like `https://formspree.io/f/abcdwxyz`).
3. Go to github.com → `src/content/copy.ts` → pencil icon.
4. Find this line near the top of the `contact:` block:
   ```ts
   formspreeEndpoint: 'https://formspree.io/f/maqvyjjq',
   ```
5. Replace the URL with the new one. Commit.

### To change the email subject, auto-reply, or notification address

Done in Formspree, not in the code:

1. formspree.io → your form → **Settings**.
2. Adjust **Notification email**, **Email subject**, **Auto-reply** as desired.
3. Save in Formspree. No code change required.

### To check past submissions

formspree.io → your form → **Submissions** tab. Every submission is stored there as a backup, even if the email got lost.

---

## Task 6 — Verify a change went live

After every commit, follow up to confirm the deploy worked.

### Check the deploy status

1. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com).
2. Left sidebar → **Workers & Pages** → click the project (`my-website`).
3. **Deployments** tab — top entry is the most recent deploy.
4. ✅ Green = success. ❌ Red = build failed.
5. If green, hard-refresh the live site to see the change.
6. If red, click into the failed deployment to read the build log. Most common cause: a typo in `copy.ts` (apostrophe inside single quotes, or a missing comma).

### Hard refresh

Browsers aggressively cache pages. After a deploy:
- **Mac**: Cmd+Shift+R
- **Windows**: Ctrl+Shift+R
- **iPhone Safari**: tap the address bar, swipe down to refresh
- Or open the site in a private/incognito window

If you still see the old content after a hard refresh and Cloudflare shows a green deploy, wait 60 more seconds — there's a small CDN propagation delay.

---

## Task 7 — Roll back a bad change

If a commit broke something — wrong copy, broken image, anything you regret — revert is one click.

1. github.com → repo → **Commits** (link near the top, says "X commits" with a clock icon).
2. Find the bad commit → click it → top right of that commit page click the **"..."** menu → **Revert**.
3. GitHub creates a new commit that undoes the bad one.
4. Cloudflare auto-redeploys with the previous good state in ~60 seconds.

You never lose work this way — the bad commit is still in history, you've just added a "do the opposite of that" commit on top.

---

## When things go wrong

### Build failed in Cloudflare

Most common cause: a typo in `copy.ts`. Open the failed deployment's log; the error usually points at the file and line. Common fixes:

| Error message contains… | What to fix |
|---|---|
| `Expected "}" but found …` | An apostrophe inside `'single quotes'`. Change outer quotes to `"double quotes"`. |
| `Unexpected token` or `SyntaxError` | A missing comma at the end of a line, or a missing closing bracket. |
| `Cannot find module …` | Don't worry — this rarely happens with content edits. Page Marina or a developer. |

If you can't tell what's wrong, **revert the bad commit** (Task 7) to restore the site, then ask for help.

### Form is not delivering emails

1. Formspree dashboard → check the **Submissions** tab. Are submissions even arriving there?
   - **Yes** → It's an email delivery issue. Check Marina's spam folder. Check that the recipient email in Formspree settings is correct.
   - **No** → The form isn't reaching Formspree. Check that `formspreeEndpoint` in `copy.ts` matches the URL in Formspree's Integration tab.
2. Check Formspree quota — free tier is 50 submissions/month. If exceeded, submissions silently fail. Upgrade or wait until the quota resets.

### Site shows old content after a deploy

1. Hard refresh (Cmd+Shift+R).
2. Open in an incognito window.
3. If still wrong: check Cloudflare Deployments — did the latest deploy actually finish? If the build failed, the old version is still being served.

### Image isn't appearing

1. Confirm the file is in `public/assets/` (not `dist/` — that's the build output and gets wiped).
2. Confirm the path in `copy.ts` or `global.css` starts with `/assets/` (leading slash) and matches the filename **exactly** (case matters).
3. Hard refresh.

---

## Tasks that need a developer

These are beyond click-and-edit territory. If you need any of them, find someone with web dev experience or contact the original developer.

- Adding a new section to the page (e.g. a portfolio block, testimonials carousel)
- Changing the colour palette or fonts
- Restructuring the role cards layout
- Adding a second page (currently single-page)
- Setting up analytics (Plausible, Fathom, GA)
- Adding a blog or CMS
- Connecting a custom domain
- Setting up server-side functionality

---

## Useful links

- **Repo**: [github.com/marinacostacomms/my-website](https://github.com/marinacostacomms/my-website)
- **Live site**: your `*.workers.dev` URL or custom domain (check Cloudflare project for current URLs)
- **Cloudflare dashboard**: [dash.cloudflare.com](https://dash.cloudflare.com)
- **Formspree dashboard**: [formspree.io](https://formspree.io)
- **Image compression**: [tinypng.com](https://tinypng.com), [squoosh.app](https://squoosh.app)

---

## Style guidelines (for copy edits)

To keep the voice consistent if you're writing new copy:

- Use **em dashes** ( — ) not hyphens with spaces ( - )
- Use **straight quotes** in code files (the editor will handle them); curly quotes are fine in displayed copy
- Sentence case for buttons ("Start a conversation"), not Title Case ("Start A Conversation")
- "Marina Costa Communication" is the full name; "Marina" alone is fine in body copy
- The brand voice: confident, plain-spoken, warm. Not corporate, not casual. Match what's already on the page.
