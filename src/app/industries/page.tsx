import type { Metadata } from "next";
import IndustryHero from "@/components/customComponents/industries/IndustryHero";
import IndustryList from "@/components/customComponents/industries/IndustryList";
import CTASection from "@/components/customComponents/landingPage/CTASection";
import { getAllIndustries } from "@/lib/data/industries-data";

export const metadata: Metadata = {
  title: "Industries - Arcbizz | Industry-Specific Solutions",
  description: "Explore Arcbizz's industry expertise. We deliver tailored technology solutions for E-Commerce, Healthcare, FinTech, and more. Discover how we transform businesses across various industries.",
  openGraph: {
    title: "Industries - Arcbizz | Industry-Specific Solutions",
    description: "Explore Arcbizz's industry expertise. We deliver tailored technology solutions for E-Commerce, Healthcare, FinTech, and more.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/industries`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arcbizz Industries - Industry-Specific Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries - Arcbizz | Industry-Specific Solutions",
    description: "Explore Arcbizz's industry expertise. We deliver tailored technology solutions for various industries.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/industries`,
  },
};

export default function IndustriesPage() {
  const industries = getAllIndustries();

  return (
    <>
      <IndustryHero />
      <IndustryList industries={industries} />
      <CTASection />
    </>
  );
}

