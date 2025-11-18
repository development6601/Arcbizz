import type { Metadata } from "next";
import ApplyJobHero from "@/components/customComponents/applyForJob/ApplyJobHero";
import ApplicationProcess from "@/components/customComponents/applyForJob/ApplicationProcess";
import JobApplicationForm from "@/components/customComponents/applyForJob/JobApplicationForm";
import BenefitsPerks from "@/components/customComponents/careers/BenefitsPerks";
import CTASection from "@/components/customComponents/landingPage/CTASection";

export const metadata: Metadata = {
  title: "Apply for Job - Arcbizz | Join Our Team",
  description: "Apply for a position at Arcbizz. Join our innovative team of developers, designers, and innovators. Submit your application today and start your career with us.",
  keywords: [
    "apply for job",
    "careers",
    "job application",
    "work at Arcbizz",
    "join our team",
    "job openings",
    "employment opportunities"
  ],
  openGraph: {
    title: "Apply for Job - Arcbizz | Join Our Team",
    description: "Apply for a position at Arcbizz. Join our innovative team and start your career with us. Submit your application today.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/apply-for-job`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apply for Job - Arcbizz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for Job - Arcbizz | Join Our Team",
    description: "Apply for a position at Arcbizz. Join our innovative team and start your career with us.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/apply-for-job`,
  },
};

export default function ApplyForJobPage() {
  return (
    <>
      <ApplyJobHero />
      <ApplicationProcess />
      <BenefitsPerks />
      <JobApplicationForm />
      <CTASection />
    </>
  );
}

