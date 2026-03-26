# AI Platform — Full Source Prompt

Recreate this Next.js 16 project exactly by creating the following files.

## Setup

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```

---

## `app/globals.css`

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

---

## `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Platform",
  description:
    "An intelligent AI assistant that simplifies interactions with public services.",
  openGraph: {
    title: "Your All-in-One AI Platform",
    description:
      "An intelligent AI assistant that simplifies interactions with public services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your All-in-One AI Platform",
    description:
      "An intelligent AI assistant that simplifies interactions with public services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

---

## `app/page.tsx`

```tsx
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/home");
}
```

---

## `app/(site)/layout.tsx`

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "Features", href: "#features" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
    { label: "Developers", href: "/developers" },
  ];

  return (
    <div className="flex-1 flex flex-col items-center relative">
      <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
        <div className="flex items-center gap-3 py-7">
          <div className="flex flex-1">
            <Link href="/home" className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="h-7 w-7 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <span className="font-bold text-lg text-gray-900">
                  AI<span className="text-blue-600"> Platform</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-0.5"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:text-gray-900 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-md transition-colors">
                Request Access
              </button>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md">
                Request Access
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1B1B1B] py-20 px-5 flex flex-col text-sm">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-white mx-auto text-center md:text-left max-w-7xl w-full">
        {/* Official seal placeholder */}
        <div className="flex flex-col items-center md:items-start">
          <div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-blue-900 flex items-center justify-center">
            <span className="text-white text-xs text-center font-medium px-2">
              Official Seal
            </span>
          </div>
        </div>

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-1.5">
            <div className="h-5 w-5 rounded-sm bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <span className="font-bold text-white">
              AI<span className="text-blue-400"> Platform</span>
            </span>
          </div>
          <br />
          <div className="text-gray-400">Developed by [Agency]</div>
          <div className="text-gray-400">Copyright © 2024 AI Platform</div>
          <div className="text-gray-400">All Rights Reserved</div>
        </div>

        {/* About Us */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xs font-bold">ABOUT US</div>
          <br />
          <div className="space-y-2 text-gray-400">
            <div>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
            <div>
              <Link href="/policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
            <div>
              <button
                onClick={() =>
                  document
                    .getElementById("faqs")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-white transition-colors"
              >
                FAQs
              </button>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xs font-bold">FOLLOW US</div>
          <br />
          <div className="flex items-center gap-4 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Developed By */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xs font-bold">DEVELOPED BY</div>
          <br />
          <div className="h-20 w-20 rounded-full bg-blue-800 flex items-center justify-center">
            <span className="text-white text-xs font-bold text-center px-2">
              [Agency]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
```

---

## `app/(site)/home/page.tsx`

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const ArrowCircleIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
  </svg>
);

const PlusIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MinusIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const BlueCTA = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <button type="button" className={`flex items-center gap-3 text-sm font-bold bg-gradient-to-r from-[#0094E7] via-[#0050E7] to-[#0040E7] text-white rounded-sm hover:opacity-90 py-2.5 px-4 ${className}`}>
    {children}
  </button>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline py-2 px-4 bg-gray-100 rounded-md text-sm font-bold text-xs md:text-sm">{children}</div>
);

const FeaturePlaceholder = ({ color, label, className = "" }: { color: string; label: string; className?: string }) => (
  <div className={`rounded-2xl flex items-center justify-center ${color} ${className}`}>
    <span className="text-white/80 font-medium text-sm text-center px-4">{label}</span>
  </div>
);

const features = [
  { badge: "CHATBOT", title: "AI Assistant", description: "Got a question? AI Assistant AI is ready to help 24/7, guiding you through public services, providing answers, and ensuring you get what you need quickly.", cta: "Chat Now – Get Instant Support", color: "bg-gradient-to-br from-blue-400 to-blue-700", imageRight: false },
  { badge: "AI-POWERED", title: "Translator", description: "Language should never be a barrier. With support for multiple Philippine languages, our Translator ensures every citizen can navigate public services confidently.", cta: "Explore in Your Language", color: "bg-gradient-to-br from-purple-400 to-purple-700", imageRight: true },
  { badge: "AI-POWERED", title: "Image Identifier", description: "Identify everyday objects and items using AI. This tool provides real-time information, making it easier to understand and categorize what's around you.", cta: "Discover Objects Around You", color: "bg-gradient-to-br from-teal-400 to-teal-700", imageRight: false },
  { badge: "OCR", title: "Document Extractor", description: "Extract text from images and scanned documents with precision using OCR technology. Perfect for digitizing forms, receipts, or IDs with ease.", cta: "Scan and Extract Text Instantly", color: "bg-gradient-to-br from-orange-400 to-orange-700", imageRight: true },
  { badge: "PROGRAMMING", title: "Coder/Programmer", description: "An AI-powered tool that assists in writing, debugging, and optimizing code for various programming languages, making development faster and more efficient.", cta: "Try AI-Powered Coding Now", color: "bg-gradient-to-br from-gray-600 to-gray-900", imageRight: false },
  { badge: "SPEECH", title: "Speech Maker", description: "Create well-structured and impactful speeches for any occasion, from formal presentations to public addresses.", cta: "Generate Your Speech Today", color: "bg-gradient-to-br from-indigo-400 to-indigo-700", imageRight: true },
  { badge: "LIVENESS", title: "Identity AI", description: "Ensure secure identity verification with AI-driven facial recognition that confirms real-time user presence.", cta: "Verify Securely with AI", color: "bg-gradient-to-br from-red-400 to-red-700", imageRight: false },
  { badge: "ASSISTANCE", title: "Resume Builder", description: "Build professional resumes with AI assistance. Highlight your skills and experience effectively to stand out in the job market.", cta: "Build Your Resume Now", color: "bg-gradient-to-br from-green-400 to-green-700", imageRight: true },
  { badge: "AI", title: "Open AI", description: "Leverage advanced AI capabilities for smarter automation, data analysis, and intelligent decision-making in digital operations.", cta: "Experience Smarter AI Solutions", color: "bg-gradient-to-br from-cyan-400 to-cyan-700", imageRight: false },
  { badge: "LAWS", title: "Laws and Regulation", description: "Access national and local laws, policies, and legal guidelines in one place to stay informed about rights and responsibilities.", cta: "Stay Informed on Legal Matters", color: "bg-gradient-to-br from-yellow-500 to-yellow-700", imageRight: true },
  { badge: "TOURISM", title: "Tourism", description: "Discover top destinations, travel guides, and cultural insights to explore the beauty of the Philippines with ease.", cta: "Plan Your Next Adventure", color: "bg-gradient-to-br from-pink-400 to-pink-700", imageRight: false },
];

const faqs = [
  "What is this platform, and how does it benefit me?",
  "How can I use AI Assistant?",
  "What languages does the Translator support?",
  "How does the Resume Builder work?",
  "What is the document scanner, and what documents can it process?",
  "Is my information safe when using the platform?",
  "Can I use the platform services without an internet connection?",
];

function FaqItem({ question }: { question: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#F8F8F8] hover:bg-[#F5F5F5] rounded-md cursor-pointer" role="presentation">
      <button className="p-3 md:p-5 md:px-7 flex items-center gap-5 w-full text-left" onClick={() => setOpen(!open)}>
        <div className="flex-1 font-medium text-sm md:text-lg">{question}</div>
        <div>{open ? <MinusIcon /> : <PlusIcon />}</div>
      </button>
      {open && (
        <div className="px-7 pb-5 text-sm text-gray-500">
          For more information about this topic, please contact our support team.
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const [email, setEmail] = useState("");
  const heroBg = "linear-gradient(135deg, #e0f2fe 0%, #dbeafe 40%, #ede9fe 70%, #fce7f3 100%)";

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center relative">
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
          <div className="flex flex-col gap-10">
            <div className="md:h-[520px] w-full bg-gray-100 rounded-3xl flex flex-col justify-center items-center space-y-5 p-5" style={{ background: heroBg }}>
              <div className="flex items-center">
                {["👤", "👤", "👤", "→"].map((item, i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white -mx-1.5 bg-white flex items-center justify-center text-sm">{item}</div>
                ))}
              </div>
              <div className="text-2xl md:text-[60px] font-medium leading-tight text-center px-5 md:px-28 lg:px-40 text-black">
                Your All-in-One AI Platform
              </div>
              <div className="text-sm text-center px-5 md:px-40 text-gray-600">
                An intelligent AI assistant that simplifies interactions with public services.
              </div>
              <br className="hidden md:block" />
              <Link href="/developers">
                <button type="button" className="flex items-center gap-3 text-sm font-bold bg-gradient-to-r from-[#0094E7] via-[#0050E7] to-[#0040E7] text-white rounded-sm hover:opacity-90 p-5">
                  <div>Get Started</div><ArrowCircleIcon />
                </button>
              </Link>
            </div>

            {/* App screenshots row */}
            <div className="grid sm:grid-cols-5 grid-cols-1 sm:gap-x-5 gap-y-5 sm:gap-y-0 pb-10">
              <div className="col-span-1 sm:gap-5 gap-2 justify-center sm:flex flex-col grid grid-cols-2">
                {[1,2,3,4,5].map((n) => (
                  <div key={n} className="h-20 w-full rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-blue-600 text-xs font-medium">App {n}</span>
                  </div>
                ))}
              </div>
              <div className="col-span-3 flex items-center justify-center">
                <div className="w-full h-64 md:h-full rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <span className="text-blue-500 font-semibold text-lg">App Preview</span>
                </div>
              </div>
              <div className="col-span-1 sm:gap-5 gap-2 justify-center sm:flex flex-col grid grid-cols-2">
                {[6,7,8,9,10].map((n) => (
                  <div key={n} className="h-20 w-full rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                    <span className="text-purple-600 text-xs font-medium">Feature {n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solving Challenges */}
      <div id="features" className="flex-1 flex flex-col items-center relative py-20 md:py-40 bg-[#F3F7FA]">
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="space-y-5 md:space-y-10">
              <div className="text-2xl md:text-[60px] leading-tight font-bold text-center md:max-w-[600px]">Solving Challenges</div>
              <div className="text-sm md:text-base text-center md:max-w-[550px]">
                Public services should be accessible, efficient, and inclusive. This platform is designed to overcome some of the most common barriers citizens face when engaging with public systems, making it easier to access vital services and information.
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {[
                { title: "Expanding Language Accessibility", desc: "The Translator tool provides real-time translation support across multiple Philippine languages, allowing citizens to interact with public services in the language they prefer." },
                { title: "Providing Clear Information and Guidance", desc: "AI Assistant acts as a virtual assistant available 24/7 to answer questions, provide guidance, and direct users to the right resources." },
                { title: "Ensuring Access to 24/7 Support", desc: "Our services are available anytime, anywhere, offering 24/7 access to translation, document processing, and resume-building tools in one comprehensive solution." },
              ].map((card, i) => (
                <div key={i} className="rounded-lg md:rounded-xl border border-gray-100 shadow-sm bg-white text-card-foreground md:w-[350px] md:h-[250px]">
                  <div className="flex flex-col p-3.5 md:p-5 space-y-3 md:space-y-5">
                    <div className="tracking-tight text-sm md:text-[22px] font-bold leading-snug">{card.title}</div>
                    <div className="text-gray-500 text-xs md:text-sm leading-relaxed">{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Advantages */}
      <div className="flex-1 flex flex-col items-center relative pt-20 md:pt-40 bg-white">
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
          <div className="flex flex-col items-center justify-center gap-10 bg-slate-900 p-10 rounded-xl">
            <div className="text-2xl md:text-[60px] leading-tight font-bold text-center md:max-w-[600px] text-white">Key Advantages</div>
            <div className="grid grid-cols-1 md:grid-cols-4 w-full">
              {[
                { title: "Accessibility", desc: "Multi-language support and AI assistance for inclusivity." },
                { title: "Efficiency", desc: "Automated document handling, verification, and service navigation." },
                { title: "Transparency", desc: "Easy access to updated laws and regulations." },
                { title: "Innovation", desc: "Cutting-edge AI applications tailored for agency and citizen needs." },
              ].map((adv, i) => (
                <div key={i} className="border border-gray-700 p-6 flex flex-col">
                  <div className="mb-2"><div className="h-4 w-8 bg-blue-500 rounded-sm" /></div>
                  <div className="space-y-3">
                    <h5 className="text-sm md:text-base font-bold leading-snug text-white">{adv.title}</h5>
                    <p className="text-xs md:text-sm leading-relaxed text-slate-400">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Platform Features title */}
      <div className="flex-1 flex flex-col items-center relative py-20 md:py-40">
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
          <div className="space-y-5 md:space-y-10 mx-auto mb-5 sm:mb-20">
            <div className="text-2xl md:text-[60px] leading-tight font-bold text-center md:max-w-[600px]">Platform Features</div>
            <div className="text-sm md:text-base text-center md:max-w-[550px] mx-auto">
              Enhancing digital public services with AI-powered solutions for a seamless and efficient user experience.
            </div>
          </div>
        </div>
      </div>

      {/* Feature sections */}
      {features.map((feature, i) => (
        <div key={i} className="flex-1 flex flex-col items-center relative py-10 md:py-20">
          <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
            <div className={`flex flex-col ${feature.imageRight ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-center gap-10 md:gap-14`}>
              <div className="flex flex-col items-center md:items-start space-y-5 max-w-md">
                <Badge>{feature.badge}</Badge>
                <div className="text-center md:text-left space-y-3">
                  <div className="text-2xl md:text-[48px] font-bold leading-tight">{feature.title}</div>
                  <div className="text-gray-600 text-sm md:text-base">{feature.description}</div>
                </div>
                <br />
                <BlueCTA>{feature.cta}</BlueCTA>
              </div>
              <FeaturePlaceholder color={feature.color} label={feature.title} className="md:h-[380px] md:w-[440px] h-48 w-full order-first md:order-none" />
            </div>
          </div>
        </div>
      ))}

      {/* FAQs */}
      <div className="flex-1 flex flex-col items-center relative py-20 md:py-40">
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
          <div className="flex flex-col" id="faqs">
            <div className="text-center space-y-3 md:space-y-5">
              <div className="text-2xl md:text-5xl font-medium">Frequently Asked Question</div>
              <div className="text-gray-500 text-sm font-light">Let&#39;s Clear Up Any Confusion</div>
            </div>
            <br /><br />
            <div className="space-y-3 w-full md:w-[900px] md:mx-auto">
              {faqs.map((q, i) => <FaqItem key={i} question={q} />)}
            </div>
            <div id="contact" />
            <br /><br /><br />
            {/* Contact CTA */}
            <div className="bg-[#020617] p-5 sm:p-10 rounded-2xl md:w-[900px] md:mx-auto flex flex-col items-center gap-10">
              <div className="flex items-center">
                {["👤","👤","👤","→"].map((item, i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white -mx-1.5 bg-black flex items-center justify-center text-sm">{item}</div>
                ))}
              </div>
              <div className="text-white text-center space-y-3">
                <div className="text-xl font-bold">Still have questions?</div>
                <div>Can&#39;t find the answer you&#39;re looking for? Enter your email address, We&#39;ll get in touch with you ASAP</div>
              </div>
              <form className="flex flex-col md:flex-row gap-5 w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-1">
                  <div className="px-3 rounded-md flex items-center gap-3 border h-10 text-sm border-gray-700 bg-gray-900 focus-within:border-gray-300 transition-colors">
                    <input className="outline-none flex w-full bg-transparent text-white placeholder:text-gray-500 text-sm" id="email" placeholder="Enter your email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <button type="submit" className="whitespace-nowrap rounded-md text-sm font-medium bg-white text-black hover:bg-gray-200 h-10 py-2 px-12 flex items-center justify-center transition-colors">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started CTA banner */}
      <div className="flex-1 flex flex-col items-center relative py-20 pt-0 md:py-40 md:pt-0">
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
          <div className="flex flex-col gap-10">
            <div className="md:h-[520px] w-full bg-gray-100 rounded-3xl flex flex-col justify-center items-center space-y-5 p-5" style={{ background: heroBg }}>
              <div className="text-2xl md:text-[60px] font-bold leading-tight text-center px-5 max-w-xl">Get Started Today!</div>
              <div className="text-lg text-center px-5 max-w-xl text-gray-700">
                This platform can be deployed as a standalone app and can also be integrated into partner agency platforms. By adopting this solution, agencies help ensure that public services are smarter, faster, and more citizen-centric.
              </div>
              <br className="hidden md:block" />
              <Link href="/developers">
                <button type="button" className="flex items-center gap-3 text-sm font-bold bg-gradient-to-r from-[#0094E7] via-[#0050E7] to-[#0040E7] text-white rounded-sm hover:opacity-90 p-5">
                  <div>Get Started</div><ArrowCircleIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## `app/(site)/developers/page.tsx`

```tsx
import Link from "next/link";

const endpoints = [
  { method: "POST", path: "/api/v1/chat", description: "Send a message to the AI Assistant and get a response." },
  { method: "POST", path: "/api/v1/translate", description: "Translate text between supported Philippine languages." },
  { method: "POST", path: "/api/v1/identify", description: "Identify objects in an uploaded image." },
  { method: "POST", path: "/api/v1/ocr", description: "Extract text from scanned documents or images." },
  { method: "POST", path: "/api/v1/resume", description: "Generate a professional resume using AI." },
  { method: "GET", path: "/api/v1/laws", description: "Retrieve national and local laws and regulations." },
];

const methodColors: Record<string, string> = {
  GET: "bg-green-100 text-green-700",
  POST: "bg-blue-100 text-blue-700",
  PUT: "bg-yellow-100 text-yellow-700",
  DELETE: "bg-red-100 text-red-700",
};

export default function DevelopersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center relative py-20 md:py-32 bg-[#F3F7FA]">
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5 items-center text-center">
          <div className="inline py-2 px-4 bg-blue-100 rounded-md text-sm font-bold text-blue-700 mb-6">DEVELOPERS</div>
          <h1 className="text-3xl md:text-[60px] font-bold leading-tight mb-6 max-w-3xl">Build with the AI Platform API</h1>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mb-10">
            Integrate AI-powered public services into your applications. Access translation, chatbot, document extraction, identity verification, and more through our REST API.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button type="button" className="flex items-center gap-3 text-sm font-bold bg-gradient-to-r from-[#0094E7] via-[#0050E7] to-[#0040E7] text-white rounded-sm hover:opacity-90 py-3 px-6">Request API Access</button>
            <button type="button" className="flex items-center gap-3 text-sm font-medium border border-gray-300 rounded-sm hover:bg-gray-50 py-3 px-6 transition-colors">View Documentation</button>
          </div>
        </div>
      </div>

      {/* Getting Started + Endpoints + Code */}
      <div className="flex-1 flex flex-col items-center relative py-20 md:py-32">
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { step: "01", title: "Request Access", desc: "Submit your application to get API credentials for your project." },
              { step: "02", title: "Get Your API Key", desc: "Receive your unique API key and authentication tokens via email." },
              { step: "03", title: "Start Building", desc: "Use our SDKs and documentation to integrate AI Platform into your app." },
            ].map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-5xl font-bold text-blue-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-2xl md:text-[48px] font-bold mb-3">API Endpoints</h2>
            <p className="text-gray-500 mb-10 text-sm md:text-base">
              Base URL: <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">https://api.platform.example</code>
            </p>
            <div className="space-y-3">
              {endpoints.map((ep, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center gap-3 p-4 md:p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md w-fit font-mono ${methodColors[ep.method]}`}>{ep.method}</span>
                  <code className="text-sm font-mono text-gray-800 flex-1">{ep.path}</code>
                  <p className="text-gray-500 text-sm md:text-right md:max-w-xs">{ep.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl md:text-[48px] font-bold mb-10">Quick Start</h2>
            <div className="rounded-xl bg-slate-900 p-6 md:p-8 overflow-x-auto">
              <pre className="text-sm text-slate-300 font-mono leading-relaxed">
                <code>{`// Install the AI Platform SDK
npm install @platform/sdk

// Initialize the client
import { PlatformAI } from '@platform/sdk';

const client = new PlatformAI({
  apiKey: process.env.PLATFORM_API_KEY,
});

// Chat with the AI Assistant
const response = await client.chat.send({
  message: 'How do I renew my passport?',
  language: 'en',
});

console.log(response.answer);
// → "To renew your passport, visit the DFA website..."`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-10 md:p-16 flex flex-col items-center text-center gap-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white">Ready to get started?</h2>
            <p className="text-slate-400 max-w-lg">Join the growing number of agencies and developers building smarter public services with AI Platform.</p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <button type="button" className="flex items-center gap-3 text-sm font-bold bg-gradient-to-r from-[#0094E7] via-[#0050E7] to-[#0040E7] text-white rounded-sm hover:opacity-90 py-3 px-8">Request API Access</button>
              <Link href="/home" className="text-sm text-slate-400 hover:text-white transition-colors">← Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
