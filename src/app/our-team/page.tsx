import type { Metadata } from "next";
import TeamHero from "@/components/customComponents/team/TeamHero";
import TeamList from "@/components/customComponents/team/TeamList";
import TeamCulture from "@/components/customComponents/team/TeamCulture";
import TeamStats from "@/components/customComponents/team/TeamStats";
import TeamTestimonials from "@/components/customComponents/team/TeamTestimonials";
import CTASection from "@/components/customComponents/landingPage/CTASection";

export const metadata: Metadata = {
  title: "Our Team - Arcbizz | Meet the Talented Minds",
  description: "Meet the talented team behind Arcbizz. We're a diverse group of passionate developers, designers, and innovators committed to transforming businesses through cutting-edge technology solutions.",
  openGraph: {
    title: "Our Team - Arcbizz | Meet the Talented Minds",
    description: "Meet the talented team behind Arcbizz. We're a diverse group of passionate developers, designers, and innovators committed to transforming businesses through cutting-edge technology solutions.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/our-team`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arcbizz Team - Meet the Talented Minds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team - Arcbizz | Meet the Talented Minds",
    description: "Meet the talented team behind Arcbizz. We're a diverse group of passionate developers, designers, and innovators committed to transforming businesses through cutting-edge technology solutions.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/our-team`,
  },
};

export default function OurTeamPage() {
  return (
    <>
      <TeamHero />
      <TeamList />
      <TeamCulture />
      <TeamStats />
      <TeamTestimonials />
      <CTASection />
    </>
  );
}

