import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/content/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "I make AI feel like part of the product — not a demo taped to the side. Senior frontend engineer: design systems at Pipedrive, AI products via VNTRS, two startups of my own.",
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  keywords: [
    "Faizan Ejaz",
    "Mirza Faizan Ejaz",
    "Senior Frontend Engineer",
    "AI Integration",
    "AI Workflows",
    "Design Systems",
    "Component Libraries",
    "React",
    "TypeScript",
    "Product Engineer",
    "Hugging Face",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role}`,
    description:
      "I make AI feel like part of the product — not a demo taped to the side.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "I make AI feel like part of the product — not a demo taped to the side.",
    creator: "@mirzafaizanejaz",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#f5f1e8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          // Marks that JS is available before paint so reveal animations only
          // apply progressively. No-JS visitors keep fully visible content.
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="paper-grain min-h-full">
        <StructuredData />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
