# Computer Point — Website

A modern, responsive website for a local Computer Point / Digital Service Center, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## 1. Edit your business details (do this first)

Every business-specific detail lives in **one file**: [`data/config.ts`](./data/config.ts).

Replace these placeholders with your real information:

| Placeholder | What to put there |
|---|---|
| `businessName` | Your shop/business name (shown in navbar, footer, forms) |
| `address` | Full street address |
| `phone` | Landline or mobile number (used for the "tel:" call links) |
| `whatsapp` | WhatsApp number, e.g. `+91 98765 43210` (used for the floating WhatsApp button and Contact page) |
| `email` | Contact email address |
| `mapsEmbedUrl` | A Google Maps **Embed** link (Google Maps → Share → Embed a map → copy the `src` URL). Until you set this, the Contact page shows a friendly placeholder instead of a broken map. |
| `mapsLink` | A regular Google Maps share link, used for the "Get Directions" button |
| `siteUrl` | Your live domain, used for SEO metadata, sitemap.xml, and robots.txt |

The same file also holds the full services list, testimonials, scholarship categories, eligibility criteria, required documents, and FAQs — edit any of it directly, no need to touch component code.

## 2. Run it locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To build for production and preview that build:

```bash
npm run build
npm start
```

## 3. Deploy

This is a standard Next.js app (uses API routes, so it needs a Node.js host — it is **not** a static export). The easiest option is [Vercel](https://vercel.com) (made by the Next.js team): push to a Git repo, import it on Vercel, done. Any other Node.js-capable host works too.

## Project structure

```
app/                    Pages (App Router) + API routes
  page.tsx              Home
  scholarship/page.tsx  Scholarship info + application form
  services/page.tsx     All services
  contact/page.tsx      Contact info + form + map
  api/contact/          Contact form submission handler
  api/scholarship/      Scholarship form submission handler
  layout.tsx            Root layout — navbar, footer, fonts, SEO
  globals.css           Design tokens (brand colors, fonts)

components/
  ui/                   Generic building blocks: Button, IconCard, SectionHeading,
                         InfoChecklist, StepTimeline, CTABanner, Container
  layout/                Navbar, Footer, WhatsAppButton, ScrollToTopButton
  home/                  Hero, Stats, Testimonials
  scholarship/           ScholarshipHero, ScholarshipForm
  contact/               ContactForm, ContactInfo, MapEmbed
  shared/                FAQAccordion

data/config.ts           ← All business content lives here
types/index.ts            Shared TypeScript types
lib/validation.ts         Form validation helpers
```

## Connecting the forms to a real backend

Both forms (`ScholarshipForm.tsx`, `ContactForm.tsx`) already do full client-side validation and POST to their own API routes (`app/api/scholarship/route.ts`, `app/api/contact/route.ts`), which return a success response with a generated reference ID. Right now those routes just `console.log` the submission — that's intentional, since sending real email/SMS or storing files requires credentials only you can provide. Each route has a `TODO` comment marking exactly where to add:

- Email/SMS notifications (e.g. [Resend](https://resend.com), Nodemailer, or an SMS gateway)
- Persisting applications (a database, or something lightweight like a Google Sheet via its API)
- Storing the uploaded scholarship document (e.g. S3, Cloudinary, or Google Drive API)

## Notes

- **No stock photography is used.** The hero's visual and every icon are custom-coded (SVG/Tailwind), so there's nothing to license and nothing that will look out of place once you're ready to add real photos of your shop.
- **Scholarship details are intentionally general** (categories, eligibility, required documents, process) rather than citing specific amounts or deadlines, since real scheme details change every academic year — the copy points visitors to your team for current specifics.
- Colors, fonts, and other design tokens are defined once in `app/globals.css` under `:root` — change them there to re-theme the whole site.
