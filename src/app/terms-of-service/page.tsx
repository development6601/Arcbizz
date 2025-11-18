import type { Metadata } from "next";
import LegalPageLayout from "@/components/customComponents/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service - Arcbizz | Terms and Conditions",
  description: "Read Arcbizz's Terms of Service to understand the terms and conditions governing your use of our website and services.",
  openGraph: {
    title: "Terms of Service - Arcbizz",
    description: "Read Arcbizz's Terms of Service to understand the terms and conditions governing your use of our website and services.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/terms-of-service`,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout 
      title="Terms of Service" 
      lastUpdated="January 1, 2024"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">1. Agreement to Terms</h2>
          <p className="text-sm lg:text-lg">
            By accessing or using the Arcbizz website and services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">2. Use of Our Services</h2>
          <p className="text-sm lg:text-lg mb-3">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-sm lg:text-lg">
            <li>Use our services in any way that violates any applicable law or regulation</li>
            <li>Transmit any malicious code, viruses, or harmful data</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Interfere with or disrupt the integrity or performance of our services</li>
            <li>Use our services to infringe upon the rights of others</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">3. Intellectual Property</h2>
          <p className="text-sm lg:text-lg mb-3">
            All content, features, and functionality of our website and services, including but not limited to text, graphics, logos, images, and software, are owned by Arcbizz and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p className="text-sm lg:text-lg">
            You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use our content without our prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">4. User Accounts</h2>
          <p className="text-sm lg:text-lg mb-3">If you create an account with us, you are responsible for:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-sm lg:text-lg">
            <li>Maintaining the security of your account and password</li>
            <li>All activities that occur under your account</li>
            <li>Providing accurate and complete information</li>
            <li>Notifying us immediately of any unauthorized use</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">5. Service Availability</h2>
          <p className="text-sm lg:text-lg">
            We strive to ensure our services are available 24/7, but we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">6. Payment Terms</h2>
          <p className="text-sm lg:text-lg mb-3">For paid services:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-sm lg:text-lg">
            <li>Payment terms will be specified in individual service agreements</li>
            <li>All fees are non-refundable unless otherwise stated</li>
            <li>We reserve the right to change our pricing with prior notice</li>
            <li>Late payments may result in service suspension</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">7. Limitation of Liability</h2>
          <p className="text-sm lg:text-lg">
            To the maximum extent permitted by law, Arcbizz shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">8. Indemnification</h2>
          <p className="text-sm lg:text-lg">
            You agree to indemnify, defend, and hold harmless Arcbizz and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of our services or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">9. Termination</h2>
          <p className="text-sm lg:text-lg">
            We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including if you breach these Terms. Upon termination, your right to use our services will cease immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">10. Governing Law</h2>
          <p className="text-sm lg:text-lg" >
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Surat, Gujarat, India.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">11. Changes to Terms</h2>
          <p className="text-sm lg:text-lg">
            We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">12. Contact Information</h2>
          <p className="text-sm lg:text-lg mb-2">
            If you have any questions about these Terms of Service, please contact us:
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

