import type { Metadata } from "next";
import ServiceHero from "@/components/customComponents/services/ServiceHero";
import ServiceList from "@/components/customComponents/services/ServiceList";
import CTASection from "@/components/customComponents/landingPage/CTASection";
import { getAllServices } from "@/lib/data/service-data";
import Testimonials from "@/components/customComponents/landingPage/Testimonials";

export const metadata: Metadata = {
  title: "Services - Arcbizz | Custom Software Development & Digital Solutions",
  description: "Explore our comprehensive range of IT services including custom software development, web & mobile app development, UI/UX design, API development, cloud solutions, and more. Trusted by startups, SMEs, and enterprises worldwide.",
  keywords: [
    "custom software development",
    "web development services",
    "mobile app development",
    "UI/UX design services",
    "API development",
    "cloud solutions",
    "DevOps services",
    "IT consulting",
    "software development company",
    "digital transformation"
  ],
  openGraph: {
    title: "Services - Arcbizz | Custom Software Development & Digital Solutions",
    description: "Explore our comprehensive range of IT services. Custom software development, web & mobile apps, UI/UX design, cloud solutions, and more.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/services`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arcbizz Services - Custom Software Development & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Arcbizz | Custom Software Development & Digital Solutions",
    description: "Explore our comprehensive range of IT services. Custom software development, web & mobile apps, UI/UX design, cloud solutions, and more.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/services`,
  },
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <ServiceHero />
      <ServiceList services={services} />
      <Testimonials />
      <CTASection />
    </>
  );
}

