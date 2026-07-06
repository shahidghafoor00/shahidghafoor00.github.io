# Shahid Ghafoor — Developer Portfolio

A premium, animated portfolio site built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Statically exported for GitHub Pages.

## Tech Stack

- **Next.js 16** (App Router, static export via `output: "export"`)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **next-themes** for dark/light mode
- **next-mdx-remote** for the MDX-powered blog
- **lucide-react** for icons (brand logos are hand-rolled SVGs in `components/icons.tsx`, since lucide dropped brand marks)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # static export -> ./out
```

## Project Structure

```
app/                 Routes (App Router). Each page has its own metadata.
components/
  ui/                Reusable primitives: Button, Card, Reveal, AnimatedCounter, etc.
  layout/             Navbar, Footer, ThemeToggle
  sections/           Home page sections (Hero, Services, Testimonials, FAQ, ...)
  projects/, blog/, contact/   Feature-specific components
content/              All editable site content (JSON + MDX)
lib/                  Typed content getters, MDX/blog parsing, utilities
types/                Shared content TypeScript types
```

## Editing Content

Everything editable lives in `content/`, with no component changes required:

| File | Controls |
| --- | --- |
| `content/site.json` | Name, bio, stats, social links, resume/booking URLs |
| `content/services.json` | Services section |
| `content/projects.json` | Projects grid + case study pages (`gradient` refers to a key in `lib/gradients.ts`, `category` must be one of `mobile \| backend \| ai \| web \| open-source`) |
| `content/experience.json` | Experience timeline |
| `content/skills.json` | Skills section (`icon` must match a key in `lib/icon-map.tsx`) |
| `content/testimonials.json` | Testimonials carousel |
| `content/faq.json` | FAQ accordion |
| `content/process.json` | "How I Work" steps |
| `content/resume.json` | Resume page summary/education/certificates |
| `content/blog/*.mdx` | Blog posts — add a new `.mdx` file with frontmatter (`title`, `date`, `excerpt`, `category`, `tags`) and it's picked up automatically |

## Things to replace before publishing

This was scaffolded with your real name, location, GitHub profile, and LinkedIn profile, but the following are **placeholders** and should be updated:

- `content/site.json` → `social.twitter`, `social.whatsapp`, `bookCallUrl` (currently placeholder handles/links)
- `content/testimonials.json` → replace with real client quotes
- `content/projects.json` → `liveUrl` / `githubUrl` for each project, plus real screenshots if you want them (swap the gradient placeholder in `components/projects/project-card.tsx` for a `next/image`)
- `public/resume.pdf` → currently a placeholder PDF; replace with your real resume
- `content/resume.json` → education/certificates are placeholders

## Contact form & newsletter (static site limitations)

This site is a static export with no backend, so:

- The **contact form** (`components/contact/contact-form.tsx`) opens the visitor's email client via a pre-filled `mailto:` link. To use a real form backend instead (Formspree, Getform, etc.), swap the `onSubmit` handler to `fetch()` your form endpoint.
- The **footer newsletter form** is a visual stub (`components/layout/newsletter-form.tsx`) — wire it up to a provider like Buttondown, ConvertKit, or Mailchimp's API.

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys `./out` on every push to `main`.

1. Push this repo to `github.com/shahidghafoor00/shahidghafoor00.github.io` (a user-page repo name so it serves at the domain root — matches `content/site.json`'s `url`). If you use a different repo name instead, it'll be a project page served at `<user>.github.io/<repo>`, and you'll need to add `basePath: "/<repo>"` to `next.config.ts`.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically. Progress shows under the **Actions** tab.

## Notes

- Images use `next/image` with `unoptimized: true` (required for static export) — no project screenshots are used by default (gradient placeholders), so this doesn't matter until you add real photos.
- Syntax highlighting in blog posts uses `rehype-highlight` with the Atom One Dark theme, applied regardless of site theme (standard practice for code blocks).
