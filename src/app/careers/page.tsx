import type { Metadata } from "next";
import CareerHero from "@/components/customComponents/careers/CareerHero";
import WhyWorkWithUs from "@/components/customComponents/careers/WhyWorkWithUs";
import OpenPositions from "@/components/customComponents/careers/OpenPositions";
import BenefitsPerks from "@/components/customComponents/careers/BenefitsPerks";
import LifeAtCompany from "@/components/customComponents/careers/LifeAtCompany";
import Testimonials from "@/components/customComponents/landingPage/Testimonials";
import CareerCTA from "@/components/customComponents/careers/CareerCTA";

export const metadata: Metadata = {
  title: "Careers at Arcbizz | Work With Us | Join Our Team",
  description: "Explore career opportunities and join our innovative team at Arcbizz. We're looking for passionate developers, designers, and innovators to help us build the future of digital innovation. Discover open positions, company culture, and benefits.",
  openGraph: {
    title: "Careers at Arcbizz | Work With Us | Join Our Team",
    description: "Explore career opportunities and join our innovative team at Arcbizz. We're looking for passionate developers, designers, and innovators to help us build the future of digital innovation.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/careers`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Arcbizz - Join Our Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Arcbizz | Work With Us | Join Our Team",
    description: "Explore career opportunities and join our innovative team at Arcbizz. We're looking for passionate developers, designers, and innovators to help us build the future of digital innovation.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/careers`,
  },
};

export default function CareersPage() {
  // Job Posting Schema for SEO
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arcbizz",
    "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com',
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/logo.png`,
    "sameAs": [
      // Add social media links if available
    ],
    "jobPosting": [
      {
        "@type": "JobPosting",
        "title": "Frontend Developer",
        "description": "We're looking for a talented Frontend Developer to join our team and help build cutting-edge web applications.",
        "employmentType": "FULL_TIME",
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Surat",
            "addressCountry": "IN"
          }
        },
        "workHours": "Full-time",
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": "Competitive",
            "maxValue": "Competitive"
          }
        }
      },
      {
        "@type": "JobPosting",
        "title": "Product Designer",
        "description": "Join our design team to create beautiful, user-centered digital experiences that make a difference.",
        "employmentType": "FULL_TIME",
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Surat",
            "addressCountry": "IN"
          }
        },
        "workHours": "Full-time"
      },
      {
        "@type": "JobPosting",
        "title": "Backend Developer",
        "description": "We're seeking an experienced Backend Developer to build scalable, secure, and efficient server-side solutions.",
        "employmentType": "FULL_TIME",
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Surat",
            "addressCountry": "IN"
          }
        },
        "workHours": "Full-time"
      },
      {
        "@type": "JobPosting",
        "title": "Marketing Lead",
        "description": "Lead our marketing efforts and help grow Arcbizz's presence in the technology solutions market.",
        "employmentType": "FULL_TIME",
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Surat",
            "addressCountry": "IN"
          }
        },
        "workHours": "Full-time"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <CareerHero />
      <WhyWorkWithUs />
      <BenefitsPerks />
      <OpenPositions />
      <LifeAtCompany />
      <Testimonials />
      <CareerCTA />
    </>
  );
}

