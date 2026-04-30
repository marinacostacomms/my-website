# Deploy & edit guide

This site lives on **Cloudflare Pages**, connected to a **GitHub repo**. Push to GitHub → Cloudflare auto-builds and deploys in ~30 seconds.

This guide covers:
1. First-time setup (push to GitHub, connect Cloudflare)
2. How to edit copy, images, and PDFs from your browser after that

---

## 1. First-time setup (do this once)

### Step 1 — Create the GitHub repo

1. Sign in at [github.com](https://github.com) (create an account if you don't have one).
2. Click **+** (top right) → **New repository**.
3. Name it `marina-costa-site` (or whatever you like — it's not public-facing).
4. Choose **Private** (recommended — only you can see it).
5. **Don't** check "Add README" or any other box. We already have those files.
6. Click **Create repository**.
7. On the next page, copy the two terminal commands under **"…or push an existing repository from the command line."** They look like this:
   ```
   git remote add origin https://github.com/YOURNAME/marina-costa-site.git
   git branch -M main
   git push -u origin main
   ```
8. Open Terminal (Applications → Utilities → Terminal), run:
   ```
   cd ~/Desktop/marina-costa-site
   ```
   then paste the three commands from GitHub.
9. The first push will ask for your GitHub credentials — use a [personal access token](https://github.com/settings/tokens) (or sign in via the GitHub Desktop app, which handles auth automatically).

### Step 2 — Connect Cloudflare Pages

1. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com).
2. Left sidebar → **Workers & Pages** → **Create** → **Pages** tab → **Connect to Git**.
3. Authorize Cloudflare to read your GitHub repos. Pick `marina-costa-site`.
4. **Set up builds and deployments:**
   - **Project name:** `marina-costa-site` (this becomes your `*.pages.dev` URL)
   - **Production branch:** `main`
   - **Framework preset:** **Astro**
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. **Environment variables** — click "Add variable":
   - **Variable name:** `PUBLIC_FORMSPREE_ENDPOINT`
   - **Value:** your Formspree URL, e.g. `https://formspree.io/f/abcdwxyz`

   (Get this from your Formspree dashboard → your form → **Integration** → copy the `<form action="...">` URL.)
6. Click **Save and Deploy**. First build takes ~1 minute.
7. When it finishes you'll get a URL like `marina-costa-site.pages.dev`. That's your live site.

### Step 3 — (Optional) Add your custom domain

1. In Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain**.
2. Enter `marinacosta.ca` (or whatever you've registered).
3. Cloudflare walks you through the DNS records. If your domain is also on Cloudflare, this is one click.

---

## 2. Editing the site after launch

Everything below happens in the **GitHub web UI** — no terminal needed. Each time you save a change, GitHub commits it, Cloudflare rebuilds, and your live site updates in ~30 seconds.

### Where the editable bits live

| What you want to change | File to edit |
|---|---|
| **Hero, About, Picker, Contact, Footer copy** | [`src/content/copy.ts`](src/content/copy.ts) |
| **Role descriptions** (Builder / Leader / Specialist) | [`src/data/roles.ts`](src/data/roles.ts) |
| **Images, PDFs, downloads** | `public/assets/` (drag-drop in GitHub) |
| **Colors, fonts, spacing** | `src/styles/global.css` (advanced) |

### Edit copy from the browser

1. Go to your repo on github.com.
2. Click `src` → `content` → `copy.ts`.
3. Click the **pencil icon** (top right of the file).
4. Edit the text. Only change content **inside the quotes** — don't change the quotes themselves or anything that looks like `something:` (those are field names).
5. Scroll down → **Commit changes** (green button) → **Commit changes** again.
6. Wait ~30 seconds. Your site is updated.

**Example** — to change "Start a conversation" everywhere it appears in the nav:
```ts
nav: {
  ...
  cta: 'Get in touch',  // was: 'Start a conversation'
},
```

### Upload an image, photo, or PDF

1. Go to your repo → click `public` → click `assets`.
2. Click **Add file** → **Upload files** (top right).
3. Drag the file in, or browse for it.
4. Scroll down → **Commit changes**.
5. The file is now at `/assets/yourfile.pdf` on your site.

### Wire up the one-pager / bio download

Once you've uploaded the PDFs:

1. Edit `src/content/copy.ts`.
2. Find `onePagerHref: '#'` and change it to `onePagerHref: '/assets/marina-costa-one-pager.pdf'` (use whatever you named the file).
3. Same for `bioHref`.
4. Commit.

### Replace the portrait placeholder with a real photo

This one needs me (or someone comfortable with code) to wire it in once. After that, swapping the photo is just uploading a new file with the same name.

When you have a photo ready, ask me to:
1. Save it as `public/assets/portrait.jpg` (4:5 ratio recommended).
2. Update `.mc-portrait` in `src/styles/global.css` to use the image instead of the gradient.

After that, replacing the photo is just: upload new file with the same name → commit.

---

## What to do if something breaks

- **"My commit didn't deploy"** — Cloudflare Pages → your project → **Deployments**. Check the latest build. If it's red (failed), click it for the error log. Most common cause: a typo in `copy.ts` (a missing quote or comma).
- **"I broke something with my edit"** — Go to your repo → **Commits** → find the previous good one → click it → **"…"** menu → **Revert**. That undoes the change cleanly. Cloudflare redeploys the previous version.
- **"The form stopped working"** — Check that `PUBLIC_FORMSPREE_ENDPOINT` is still set in Cloudflare Pages → **Settings → Environment variables**, and that your Formspree account is active.

---

## Local development (optional)

If you ever want to preview changes before pushing:

```bash
cd ~/Desktop/marina-costa-site
npm install      # only the first time
npm run dev      # opens at http://localhost:4321
```

Edit any file → the browser auto-refreshes.
