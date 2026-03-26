# Civic Open

**Smart tools, built for everyone.**

Civic Open is an open AI platform that brings together a suite of intelligent tools in one place — translation, document scanning, chatbot assistance, resume building, identity verification, and more. Built for the public, open to all.

---

## Features

| Tool | Description |
|---|---|
| AI Assistant | 24/7 chatbot for instant answers and guidance |
| Translator | Real-time translation across multiple languages |
| Image Identifier | Identify objects and items using AI |
| Document Extractor | OCR-powered text extraction from scanned documents |
| Coder/Programmer | AI-assisted coding, debugging, and optimization |
| Speech Maker | Generate well-structured speeches for any occasion |
| Identity AI | Secure facial recognition and liveness verification |
| Resume Builder | Build professional resumes with AI assistance |
| Open AI | Advanced AI for automation and data analysis |
| Laws & Regulation | Access laws, policies, and legal guidelines |
| Tourism | Travel guides and cultural insights |

---

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 16.x |
| React | 19.x |
| Tailwind CSS | 4.x |
| JavaScript (JSX) | ES2020+ |
| Geist | Sans + Mono |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/clethers/civic-open.git
cd civic-open

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
app/
├── layout.jsx              # Root layout — metadata, fonts, global CSS
├── page.jsx                # Root route — redirects to /home
├── globals.css             # Global styles (Tailwind, CSS vars)
│
└── (site)/                 # Route group — shared header + footer
    ├── layout.jsx          # Site layout — Header + Footer
    ├── home/
    │   └── page.jsx        # Landing page
    └── developers/
        └── page.jsx        # Developer / API docs page
```

---

## Customisation

### Rename the brand
Search for `Civic Open` across all files and substitute your name.

### Add a feature section
Append to the `features` array in `app/(site)/home/page.jsx`:

```js
{
  badge: "BADGE",
  title: "Feature Name",
  description: "Short description.",
  cta: "Call to action",
  color: "bg-gradient-to-br from-blue-400 to-blue-700",
  imageRight: true,
}
```

### Add an API endpoint
Append to the `endpoints` array in `app/(site)/developers/page.jsx`:

```js
{ method: "POST", path: "/api/v1/endpoint", description: "What it does." }
```

---

## License

MIT — see [LICENSE](LICENSE)
