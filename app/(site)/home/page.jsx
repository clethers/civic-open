"use client";

import { useState } from "react";
import Link from "next/link";

const ArrowCircleIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    className="h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
  </svg>
);

const PlusIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400 h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MinusIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400 h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const BlueCTA = ({ children, className = "" }) => (
  <button
    type="button"
    className={`flex items-center gap-3 text-sm font-bold bg-gradient-to-r from-[#0094E7] via-[#0050E7] to-[#0040E7] text-white rounded-sm hover:opacity-90 py-2.5 px-4 ${className}`}
  >
    {children}
  </button>
);

const Badge = ({ children }) => (
  <div className="inline py-2 px-4 bg-gray-100 rounded-md text-sm font-bold text-xs md:text-sm">
    {children}
  </div>
);

const FeaturePlaceholder = ({ color, label, className = "" }) => (
  <div
    className={`rounded-2xl flex items-center justify-center ${color} ${className}`}
  >
    <span className="text-white/80 font-medium text-sm text-center px-4">
      {label}
    </span>
  </div>
);

const features = [
  {
    badge: "CHATBOT",
    title: "AI Assistant",
    description:
      "Got a question? AI Assistant is ready to help 24/7, guiding you through any task, providing answers, and ensuring you get what you need quickly.",
    cta: "Chat Now – Get Instant Support",
    color: "bg-gradient-to-br from-blue-400 to-blue-700",
    imageRight: false,
  },
  {
    badge: "AI-POWERED",
    title: "Translator",
    description:
      "Language should never be a barrier. With support for multiple languages, our Translator ensures every user can navigate digital services confidently.",
    cta: "Explore in Your Language",
    color: "bg-gradient-to-br from-purple-400 to-purple-700",
    imageRight: true,
  },
  {
    badge: "AI-POWERED",
    title: "Image Identifier",
    description:
      "Identify everyday objects and items using AI. This tool provides real-time information, making it easier to understand and categorize what's around you.",
    cta: "Discover Objects Around You",
    color: "bg-gradient-to-br from-teal-400 to-teal-700",
    imageRight: false,
  },
  {
    badge: "OCR",
    title: "Document Extractor",
    description:
      "Extract text from images and scanned documents with precision using OCR technology. Perfect for digitizing forms, receipts, or IDs with ease.",
    cta: "Scan and Extract Text Instantly",
    color: "bg-gradient-to-br from-orange-400 to-orange-700",
    imageRight: true,
  },
  {
    badge: "PROGRAMMING",
    title: "Coder/Programmer",
    description:
      "An AI-powered tool that assists in writing, debugging, and optimizing code for various programming languages, making development faster and more efficient.",
    cta: "Try AI-Powered Coding Now",
    color: "bg-gradient-to-br from-gray-600 to-gray-900",
    imageRight: false,
  },
  {
    badge: "SPEECH",
    title: "Speech Maker",
    description:
      "Create well-structured and impactful speeches for any occasion, from formal presentations to public addresses.",
    cta: "Generate Your Speech Today",
    color: "bg-gradient-to-br from-indigo-400 to-indigo-700",
    imageRight: true,
  },
  {
    badge: "LIVENESS",
    title: "Identity AI",
    description:
      "Ensure secure identity verification with AI-driven facial recognition that confirms real-time user presence.",
    cta: "Verify Securely with AI",
    color: "bg-gradient-to-br from-red-400 to-red-700",
    imageRight: false,
  },
  {
    badge: "ASSISTANCE",
    title: "Resume Builder",
    description:
      "Build professional resumes with AI assistance. Highlight your skills and experience effectively to stand out in the job market.",
    cta: "Build Your Resume Now",
    color: "bg-gradient-to-br from-green-400 to-green-700",
    imageRight: true,
  },
  {
    badge: "AI",
    title: "Open AI",
    description:
      "Leverage advanced AI capabilities for smarter automation, data analysis, and intelligent decision-making in digital operations.",
    cta: "Experience Smarter AI Solutions",
    color: "bg-gradient-to-br from-cyan-400 to-cyan-700",
    imageRight: false,
  },
  {
    badge: "LAWS",
    title: "Laws and Regulation",
    description:
      "Access laws, policies, and legal guidelines in one place to stay informed about rights and responsibilities.",
    cta: "Stay Informed on Legal Matters",
    color: "bg-gradient-to-br from-yellow-500 to-yellow-700",
    imageRight: true,
  },
  {
    badge: "TOURISM",
    title: "Tourism",
    description:
      "Discover top destinations, travel guides, and cultural insights to explore the beauty of the Philippines with ease.",
    cta: "Plan Your Next Adventure",
    color: "bg-gradient-to-br from-pink-400 to-pink-700",
    imageRight: false,
  },
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

function FaqItem({ question }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-[#F8F8F8] hover:bg-[#F5F5F5] rounded-md cursor-pointer"
      role="presentation"
    >
      <button
        className="p-3 md:p-5 md:px-7 flex items-center gap-5 w-full text-left"
        onClick={() => setOpen(!open)}
      >
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

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center relative">
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
          <div className="flex flex-col gap-10">
            <div
              className="md:h-[520px] w-full bg-gray-100 rounded-3xl flex flex-col justify-center items-center space-y-5 p-5"
              style={{
                background:
                  "linear-gradient(135deg, #e0f2fe 0%, #dbeafe 40%, #ede9fe 70%, #fce7f3 100%)",
              }}
            >
              <div className="flex items-center">
                {["👤", "👤", "👤", "→"].map((item, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white -mx-1.5 bg-white flex items-center justify-center text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="text-2xl md:text-[60px] font-medium leading-tight text-center px-5 md:px-28 lg:px-40 text-black">
                Your All-in-One Civic Open
              </div>

              <div className="text-sm text-center px-5 md:px-40 text-gray-600">
                An intelligent AI platform that simplifies how people access tools, information, and services.
              </div>

              <br className="hidden md:block" />

              <Link href="/developers">
                <button
                  type="button"
                  className="flex items-center gap-3 text-sm font-bold bg-gradient-to-r from-[#0094E7] via-[#0050E7] to-[#0040E7] text-white rounded-sm hover:opacity-90 p-5"
                >
                  <div>Get Started</div>
                  <ArrowCircleIcon />
                </button>
              </Link>
            </div>

            {/* App screenshots row */}
            <div className="grid sm:grid-cols-5 grid-cols-1 sm:gap-x-5 gap-y-5 sm:gap-y-0 pb-10">
              <div className="col-span-1 sm:gap-5 gap-2 justify-center sm:flex flex-col grid grid-cols-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className="h-20 w-full rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center"
                  >
                    <span className="text-blue-600 text-xs font-medium">
                      App {n}
                    </span>
                  </div>
                ))}
              </div>
              <div className="col-span-3 flex items-center justify-center">
                <div className="w-full h-64 md:h-full rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <span className="text-blue-500 font-semibold text-lg">
                    App Preview
                  </span>
                </div>
              </div>
              <div className="col-span-1 sm:gap-5 gap-2 justify-center sm:flex flex-col grid grid-cols-2">
                {[6, 7, 8, 9, 10].map((n) => (
                  <div
                    key={n}
                    className="h-20 w-full rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center"
                  >
                    <span className="text-purple-600 text-xs font-medium">
                      Feature {n}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solving Challenges */}
      <div
        id="features"
        className="flex-1 flex flex-col items-center relative py-20 md:py-40 bg-[#F3F7FA]"
      >
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="space-y-5 md:space-y-10">
              <div className="text-2xl md:text-[60px] leading-tight font-bold text-center md:max-w-[600px]">
                Solving Challenges
              </div>
              <div className="text-sm md:text-base text-center md:max-w-[550px]">
                Digital services should be accessible, efficient, and
                inclusive. This platform is designed to overcome some of the most
                common barriers users face when engaging with online
                services, making it easier to access vital tools and
                information.
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {[
                {
                  title: "Expanding Language Accessibility",
                  desc: "The Translator tool provides real-time translation support across multiple languages, allowing users to interact with digital services in the language they prefer.",
                },
                {
                  title: "Providing Clear Information and Guidance",
                  desc: "AI Assistant acts as a virtual assistant available 24/7 to answer questions, provide guidance, and direct users to the right resources.",
                },
                {
                  title: "Ensuring Access to 24/7 Support",
                  desc: "Our services are available anytime, anywhere, offering 24/7 access to translation, document processing, and resume-building tools in one comprehensive solution.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="rounded-lg md:rounded-xl border border-gray-100 shadow-sm bg-white text-card-foreground md:w-[350px] md:h-[250px]"
                >
                  <div className="flex flex-col p-3.5 md:p-5 space-y-3 md:space-y-5">
                    <div className="tracking-tight text-sm md:text-[22px] font-bold leading-snug">
                      {card.title}
                    </div>
                    <div className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {card.desc}
                    </div>
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
            <div className="space-y-5 md:space-y-10">
              <div className="text-2xl md:text-[60px] leading-tight font-bold text-center md:max-w-[600px] text-white">
                Key Advantages
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 w-full">
              {[
                {
                  title: "Accessibility",
                  desc: "Multi-language support and AI assistance for inclusivity.",
                },
                {
                  title: "Efficiency",
                  desc: "Automated document handling, verification, and service navigation.",
                },
                {
                  title: "Transparency",
                  desc: "Easy access to updated laws and regulations.",
                },
                {
                  title: "Innovation",
                  desc: "Cutting-edge AI applications tailored for organization and user needs.",
                },
              ].map((adv, i) => (
                <div
                  key={i}
                  className="border border-gray-700 p-6 flex flex-col"
                >
                  <div className="mb-2">
                    <div className="h-4 w-8 bg-blue-500 rounded-sm" />
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-sm md:text-base font-bold leading-snug text-white">
                      {adv.title}
                    </h5>
                    <p className="text-xs md:text-sm leading-relaxed text-slate-400">
                      {adv.desc}
                    </p>
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
            <div className="text-2xl md:text-[60px] leading-tight font-bold text-center md:max-w-[600px]">
              Platform Features
            </div>
            <div className="text-sm md:text-base text-center md:max-w-[550px] mx-auto">
              Enhancing everyday experiences with AI-powered solutions
              for a seamless and efficient user experience.
            </div>
          </div>
        </div>
      </div>

      {/* Feature sections */}
      {features.map((feature, i) => (
        <div
          key={i}
          className="flex-1 flex flex-col items-center relative py-10 md:py-20"
        >
          <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
            <div
              className={`flex flex-col ${
                feature.imageRight ? "md:flex-row" : "md:flex-row-reverse"
              } items-center justify-center gap-10 md:gap-14`}
            >
              <div className="flex flex-col items-center md:items-start space-y-5 max-w-md">
                <Badge>{feature.badge}</Badge>
                <div className="text-center md:text-left space-y-3">
                  <div className="text-2xl md:text-[48px] font-bold leading-tight">
                    {feature.title}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {feature.description}
                  </div>
                </div>
                <br />
                <BlueCTA>{feature.cta}</BlueCTA>
              </div>

              <FeaturePlaceholder
                color={feature.color}
                label={feature.title}
                className="md:h-[380px] md:w-[440px] h-48 w-full order-first md:order-none"
              />
            </div>
          </div>
        </div>
      ))}

      {/* FAQs */}
      <div className="flex-1 flex flex-col items-center relative py-20 md:py-40">
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
          <div className="flex flex-col" id="faqs">
            <div className="text-center space-y-3 md:space-y-5">
              <div className="text-2xl md:text-5xl font-medium">
                Frequently Asked Question
              </div>
              <div className="text-gray-500 text-sm font-light">
                Let&#39;s Clear Up Any Confusion
              </div>
            </div>
            <br />
            <br />
            <div className="space-y-3 w-full md:w-[900px] md:mx-auto">
              {faqs.map((q, i) => (
                <FaqItem key={i} question={q} />
              ))}
            </div>

            <div id="contact" />
            <br />
            <br />
            <br />

            {/* Contact CTA */}
            <div className="bg-[#020617] p-5 sm:p-10 rounded-2xl md:w-[900px] md:mx-auto flex flex-col items-center gap-10">
              <div className="flex items-center">
                {["👤", "👤", "👤", "→"].map((item, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white -mx-1.5 bg-black flex items-center justify-center text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="text-white text-center space-y-3">
                <div className="text-xl font-bold">Still have questions?</div>
                <div>
                  Can&#39;t find the answer you&#39;re looking for? Enter your
                  email address, We&#39;ll get in touch with you ASAP
                </div>
              </div>
              <form
                className="flex flex-col md:flex-row gap-5 w-full"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex-1">
                  <div className="grid gap-1 group w-full">
                    <div className="px-3 text-left rounded-md flex items-center gap-3 border h-10 text-sm border-gray-700 bg-gray-900 focus-within:border-gray-300 transition-colors">
                      <input
                        className="outline-none flex w-full bg-transparent text-white placeholder:text-gray-500 text-sm"
                        id="email"
                        placeholder="Enter your email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="justify-center whitespace-nowrap rounded-md text-sm font-medium bg-white text-black hover:bg-gray-200 h-10 py-2 px-12 w-full flex items-center gap-2 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started CTA banner */}
      <div className="flex-1 flex flex-col items-center relative py-20 pt-0 md:py-40 md:pt-0">
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
          <div className="flex flex-col gap-10">
            <div
              className="md:h-[520px] w-full bg-gray-100 rounded-3xl flex flex-col justify-center items-center space-y-5 p-5"
              style={{
                background:
                  "linear-gradient(135deg, #e0f2fe 0%, #dbeafe 40%, #ede9fe 70%, #fce7f3 100%)",
              }}
            >
              <div className="text-2xl md:text-[60px] font-bold leading-tight text-center px-5 max-w-xl">
                Get Started Today!
              </div>
              <div className="text-lg text-center px-5 max-w-xl text-gray-700">
                Deploy as a standalone app or integrate into your existing
                platforms. Smarter, faster, and more user-centric digital services.
              </div>
              <br className="hidden md:block" />
              <Link href="/developers">
                <button
                  type="button"
                  className="flex items-center gap-3 text-sm font-bold bg-gradient-to-r from-[#0094E7] via-[#0050E7] to-[#0040E7] text-white rounded-sm hover:opacity-90 p-5"
                >
                  <div>Get Started</div>
                  <ArrowCircleIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
