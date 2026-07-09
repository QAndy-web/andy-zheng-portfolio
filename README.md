# Andy Zheng Portfolio

A premium dark personal portfolio website for Andy Zheng, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons

## Local Preview

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

If you use pnpm instead:

```bash
pnpm install
pnpm dev
```

## Static Production Build

```bash
npm run build
```

With pnpm:

```bash
pnpm build
```

The static site is exported to:

```text
out
```

## Edit Personal Content

Most editable content is in:

```text
src/data/profile.ts
```

Update profile text, contact links, resume data, project cards, interests, and timeline items there.

## Replace Resume PDF

The resume is served from:

```text
public/resume.pdf
```

Replace that file with a new PDF using the same filename. The Resume and Contact pages link to `/resume.pdf`.

## Deploy to Cloudflare Pages

This project is configured for static export in `next.config.ts`:

```ts
output: "export"
```

Cloudflare Pages build settings:

```text
Framework preset: Next.js (Static HTML Export)
Production branch: main
Build command: npx next build
Build output directory: out
Root directory: /
```

If Cloudflare detects pnpm from `pnpm-lock.yaml`, `pnpm build` is also a valid build command.

1. Push this project to GitHub.
2. In Cloudflare, open `Workers & Pages`.
3. Select `Create application`.
4. Select the `Pages` tab.
5. Select `Import an existing Git repository`.
6. Choose the GitHub repository.
7. Use the build settings above.
8. Click `Deploy`.

After deployment, Cloudflare will provide a public URL such as:

```text
https://andy-zheng-portfolio.pages.dev
```

## Notes

- Do not commit `.next`, `node_modules`, `.env`, `.vercel`, or local dev-server logs.
- The site uses standard CSS gradients, responsive Tailwind layouts, and Next font loading for Chrome and Safari compatibility.
