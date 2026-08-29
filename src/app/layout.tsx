import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import { siteConfig } from "../content/site";

const spaceGrotesk = localFont({
  src: "../fonts/space-grotesk.woff2",
  variable: "--font-heading",
  display: "swap"
});

const manrope = localFont({
  src: "../fonts/manrope.woff2",
  variable: "--font-body",
  display: "swap"
});

const jetbrainsMono = localFont({
  src: "../fonts/jetbrains-mono.ttf",
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Fateha Hossain`
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  keywords: [
    "Fateha Hossain",
    "Health Informatics",
    "Machine Learning",
    "Software Engineering",
    "Explainable AI",
    "SDN",
    "ResiliNet",
    "ComputePulse",
    "Backend Developer",
    "Research Assistant"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: siteConfig.title
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "Research Assistant & Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Health Informatics Research Lab"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Daffodil International University"
  },
  knowsAbout: [
    "Health Informatics",
    "Explainable Artificial Intelligence",
    "Machine Learning",
    "Software-Defined Networking",
    "Backend Software Engineering"
  ],
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-color)] text-[var(--text-main)] transition-colors duration-200 antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col bg-tech-grid">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
