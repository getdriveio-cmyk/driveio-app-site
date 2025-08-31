import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Safety = () => {
  const safetyStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "DriveIO Safety",
    "description": "Safety features and security measures for the DriveIO car sharing platform",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Safety Features",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Identity Verification",
          "description": "We verify driver's licenses and government IDs to help ensure every trip is taken by the right person."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Insurance Options",
          "description": "Choose coverage levels during checkout. Policy terms and availability may vary by region."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Secure Payments",
          "description": "Apple Pay and secure card processing. Sensitive data is handled by PCI‑compliant processors."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "24/7 Support",
          "description": "Help when you need it. Reach out at support@driveio.app."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Safety"
        description="Safety is built into DriveIO: identity verification, secure payments, insurance options, and 24/7 support."
        canonical="https://driveio.app/safety"
        structuredData={safetyStructuredData}
        keywords={['car sharing safety', 'identity verification', 'secure payments', 'insurance options', 'DriveIO safety', 'trust-first']}
      />
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Safety at DriveIO</h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We're a trust-first platform. From the moment you sign up to the moment you hand back the keys, we design safety into every step.
            </p>

            <div className="space-y-8 mb-10">
              <div>
                <h2 className="text-xl font-semibold mb-2">Identity verification</h2>
                <p className="text-muted-foreground">We verify driver's licenses and government IDs to help ensure every trip is taken by the right person.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Insurance options</h2>
                <p className="text-muted-foreground">Choose coverage levels during checkout. Policy terms and availability may vary by region.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Secure payments</h2>
                <p className="text-muted-foreground">Apple Pay and secure card processing. Sensitive data is handled by PCI‑compliant processors.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Support</h2>
                <p className="text-muted-foreground">Help when you need it. Reach out at <a className="underline" href="mailto:support@driveio.app">support@driveio.app</a>.</p>
              </div>
            </div>
            <div className="p-6 rounded-xl border bg-success-light">
              <h2 className="text-xl font-semibold text-success mb-2">Trust & Safety</h2>
              <p className="text-muted-foreground">Every feature is designed with your safety in mind. From verification to insurance, we're building the most trusted car sharing experience.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Safety;


