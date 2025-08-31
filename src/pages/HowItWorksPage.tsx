import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { HowItWorks } from '@/components/sections/HowItWorks';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>How it works — DriveIO</title>
        <meta name="description" content="Search local cars, verify your ID, and checkout securely. Get on the road in minutes." />
      </Helmet>
      <Navigation />
      <main>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;


