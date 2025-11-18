import type { Metadata } from "next";
import LegalPageLayout from "@/components/customComponents/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy - Arcbizz | How We Use Cookies",
  description: "Learn about how Arcbizz uses cookies and similar tracking technologies on our website. Understand what cookies we use and how you can manage your preferences.",
  openGraph: {
    title: "Cookie Policy - Arcbizz",
    description: "Learn about how Arcbizz uses cookies and similar tracking technologies on our website.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/cookie-policy`,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/cookie-policy`,
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout 
      title="Cookie Policy" 
      lastUpdated="January 1, 2024"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">1. What Are Cookies?</h2>
          <p className="text-sm lg:text-lg">
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies allow websites to remember your actions and preferences over a period of time.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">2. How We Use Cookies</h2>
          <p className="text-sm lg:text-lg mb-3">Arcbizz uses cookies and similar tracking technologies to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-sm lg:text-lg">
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our website</li>
            <li>Improve our website's functionality and user experience</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Provide personalized content and advertisements</li>
            <li>Ensure website security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">3. Types of Cookies We Use</h2>
          
          <div className="mb-6">
            <h3 className="text-lg lg:text-xl font-semibold mb-3 text-foreground">Essential Cookies</h3>
            <p className="text-sm lg:text-lg mb-2">
              These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Purpose:</strong> These cookies cannot be disabled as they are essential for the website to work.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg lg:text-xl font-semibold mb-3 text-foreground">Analytics Cookies</h3>
            <p className="text-sm lg:text-lg mb-2">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Purpose:</strong> To analyze website usage and improve our services.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg lg:text-xl font-semibold mb-3 text-foreground">Functional Cookies</h3>
            <p className="text-sm lg:text-lg mb-2">
              These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, personalized features.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Purpose:</strong> To remember your preferences and provide a better user experience.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg lg:text-xl font-semibold mb-3 text-foreground">Marketing Cookies</h3>
            <p className="text-sm lg:text-lg mb-2">
              These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Purpose:</strong> To deliver personalized advertisements and measure marketing campaign performance.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">4. Third-Party Cookies</h2>
          <p className="text-sm lg:text-lg mb-3">
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics and deliver advertisements. These third parties may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-sm lg:text-lg">
            <li>Analytics providers (e.g., Google Analytics)</li>
            <li>Social media platforms</li>
            <li>Advertising networks</li>
            <li>Content delivery networks</li>
          </ul>
          <p className="text-sm lg:text-base">
            These third parties may use cookies to collect information about your online activities across different websites. We do not control these third-party cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">5. Managing Cookies</h2>
          <p className="text-sm lg:text-lg mb-3">You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of our website.</p>
          
          <div className="mb-4">
            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-foreground">Browser Settings</h3>
            <p className="text-sm lg:text-lg mb-2">You can control cookies through your browser settings. Here are links to instructions for popular browsers:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">6. Cookie Duration</h2>
          <p className="text-sm lg:text-lg mb-3">We use both session cookies and persistent cookies:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-sm lg:text-lg">
            <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser. They are used to maintain your session while you navigate our website.</li>
            <li><strong>Persistent Cookies:</strong> These cookies remain on your device for a set period or until you delete them. They help us remember your preferences and improve your experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">7. Do Not Track Signals</h2>
          <p className="text-sm lg:text-lg">
            Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. We do not currently respond to DNT browser signals.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">8. Updates to This Cookie Policy</h2>
          <p className="text-sm lg:text-lg">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-foreground">9. Contact Us</h2>
          <p className="text-sm lg:text-lg mb-2">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

