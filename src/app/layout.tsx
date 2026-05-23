import type { Metadata } from "next";
import { Manrope, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/business";
import { content } from "@/lib/content";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  metadataBase: new URL(business.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: content.metadata.title,
    description: content.metadata.description,
    url: business.url,
    siteName: business.name,
    images: [
      {
        url: content.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: business.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.metadata.title,
    description: content.metadata.description,
    images: [content.metadata.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured SEO Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${business.url}/#organization`,
        "name": business.name,
        "url": business.url,
        "logo": {
          "@type": "ImageObject",
          "url": `${business.url}/icon.png`,
          "caption": business.name
        },
        "sameAs": business.socials.map((s) => s.href)
      },
      {
        "@type": "LocalBusiness",
        "@id": `${business.url}/#localbusiness`,
        "name": business.name,
        "description": content.metadata.description,
        "url": business.url,
        "telephone": business.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": business.address
        },
        "image": `${business.url}/opengraph-image`,
        "sameAs": business.socials.map((s) => s.href)
      },
      {
        "@type": "WebSite",
        "@id": `${business.url}/#website`,
        "url": business.url,
        "name": business.name,
        "description": business.tagline,
        "publisher": {
          "@id": `${business.url}/#organization`
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} ${jetbrains.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
