import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>DriveIO — Book local cars in minutes (iOS)</title>
        <meta name="description" content="DriveIO is a trust-first car sharing app. Fast booking, transparent pricing, verified drivers." />
        <meta property="og:title" content="DriveIO — Book local cars in minutes (iOS)" />
        <meta property="og:description" content="Fast booking, transparent pricing, verified drivers." />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DriveIO",
          "url": "https://driveio.app/",
          "logo": "https://driveio.app/favicon.ico",
          "sameAs": []
        }`}</script>
      </Helmet>
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
