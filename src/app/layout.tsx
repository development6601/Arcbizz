import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomLayout from "@/components/customComponents/layout/CustomLayout";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'),
  title: {
    default: "Arcbizz - Technology Solutions & Innovation",
    template: "%s | Arcbizz"
  },
  description: "Arcbizz delivers cutting-edge technology solutions, web applications, and digital innovation. Explore our case studies, blog insights, and transformative tech services.",
  keywords: ["technology solutions", "web development", "digital innovation", "software development", "case studies", "tech blog"],
  authors: [{ name: "Arcbizz" }],
  creator: "Arcbizz",
  publisher: "Arcbizz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com',
    siteName: "Arcbizz",
    title: "Arcbizz - Technology Solutions & Innovation",
    description: "Arcbizz delivers cutting-edge technology solutions, web applications, and digital innovation. Explore our case studies, blog insights, and transformative tech services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arcbizz - Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcbizz - Technology Solutions & Innovation",
    description: "Arcbizz delivers cutting-edge technology solutions, web applications, and digital innovation.",
    images: ["/og-image.jpg"],
    creator: "@arcbizz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com',
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

function generateOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Arcbizz',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Arcbizz delivers cutting-edge technology solutions, web applications, and digital innovation.',
    sameAs: [
      // Add your social media profiles here
      // 'https://twitter.com/arcbizz',
      // 'https://linkedin.com/company/arcbizz',
      // 'https://github.com/arcbizz',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      // Add contact information when available
    },
  }
}

function generateWebsiteSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Arcbizz',
    url: baseUrl,
    description: 'Arcbizz delivers cutting-edge technology solutions, web applications, and digital innovation.',
    publisher: {
      '@type': 'Organization',
      name: 'Arcbizz',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <html lang="en" className={inter.variable} >
      <body className={`antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CustomLayout>
            {children}
          </CustomLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
