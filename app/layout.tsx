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
  metadataBase: new URL("https://tracekit.dev"),
  title: "Tracekit — Observability for webhooks and requests",
  description:
    "Tracekit helps teams trace requests, inspect webhooks, and replay failures without guesswork.",
  openGraph: {
    title: "Tracekit — Observability for webhooks and requests",
    description:
      "Tracekit stitches payloads, retries, and logs into a single timeline so developers can debug production issues fast.",
    url: "https://tracekit.dev",
    siteName: "Tracekit",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tracekit.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tracekit dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracekit — Observability for webhooks and requests",
    description:
      "Trace every request, inspect each webhook, and replay failures instantly.",
    images: ["https://tracekit.dev/og-image.png"],
  },
  keywords: [
    "Tracekit",
    "observability",
    "webhook debugging",
    "request tracing",
    "developer tools",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
