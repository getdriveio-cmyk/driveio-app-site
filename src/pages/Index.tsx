import { SEO, organizationStructuredData, websiteStructuredData, appStructuredData, localBusinessStructuredData } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Book local cars in minutes"
        description="DriveIO is a trust-first car sharing app. Fast booking, transparent pricing, verified drivers. iOS-only at launch."
        canonical="https://driveio.app/"
        structuredData={[
          organizationStructuredData,
          websiteStructuredData,
          appStructuredData,
          localBusinessStructuredData
        ]}
        keywords={['car sharing', 'DriveIO', 'trust-first', 'local cars', 'iOS app', 'Detroit', 'transparent pricing', 'verified drivers', 'Detroit car sharing', 'Michigan car rental']}
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
