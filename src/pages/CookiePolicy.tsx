import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const CookiePolicy = () => {
  const cookiePolicyStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "DriveIO Cookie Policy",
    "description": "Information about how DriveIO uses cookies and similar technologies",
    "mainEntity": {
      "@type": "Organization",
      "name": "DriveIO",
      "url": "https://driveio.app"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Cookie Policy"
        description="Learn how DriveIO uses cookies and similar technologies to improve your experience and provide essential functionality."
        canonical="https://driveio.app/cookies"
        structuredData={cookiePolicyStructuredData}
        keywords={['DriveIO cookie policy', 'cookies usage', 'tracking technologies', 'privacy cookies', 'website cookies']}
      />
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">What Are Cookies?</h2>
                <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience and essential functionality.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Cookies</h2>
                <p className="mb-3">We use cookies for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Essential functionality (login, preferences)</li>
                  <li>Performance and analytics</li>
                  <li>Security and fraud prevention</li>
                  <li>Improving user experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-foreground">Essential Cookies</h3>
                    <p>Required for basic website functionality. These cannot be disabled.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Analytics Cookies</h3>
                    <p>Help us understand how visitors use our website to improve performance.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Preference Cookies</h3>
                    <p>Remember your settings and preferences for a personalized experience.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Managing Cookies</h2>
                <p>You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Cookies</h2>
                <p>Some cookies are set by third-party services we use, such as analytics providers. These are subject to their respective privacy policies.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Updates to This Policy</h2>
                <p>We may update this cookie policy from time to time. Check back periodically for the latest information.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
                <p>Questions about our cookie policy? Contact us at <a href="mailto:privacy@driveio.app" className="underline">privacy@driveio.app</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;


