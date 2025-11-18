import type { Metadata } from "next";
import ContactHero from "@/components/customComponents/contactUs/ContactHero";
import ContactForm from "@/components/customComponents/contactUs/ContactForm";
import ContactInfo from "@/components/customComponents/contactUs/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us - Arcbizz | Get in Touch",
  description: "Contact Arcbizz for your software development needs. Reach out via email, phone, or our contact form. We're here to help turn your ideas into reality.",
  openGraph: {
    title: "Contact Us - Arcbizz | Get in Touch",
    description: "Contact Arcbizz for your software development needs. Reach out via email, phone, or our contact form. We're here to help turn your ideas into reality.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/contact-us`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Arcbizz - Get in Touch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Arcbizz | Get in Touch",
    description: "Contact Arcbizz for your software development needs. Reach out via email, phone, or our contact form. We're here to help turn your ideas into reality.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/contact-us`,
  },
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </>
  );
}

