# FunnelFlow Systems — Landing Page

A modern, high-converting landing page for FunnelFlow Systems: premium ad-system consultancy between Meta ads and WhatsApp.

## Stack

- **React** (functional components)
- **Vite**
- **Tailwind CSS v4**

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Configure WhatsApp Redirect

Edit `src/App.jsx` and set your business WhatsApp number:

```js
const WHATSAPP_NUMBER = '1234567890'  // Country code + number, no + or spaces (e.g. 15551234567)
```

The qualification form redirects qualified applicants to WhatsApp with a pre-filled message after submission.

---

## Deploy on GitHub (and GitHub Pages)

### 1. Create a new repo on GitHub

- Go to [github.com/new](https://github.com/new).
- Name the repo (e.g. `funnelflow-landing` or `sales-page`).
- Leave it empty (no README, .gitignore, or license).
- Click **Create repository**.

### 2. Push this project from your machine

In the project folder, run:

```bash
cd "c:\Users\user\sales page"
git init
git add .
git commit -m "Initial commit: FunnelFlow Systems landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

### 3. Turn on GitHub Pages

- In the repo on GitHub, go to **Settings** → **Pages**.
- Under **Build and deployment**:
  - **Source**: choose **Deploy from a branch**.
  - **Branch**: select **gh-pages** and **/ (root)**.
- Click **Save**.

### 4. Trigger a deploy

- Every **push to `main`** runs the workflow: it builds the site and pushes the built files to the **gh-pages** branch. Pages then serves that.
- Run it once by hand: **Actions** → **Deploy to GitHub Pages** → **Run workflow**.
- The **gh-pages** branch is created/updated by the workflow (you don’t create it yourself).

### 5. Your live site

After the first successful run, the site will be at:

**`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`**

(If you used a custom domain in Pages settings, use that URL instead.)
