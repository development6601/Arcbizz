import type { Metadata } from "next";
import LegalPageLayout from "@/components/customComponents/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy - Arcbizz | How We Protect Your Data",
  description: "Read Arcbizz's Privacy Policy to understand how we collect, use, and protect your personal information. We are committed to protecting your privacy and data security.",
  openGraph: {
    title: "Privacy Policy - Arcbizz",
    description: "Read Arcbizz's Privacy Policy to understand how we collect, use, and protect your personal information.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/privacy-policy`,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="January 1, 2024"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
          <p className="text-sm lg:text-lg">
            Arcbizz ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
          <p className="text-sm lg:text-lg mb-3">We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-sm lg:text-lg">
            <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and other contact information you provide when contacting us or using our services.</li>
            <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and store certain information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
          <p className="text-sm lg:text-lg mb-3">We use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-sm lg:text-lg">
            <li>To provide, maintain, and improve our services</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send you marketing communications (with your consent)</li>
            <li>To analyze usage patterns and improve user experience</li>
            <li>To detect, prevent, and address technical issues</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">4. Data Sharing and Disclosure</h2>
          <p className="text-sm lg:text-lg mb-3">We do not sell your personal information. We may share your information only in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-sm lg:text-lg">
            <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">5. Data Security</h2>
          <p className="text-sm lg:text-lg">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">6. Your Rights</h2>
          <p className="text-sm lg:text-lg mb-3">Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-sm lg:text-lg">
            <li>Right to access your personal data</li>
            <li>Right to rectify inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">7. Cookies</h2>
          <p className="text-sm lg:text-lg">
            We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. For more information, please see our <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">8. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">10. Contact Us</h2>
          <p className="mb-2">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none space-y-1 text-sm lg:text-lg">
            <li><strong>Email:</strong> <a href="mailto:info@arcbizz.com" className="text-primary hover:underline">info@arcbizz.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+918758027188" className="text-primary hover:underline">+91 87580 27188</a></li>
            <li><strong>Address:</strong> C2 / 514-515, Pragati IT Park, Opp. AR Mall, Mota Varachha, Surat, Gujarat 394105, India</li>
          </ul>
        </section>
      </div>
    </LegalPageLayout>
  );
}

