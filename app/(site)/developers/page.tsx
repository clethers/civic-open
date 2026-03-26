import Link from "next/link";

const endpoints = [
  {
    method: "POST",
    path: "/api/v1/chat",
    description: "Send a message to the AI Assistant and get a response.",
  },
  {
    method: "POST",
    path: "/api/v1/translate",
    description: "Translate text between supported multiple languages.",
  },
  {
    method: "POST",
    path: "/api/v1/identify",
    description: "Identify objects in an uploaded image.",
  },
  {
    method: "POST",
    path: "/api/v1/ocr",
    description: "Extract text from scanned documents or images.",
  },
  {
    method: "POST",
    path: "/api/v1/resume",
    description: "Generate a professional resume using AI.",
  },
  {
    method: "GET",
    path: "/api/v1/laws",
    description: "Retrieve laws and regulations.",
  },
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
          <div className="inline py-2 px-4 bg-blue-100 rounded-md text-sm font-bold text-blue-700 mb-6">
            DEVELOPERS
          </div>
          <h1 className="text-3xl md:text-[60px] font-bold leading-tight mb-6 max-w-3xl">
            Build with the Civic Open API
          </h1>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mb-10">
            Integrate AI-powered digital services into your applications.
            Access translation, chatbot, document extraction, identity
            verification, and more through our REST API.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button
              type="button"
              className="flex items-center gap-3 text-sm font-bold bg-gradient-to-r from-[#0094E7] via-[#0050E7] to-[#0040E7] text-white rounded-sm hover:opacity-90 py-3 px-6"
            >
              Request API Access
            </button>
            <button
              type="button"
              className="flex items-center gap-3 text-sm font-medium border border-gray-300 rounded-sm hover:bg-gray-50 py-3 px-6 transition-colors"
            >
              View Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="flex-1 flex flex-col items-center relative py-20 md:py-32">
        <div className="max-w-7xl w-full flex-1 flex flex-col px-5">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                step: "01",
                title: "Request Access",
                desc: "Submit your application to get API credentials for your project.",
              },
              {
                step: "02",
                title: "Get Your API Key",
                desc: "Receive your unique API key and authentication tokens via email.",
              },
              {
                step: "03",
                title: "Start Building",
                desc: "Use our SDKs and documentation to integrate Civic Open into your app.",
              },
            ].map((step) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="text-5xl font-bold text-blue-100 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* API Endpoints */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-[48px] font-bold mb-3">
              API Endpoints
            </h2>
            <p className="text-gray-500 mb-10 text-sm md:text-base">
              Base URL:{" "}
              <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">
                https://api.platform.example
              </code>
            </p>
            <div className="space-y-3">
              {endpoints.map((ep, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center gap-3 p-4 md:p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-md w-fit font-mono ${methodColors[ep.method]}`}
                  >
                    {ep.method}
                  </span>
                  <code className="text-sm font-mono text-gray-800 flex-1">
                    {ep.path}
                  </code>
                  <p className="text-gray-500 text-sm md:text-right md:max-w-xs">
                    {ep.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Code example */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-[48px] font-bold mb-10">
              Quick Start
            </h2>
            <div className="rounded-xl bg-slate-900 p-6 md:p-8 overflow-x-auto">
              <pre className="text-sm text-slate-300 font-mono leading-relaxed">
                <code>{`// Install the Civic Open SDK
npm install @civicopen/sdk

// Initialize the client
import { CivicOpen } from '@civicopen/sdk';

const client = new CivicOpen({
  apiKey: process.env.CIVICOPEN_API_KEY,
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

          {/* CTA */}
          <div className="bg-slate-900 rounded-2xl p-10 md:p-16 flex flex-col items-center text-center gap-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="text-slate-400 max-w-lg">
              Join the growing number of organizations and developers building
              smarter digital services with Civic Open.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <button
                type="button"
                className="flex items-center gap-3 text-sm font-bold bg-gradient-to-r from-[#0094E7] via-[#0050E7] to-[#0040E7] text-white rounded-sm hover:opacity-90 py-3 px-8"
              >
                Request API Access
              </button>
              <Link
                href="/home"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
