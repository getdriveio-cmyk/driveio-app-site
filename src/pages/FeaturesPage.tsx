import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { Features } from '@/components/sections/Features';

const FeaturesPage = () => {
  const featuresStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "DriveIO Features",
    "description": "Key features of the DriveIO car sharing platform",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Quick Booking",
        "description": "Find and reserve your perfect car in just minutes, not hours."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Transparent Pricing",
        "description": "See itemized fees, deposits, and taxes upfront. No hidden surprises."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Verified Drivers",
        "description": "Every driver goes through ID and license verification for your safety."
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Protected Trips",
        "description": "Choose from comprehensive insurance options during checkout."
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Local & Convenient",
        "description": "Airport-friendly pickup locations and neighborhood accessibility."
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Secure Payments",
        "description": "Apple Pay integration and secure payment processing you can trust."
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Features"
        description="Quick booking, transparent pricing, verified drivers, and secure payments — see what makes DriveIO different."
        canonical="https://driveio.app/features"
        structuredData={featuresStructuredData}
        keywords={['car sharing features', 'quick booking', 'transparent pricing', 'verified drivers', 'secure payments', 'DriveIO features']}
      />
      <Navigation />
      <main>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;


