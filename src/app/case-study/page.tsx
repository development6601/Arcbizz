import type { Metadata } from "next";
import CaseStudyHero from "@/components/customComponents/caseStudy/CaseStudyHero";
import CaseStudyList from "@/components/customComponents/caseStudy/CaseStudyList";
import CTASection from "@/components/customComponents/landingPage/CTASection";
import { caseStudies } from "@/lib/data/case-studies-data";

export const metadata: Metadata = {
  title: "Case Studies - Arcbizz | Our Portfolio & Success Stories",
  description: "Explore our portfolio of successful projects and case studies. Discover how Arcbizz has helped businesses transform through innovative software solutions, web development, and digital innovation.",
  openGraph: {
    title: "Case Studies - Arcbizz | Our Portfolio & Success Stories",
    description: "Explore our portfolio of successful projects and case studies. Discover how Arcbizz has helped businesses transform through innovative software solutions.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/case-study`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arcbizz Case Studies - Portfolio & Success Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - Arcbizz | Our Portfolio & Success Stories",
    description: "Explore our portfolio of successful projects and case studies.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/case-study`,
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudyHero />
      <CaseStudyList caseStudies={caseStudies} />
      <CTASection />
    </>
  );
}

