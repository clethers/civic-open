# AI Platform — Template Structure

A Next.js 16 marketing site template for an AI platform. Built with App Router, Tailwind CSS v4, and TypeScript.

---

## Project Structure

```
app/
├── layout.tsx                  # Root layout — metadata, fonts, global CSS
├── page.tsx                    # Root route — redirects to /home
├── globals.css                 # Global styles (Tailwind import, CSS vars)
│
└── (site)/                     # Route group — shared site header + footer
    ├── layout.tsx              # Site layout — Header (nav, login, CTA) + Footer
    │
    ├── home/
    │   └── page.tsx            # Marketing landing page
    │
    └── developers/
        └── page.tsx            # Developer / API documentation page
```

---

## Pages

### `/home` — Landing Page

Sections (in order):

| Section | Description |
|---|---|
| **Hero** | Gradient banner, headline, sub-copy, "Get Started" CTA |
| **App Previews** | 5-column grid of feature thumbnails around a centre mockup |
| **Solving Challenges** | 3-card grid explaining platform value props |
| **Key Advantages** | Dark slate 4-column grid (Accessibility, Efficiency, Transparency, Innovation) |
| **Platform Features** | Title + description intro to the feature list |
| **Feature Sections × N** | Alternating image-left / image-right layout per feature |
| **FAQs** | Accordion list of frequently asked questions |
| **Contact CTA** | Dark card with avatar strip + email capture form |
| **Get Started Banner** | Gradient banner repeat with "Get Started" CTA |

#### Feature List (customisable)

Each feature has: `badge`, `title`, `description`, `cta label`, `placeholder color`, `imageRight` (bool).

Default features:
1. AI Assistant (CHATBOT)
2. Translator (AI-POWERED)
3. Image Identifier (AI-POWERED)
4. Document Extractor (OCR)
5. Coder/Programmer (PROGRAMMING)
6. Speech Maker (SPEECH)
7. Identity AI (LIVENESS)
8. Resume Builder (ASSISTANCE)
9. Open AI (AI)
10. Laws and Regulation (LAWS)
11. Tourism (TOURISM)

---

### `/developers` — API Docs Page

Sections:

| Section | Description |
|---|---|
| **Hero** | Badge, headline, sub-copy, "Request Access" + "View Documentation" buttons |
| **Getting Started** | 3-step cards: Request Access → Get API Key → Start Building |
| **API Endpoints** | Base URL display + endpoint table (method badge, path, description) |
| **Quick Start** | Dark code block with SDK install + usage example |
| **CTA** | Dark banner with "Request API Access" button |

---

## Layout Components

### Header (`app/(site)/layout.tsx`)

- Logo (icon + wordmark)
- Nav links: Home, Features, FAQs, Contact, Developers
- Active link highlight (blue underline)
- Login + Request Access buttons
- Mobile hamburger menu

### Footer (`app/(site)/layout.tsx`)

5-column dark grid:
1. Official seal placeholder
2. Brand + copyright + developer credit
3. About Us links (Terms, Privacy Policy, FAQs)
4. Follow Us (Facebook, Twitter/X, Instagram)
5. Developed By logo placeholder

---

## Customisation Guide

### Replace branding
Search for `AI Platform` across all files and substitute your platform name.

### Add a feature section
Append an object to the `features` array in `app/(site)/home/page.tsx`:

```ts
{
  badge: "BADGE TEXT",
  title: "Feature Name",
  description: "Short description of the feature.",
  cta: "Call to action label",
  color: "bg-gradient-to-br from-blue-400 to-blue-700",
  imageRight: true,   // alternates layout side
}
```

### Add a nav link
Edit the `navLinks` array in `app/(site)/layout.tsx`:

```ts
{ label: "Label", href: "/route" }
```

### Add an FAQ
Append a string to the `faqs` array in `app/(site)/home/page.tsx`.

### Add an API endpoint
Append to the `endpoints` array in `app/(site)/developers/page.tsx`:

```ts
{ method: "POST", path: "/api/v1/endpoint", description: "What it does." }
```

Supported methods: `GET`, `POST`, `PUT`, `DELETE` (each styled with a distinct color).

### Swap placeholder images
Feature sections use `<FeaturePlaceholder>` divs. Replace with `<Image>` from `next/image`:

```tsx
<Image src="/images/feature-name.png" alt="Feature Name" width={440} height={380} />
```

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16.x | App Router, SSR, routing |
| React | 19.x | UI |
| Tailwind CSS | 4.x | Styling |
| TypeScript | 5.x | Type safety |
| Geist | — | Font (Sans + Mono) |

---

## Running Locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
