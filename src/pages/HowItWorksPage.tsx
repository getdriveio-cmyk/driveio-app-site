import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { HowItWorks } from '@/components/sections/HowItWorks';

const HowItWorksPage = () => {
  const howItWorksStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How DriveIO Works",
    "description": "Step-by-step guide to using DriveIO car sharing platform",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Find Your Car",
        "text": "Browse available vehicles in your area with transparent pricing and photos."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Book & Pay",
        "text": "Reserve your car with secure payment processing and optional insurance."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Pick Up",
        "text": "Meet your verified driver at the agreed location with your ID ready."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Drive & Return",
        "text": "Enjoy your trip and return the car to the same location when finished."
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="How It Works"
        description="Book a car in minutes: find, reserve, pick up, and return. Simple steps to get you on the road."
        canonical="https://driveio.app/how-it-works"
        structuredData={howItWorksStructuredData}
        keywords={['how DriveIO works', 'car sharing process', 'book car steps', 'DriveIO booking', 'car rental process']}
      />
      <Navigation />
      <main>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;


