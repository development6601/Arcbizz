import type { Metadata } from "next";
import AboutHero from "@/components/customComponents/aboutUs/AboutHero";
import OurStory from "@/components/customComponents/aboutUs/OurStory";
import MissionValues from "@/components/customComponents/aboutUs/MissionValues";
import TeamSection from "@/components/customComponents/aboutUs/TeamSection";
import TruestedByClients from "@/components/customComponents/landingPage/TruestedByClients";
import Testimonials from "@/components/customComponents/landingPage/Testimonials";
import CTASection from "@/components/customComponents/landingPage/CTASection";

export const metadata: Metadata = {
  title: "About Us - Arcbizz | Our Story, Mission & Team",
  description: "Learn about Arcbizz, a leading software development company founded in 2023. Discover our mission, values, team, and our journey of delivering innovative technology solutions.",
  openGraph: {
    title: "About Us - Arcbizz | Our Story, Mission & Team",
    description: "Learn about Arcbizz, a leading software development company founded in 2023. Discover our mission, values, team, and our journey of delivering innovative technology solutions.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/about-us`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Arcbizz - Our Story, Mission & Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Arcbizz | Our Story, Mission & Team",
    description: "Learn about Arcbizz, a leading software development company founded in 2023. Discover our mission, values, team, and our journey of delivering innovative technology solutions.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/about-us`,
  },
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionValues />
      <TeamSection />
      <TruestedByClients />
      <Testimonials />
      <CTASection />
    </>
  );
}