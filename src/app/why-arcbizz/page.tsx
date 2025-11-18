import type { Metadata } from "next";
import WhyArcbizzHero from "@/components/customComponents/whyArcbizz/WhyArcbizzHero";
import KeyBenefits from "@/components/customComponents/whyArcbizz/KeyBenefits";
import CompetitiveAdvantages from "@/components/customComponents/whyArcbizz/CompetitiveAdvantages";
import OurApproach from "@/components/customComponents/whyArcbizz/OurApproach";
import SuccessMetrics from "@/components/customComponents/whyArcbizz/SuccessMetrics";
import TruestedByClients from "@/components/customComponents/landingPage/TruestedByClients";
import Testimonials from "@/components/customComponents/landingPage/Testimonials";
import CTASection from "@/components/customComponents/landingPage/CTASection";

export const metadata: Metadata = {
  title: "Why Arcbizz? - Choose Us for Your Technology Solutions",
  description: "Discover why businesses choose Arcbizz. We deliver fast, secure, scalable solutions with expert teams, 24/7 support, and proven results. Learn what makes us different.",
  keywords: [
    "why choose Arcbizz",
    "Arcbizz advantages",
    "software development company benefits",
    "technology partner",
    "why Arcbizz",
    "best software development company",
    "reliable tech partner"
  ],
  openGraph: {
    title: "Why Arcbizz? - Choose Us for Your Technology Solutions",
    description: "Discover why businesses choose Arcbizz. Fast delivery, expert teams, 24/7 support, and proven results. Learn what makes us different.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/why-arcbizz`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Why Arcbizz - Choose Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Arcbizz? - Choose Us for Your Technology Solutions",
    description: "Discover why businesses choose Arcbizz. Fast delivery, expert teams, 24/7 support, and proven results.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/why-arcbizz`,
  },
};

export default function WhyArcbizzPage() {
  return (
    <>
      <WhyArcbizzHero />
      <KeyBenefits />
      <CompetitiveAdvantages />
      <OurApproach />
      <TruestedByClients />
      <SuccessMetrics />
      <Testimonials />
      <CTASection />
    </>
  );
}

