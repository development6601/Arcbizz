import type { Metadata } from "next";
import Hero from "@/components/customComponents/landingPage/Hero";
import TruestedByClients from "@/components/customComponents/landingPage/TruestedByClients";
import UserStories from "@/components/customComponents/landingPage/UserStories";
import Testimonials from "@/components/customComponents/landingPage/Testimonials";
import Blog from "@/components/customComponents/landingPage/Blog";
import CTASection from "@/components/customComponents/landingPage/CTASection";
import ClientsSection from "@/components/customComponents/landingPage/ClientsSection";

export const metadata: Metadata = {
  title: "Home",
  description: "Arcbizz delivers cutting-edge technology solutions, web applications, and digital innovation. Discover our expertise in software development, case studies, and tech insights.",
  openGraph: {
    title: "Arcbizz - Technology Solutions & Innovation",
    description: "Arcbizz delivers cutting-edge technology solutions, web applications, and digital innovation.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com',
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
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsSection />
      <UserStories />
      <Testimonials />
      <Blog />
      <CTASection />
    </>
  );
}
