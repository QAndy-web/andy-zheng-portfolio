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

## Production Build

```bash
npm run build
npm start
```

With pnpm:

```bash
pnpm build
pnpm start
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

## Deploy to Vercel

1. Push this project to GitHub.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import the GitHub repository.
4. Keep the framework preset as `Next.js`.
5. Use the default build command, or set it to:

```bash
npm run build
```

6. Leave the output directory empty/default for Next.js.
7. Click `Deploy`.

After deployment, Vercel will provide a public URL such as:

```text
https://your-project-name.vercel.app
```

## Notes

- Do not commit `.next`, `node_modules`, `.env`, `.vercel`, or local dev-server logs.
- The site uses standard CSS gradients, responsive Tailwind layouts, and Next font loading for Chrome and Safari compatibility.
