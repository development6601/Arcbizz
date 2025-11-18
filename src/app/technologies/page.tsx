import type { Metadata } from "next";
import TechnologiesHero from "@/components/customComponents/technologies/TechnologiesHero";
import TechnologyCategories from "@/components/customComponents/technologies/TechnologyCategories";
import TechnologyStack from "@/components/customComponents/technologies/TechnologyStack";
import WhyOurStack from "@/components/customComponents/technologies/WhyOurStack";
import CTASection from "@/components/customComponents/landingPage/CTASection";

export const metadata: Metadata = {
  title: "Technologies - Arcbizz | Our Technology Stack & Expertise",
  description: "Explore Arcbizz's comprehensive technology stack. We leverage cutting-edge frontend, backend, mobile, cloud, and DevOps technologies to deliver innovative software solutions for businesses worldwide.",
  openGraph: {
    title: "Technologies - Arcbizz | Our Technology Stack & Expertise",
    description: "Explore Arcbizz's comprehensive technology stack. We leverage cutting-edge frontend, backend, mobile, cloud, and DevOps technologies to deliver innovative software solutions.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/technologies`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Technologies - Arcbizz Technology Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technologies - Arcbizz | Our Technology Stack & Expertise",
    description: "Explore Arcbizz's comprehensive technology stack. We leverage cutting-edge frontend, backend, mobile, cloud, and DevOps technologies to deliver innovative software solutions.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/technologies`,
  },
};

export default function TechnologiesPage() {
  return (
    <>
      <TechnologiesHero />
      <TechnologyCategories />
      <TechnologyStack />
      <WhyOurStack />
      <CTASection />
    </>
  );
}

