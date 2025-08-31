import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Privacy = () => {
  const privacyStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "DriveIO Privacy Policy",
    "description": "Privacy policy and data handling practices for DriveIO car sharing platform",
    "mainEntity": {
      "@type": "Organization",
      "name": "DriveIO",
      "url": "https://driveio.app"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy"
        description="Learn how DriveIO collects, uses, and protects your personal information. Our privacy policy explains your rights and our data practices."
        canonical="https://driveio.app/privacy"
        structuredData={privacyStructuredData}
        keywords={['DriveIO privacy policy', 'data protection', 'personal information', 'privacy rights', 'data practices']}
      />
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
                <p className="mb-3">We collect information you provide directly to us, such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (name, email, phone number)</li>
                  <li>Identity verification documents (driver's license, government ID)</li>
                  <li>Payment information (processed securely by our payment partners)</li>
                  <li>Booking and trip information</li>
                  <li>Communications with our support team</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your bookings and payments</li>
                  <li>Verify your identity and eligibility</li>
                  <li>Communicate with you about your account and services</li>
                  <li>Ensure safety and security of our platform</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Information Sharing</h2>
                <p className="mb-3">We do not sell your personal information. We may share your information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With car owners to facilitate bookings</li>
                  <li>With service providers who help us operate our platform</li>
                  <li>When required by law or to protect rights and safety</li>
                  <li>With your consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information, including encryption, secure servers, and access controls.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
                <p>If you have questions about this privacy policy or our data practices, please contact us at <a href="mailto:privacy@driveio.app" className="underline">privacy@driveio.app</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;