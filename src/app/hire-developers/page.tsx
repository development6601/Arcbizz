import type { Metadata } from "next";
import HireDevelopersHero from "@/components/customComponents/hireDevelopers/HireDevelopersHero";
import DeveloperServices from "@/components/customComponents/hireDevelopers/DeveloperServices";
import HiringProcess from "@/components/customComponents/hireDevelopers/HiringProcess";
import HireForm from "@/components/customComponents/hireDevelopers/HireForm";
import CTASection from "@/components/customComponents/landingPage/CTASection";
import Testimonials from "@/components/customComponents/landingPage/Testimonials";

export const metadata: Metadata = {
  title: "Hire Developers - Arcbizz | Build Your Development Team",
  description: "Hire expert developers from Arcbizz. We provide skilled full-stack, frontend, backend, and mobile developers ready to join your team. Fast onboarding, flexible models, and ongoing support.",
  keywords: [
    "hire developers",
    "hire software developers",
    "hire web developers",
    "hire mobile developers",
    "remote developers",
    "dedicated developers",
    "development team",
    "software development services"
  ],
  openGraph: {
    title: "Hire Developers - Arcbizz | Build Your Development Team",
    description: "Hire expert developers from Arcbizz. We provide skilled developers ready to join your team. Fast onboarding, flexible models, and ongoing support.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/hire-developers`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hire Developers - Arcbizz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Developers - Arcbizz | Build Your Development Team",
    description: "Hire expert developers from Arcbizz. Fast onboarding, flexible models, and ongoing support.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/hire-developers`,
  },
};

export default function HireDevelopersPage() {
  return (
    <>
      <HireDevelopersHero />
      <DeveloperServices />
      <HiringProcess />
      <Testimonials />
      <HireForm />
      <CTASection />
    </>
  );
}

