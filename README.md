# Zubia Mughal, Ed.D. — Portfolio

Single-page portfolio for **Zubia Mughal, Ed.D.** — Principal Data Scientist. Theme: *Academic Precision meets Industrial Strength* (theory-constrained ML, high-stakes decisions, governance).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Design

- **Background:** `#020617` (slate-950)
- **Surface:** `#0f172a` (slate-900)
- **Accent:** `#b45309` (amber-700, “Cognac”)
- **Typography:** Crimson Pro (headlines), Inter (body), JetBrains Mono (code)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (Static Export)

```bash
npm run build
```

Output is in the `out/` directory. Suitable for static hosting (e.g. GitHub Pages, any static host).

## Push to GitHub (dr-zubia-mughal-portfolio)

To place all files in [github.com/Zmugha1/dr-zubia-mughal-portfolio](https://github.com/Zmugha1/dr-zubia-mughal-portfolio):

1. Clone the repo (if you haven’t):  
   `git clone https://github.com/Zmugha1/dr-zubia-mughal-portfolio.git`
2. Copy the contents of this folder (`dr-zubia-mughal-portfolio`) into the cloned repo (replace everything except `.git`), or clone into this folder and add the files.
3. From the repo root:  
   `npm install` → `npm run build`
4. Commit and push:  
   `git add .` → `git commit -m "Portfolio site"` → `git push origin main`

## Deploy to Vercel

1. Push this repo to GitHub: [Zmugha1/dr-zubia-mughal-portfolio](https://github.com/Zmugha1/dr-zubia-mughal-portfolio).
2. In [Vercel](https://vercel.com), **Import** the repository.
3. Leave build settings as default (Next.js). With `output: 'export'` in `next.config.js`, Vercel will produce a static export.
4. Deploy. Optionally add a custom domain.

## Placeholder Content

- **About:** Headshot area is a placeholder; replace with your photo (e.g. in `public/` and use Next.js `Image`).
- **Publications:** `pdfUrl` and `scholarUrl` in `sections/Publications.tsx`; set to your PDF and Google Scholar profile.
- **Footer:** Update `LINKEDIN_USER` in `sections/Footer.tsx` to your LinkedIn username.

## Project Structure

```
dr-zubia-mughal-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Nav.tsx
│   └── AgentCard.tsx
├── sections/
│   ├── Hero.tsx
│   ├── ValueProposition.tsx
│   ├── AgentsShowcase.tsx
│   ├── Philosophy.tsx
│   ├── Publications.tsx
│   ├── About.tsx
│   └── Footer.tsx
├── public/
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## License

© Zubia Mughal, Ed.D. All rights reserved.
