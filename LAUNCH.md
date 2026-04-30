# Pre-launch checklist & Formspree setup

Two guides in one file:
1. [Pre-launch tweaks](#1-pre-launch-tweaks) — small things to polish before going live
2. [Formspree email setup](#2-formspree-email-setup) — make the contact form emails look the way you want

---

## 1. Pre-launch tweaks

Each item below is a one-line edit in `src/content/copy.ts` (or one file upload). Do them in any order.

### 1a. Page title & meta description (SEO + browser tab)

These appear in: the browser tab, Google search results, and link previews when someone shares your URL.

**Edit `src/content/copy.ts`** → find the `meta` block at the top:

```ts
meta: {
  title: 'Marina Costa Communication — Fractional Communications Consultant',
  description:
    "Marina Costa is an independent fractional communications consultant. Three engagement archetypes — Builder, Leader, Specialist — for organizations that need clear communication.",
},
```

Recommended:
- **Title:** under 60 characters. Format: `Name — what you do`. Yours is good as-is.
- **Description:** 140–160 characters. Should read like a one-sentence pitch. Currently 192 — could trim a touch:
  > Independent fractional communications consultant. Three ways I work with organizations: a capacity-building program, a senior retainer, or a project specialist.

Commit. Done.

### 1b. Favicon (the little icon in the browser tab)

**Quick path (works now)** — already set up. Currently the browser tab uses `public/assets/logo-primary.png`. It's fine, but PNG favicons are slightly blurry on Retina displays.

**Better path (15 minutes, polished result):**
1. Go to [realfavicongenerator.net](https://realfavicongenerator.net).
2. Upload `public/assets/logo-primary.png` (or a higher-res version of the "m" mark if you have one).
3. The tool generates a full set: `favicon.ico`, `apple-touch-icon.png`, `favicon-32x32.png`, etc.
4. Download the zip, drop **all the files** into `public/` (not `public/assets/` — directly inside `public/`).
5. The tool will give you an HTML snippet like:
   ```html
   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
   <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
   <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
   <link rel="manifest" href="/site.webmanifest">
   ```
6. Open `src/layouts/Base.astro` and replace the existing `<link rel="icon" ...>` line with that snippet.

If that sounds fiddly: skip it. Your current PNG favicon is fine for launch — you can come back to this anytime.

### 1c. Wire up the one-pager PDF

Once you have the PDF ready:

1. Go to your repo on GitHub → `public` → `assets`.
2. **Add file → Upload files** → drag the PDF in.
3. Name it something tidy, e.g. `marina-costa-one-pager.pdf` (lowercase, hyphens, no spaces).
4. Commit (green button at the bottom).
5. Edit `src/content/copy.ts` → find this line:
   ```ts
   onePagerHref: '#',
   ```
   Change to:
   ```ts
   onePagerHref: '/assets/marina-costa-one-pager.pdf',
   ```
6. Commit. Done — the "Download one-pager" button now downloads the actual file.

### 1d. Wire up the full bio PDF

Same as above, but for the bio:

1. Upload to `public/assets/`, e.g. `marina-costa-bio.pdf`.
2. In `copy.ts`, find:
   ```ts
   bioHref: '#',
   ```
   Change to `'/assets/marina-costa-bio.pdf'`.
3. Commit.

### 1e. Link-share preview image (Open Graph) — optional but recommended

When someone pastes your URL into LinkedIn, Slack, or iMessage, those apps look for an "OG image" to show as a preview. Without one, you get a plain text link.

1. Make a 1200 × 630px image. Easy options:
   - A clean shot of the hero (screenshot at 1200px wide, crop)
   - Your name + the headline in big type on a cream background
   - A Canva template (search "Open Graph image")
2. Save as `public/assets/og-image.jpg` (jpg keeps file size down).
3. Open `src/layouts/Base.astro` and add **inside the `<head>`** (after the existing `<meta property="og:type">` line):
   ```html
   <meta property="og:image" content="/assets/og-image.jpg" />
   <meta property="og:image:width" content="1200" />
   <meta property="og:image:height" content="630" />
   <meta name="twitter:card" content="summary_large_image" />
   ```
   (You'll need to replace the existing `<meta name="twitter:card" content="summary" />` line — or just delete it and use the new one above.)
4. Commit. Test at [opengraph.xyz](https://www.opengraph.xyz) by pasting your live URL.

### 1f. Final pre-launch sanity check

Before pointing your custom domain at the site, click around the live `*.pages.dev` URL once with this list:

- [ ] All three role cards expand and close
- [ ] Picker quiz advances through both questions and shows a recommendation
- [ ] About "Read the longer version" toggles
- [ ] Form submits to Formspree and shows the "Got it — talk soon" success state
- [ ] You receive the test email
- [ ] All "#" links lead somewhere real (not the dummy `#` placeholder)
- [ ] Open the site on your phone — check that everything stacks neatly
- [ ] LinkedIn link opens in a new tab and goes to your profile
- [ ] Mailto link in the footer opens your email client with `hello@marinacosta.ca` filled in

---

## 2. Formspree email setup

By default, every form submission sends you a plain email with all the fields. You can customize it. All settings live in your Formspree dashboard — no code changes needed.

### What gets sent (current setup)

The form sends these named fields to Formspree:

| Field name | What it is |
|---|---|
| `name` | The visitor's name |
| `email` | Their email address (Formspree uses this for "Reply-To") |
| `organization` | Optional — their company or team |
| `role` | Which engagement they think fits: `builder`, `leader`, `specialist`, or `unsure` |
| `message` | The body of their inquiry |

### 2a. Make the email subject line useful

By default Formspree subject lines look like `New submission from your-form-name`. You probably want something more scannable in your inbox.

1. Sign in to [formspree.io](https://formspree.io) → click your form.
2. **Settings** tab → scroll to **"Notification email"** or **"Email Subject"**.
3. Set the subject to a template using your field names — Formspree supports `{{ field_name }}` substitution. Examples:

   | Use case | Template |
   |---|---|
   | Sender name | `New inquiry from {{ name }}` |
   | Name + role | `{{ name }} — wants to talk about a {{ role }} engagement` |
   | Name + org | `New inquiry: {{ name }}, {{ organization }}` |

4. Save. Send yourself a test submission to confirm.

### 2b. Make replies "just work" (Reply-To header)

Formspree automatically sets the email's **Reply-To** header to whatever was submitted in the `email` field. So when you hit "Reply" in your mail client, your reply goes back to the submitter — not to Formspree.

This works out of the box for your form. Nothing to configure. (Just don't rename the `email` field in `copy.ts` — Formspree looks for that exact name.)

### 2c. Auto-reply to the visitor

Free Formspree plans don't include this. Paid plans (from $10/month) do.

If you have it enabled:

1. Formspree → your form → **Settings → Auto-reply**.
2. Toggle on. Set **From name** (e.g. "Marina Costa") and **Subject** (e.g. `Got your message — talk soon`).
3. Body — keep it short and human:
   > Hi {{ name }},
   >
   > Thanks for reaching out. I read every message myself and reply within two business days.
   >
   > — Marina

4. Save. The visitor will get this email instantly after submitting; you'll still get the inquiry email separately.

### 2d. Spam protection

Formspree has built-in spam filtering, but the form is a tempting target for bots. Two layers you can add:

**Layer 1 — Honeypot field (silent, free, recommended):**

A hidden field that humans can't see but bots fill in. If it's filled, the submission is rejected. To add one, edit `src/pages/index.astro`, find the `<form class="mc-form" ...>` opening tag, and add this hidden field anywhere inside the form (just before `</form>` is fine):

```html
<input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />
```

Formspree treats `_gotcha` specially — any submission where it's filled in is dropped silently. No CAPTCHA, no UX cost.

**Layer 2 — reCAPTCHA (visible, only if Layer 1 isn't enough):**

In Formspree → Settings → enable reCAPTCHA. Adds a "I'm not a robot" challenge. Use this only if you start getting actual spam.

### 2e. Where submissions go (besides email)

Useful side benefit: every submission is also stored in your Formspree dashboard. So if you ever lose an email, **Formspree → your form → Submissions** has the history.

You can also have submissions forwarded to:
- A Slack channel
- Google Sheets (good for tracking inquiries over time)
- Notion / Airtable / etc. via Zapier or webhooks

These are under **Plugins** in your Formspree form settings. Most are paid-tier features.

### 2f. Test the whole loop end-to-end

Before launching publicly:

1. From your phone (so it's a different network than your laptop), go to your `*.pages.dev` URL.
2. Submit the form with realistic but fake info (use your own email).
3. Check:
   - The site shows "Got it — talk soon."
   - You receive the inquiry email at your real address.
   - The subject line uses your template (if you set one).
   - The "Reply-To" goes to the email you submitted.
   - The submission appears in Formspree's dashboard.

If any of these fail, the most common causes:
- `PUBLIC_FORMSPREE_ENDPOINT` env var not set in Cloudflare Pages
- Form ID typo in the env var
- Formspree form is paused or out of submission quota (free tier: 50/month)
