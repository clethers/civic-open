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

export const metadata = {
  title: "Civic Open",
  description:
    "An intelligent AI platform that simplifies how people access tools, information, and services.",
  openGraph: {
    title: "Civic Open — AI for Everyone",
    description:
      "An intelligent AI platform that simplifies how people access tools, information, and services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Civic Open — AI for Everyone",
    description:
      "An intelligent AI platform that simplifies how people access tools, information, and services.",
  },
};

export default function RootLayout({ children }) {
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
