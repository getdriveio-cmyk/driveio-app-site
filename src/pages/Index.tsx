import { SEO, organizationStructuredData, websiteStructuredData, appStructuredData, localBusinessStructuredData, reviewStructuredData } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  // Sample reviews for social proof (replace with real data)
  const sampleReviews = [
    {
      author: "Sarah M.",
      rating: 5,
      reviewBody: "DriveIO made renting a car so easy! The app is intuitive and the transparent pricing is exactly what I needed.",
      datePublished: "2024-08-15"
    },
    {
      author: "Mike R.",
      rating: 5,
      reviewBody: "Best car sharing experience in Detroit. Fast booking, great cars, and the verified drivers give me peace of mind.",
      datePublished: "2024-08-20"
    },
    {
      author: "Jennifer L.",
      rating: 5,
      reviewBody: "Perfect for business trips. No hidden fees, clear insurance options, and the cars are always in great condition.",
      datePublished: "2024-08-25"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Car Rental Near Me - Rent a Car in Minutes | DriveIO"
        description="Find and rent cars near you instantly with DriveIO. Fast booking, transparent pricing, verified drivers. Available in Detroit Metro Area. Download the iOS app today!"
        canonical="https://driveio.app/"
        structuredData={[
          organizationStructuredData,
          websiteStructuredData,
          appStructuredData,
          localBusinessStructuredData,
          reviewStructuredData(sampleReviews)
        ]}
        keywords={[
          // Primary Keywords (High Volume)
          'car rental near me', 'rent a car', 'car sharing app', 'rental car app', 'car hire',
          // Secondary Keywords (Medium Volume)  
          'hourly car rental', 'daily car rental', 'weekend car rental', 'airport car rental', 'business car rental',
          // Long-tail Keywords (High Intent)
          'rent car for day trip Detroit', 'car sharing app for business travel', 'rental car app with insurance',
          'car rental app no deposit', 'rent car hourly Detroit airport', 'trust-first car sharing', 'verified driver car rental',
          // Local Keywords (Detroit Focus)
          'Detroit car rental', 'car rental Detroit airport', 'Detroit car sharing', 'Michigan car rental app',
          'Detroit metro car rental', 'car rental Michigan', 'Detroit area car rental',
          // Brand Keywords
          'DriveIO', 'DriveIO app', 'DriveIO car sharing', 'DriveIO rental'
        ]}
      />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-background text-foreground px-3 py-2 rounded">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
