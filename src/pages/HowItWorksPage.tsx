import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { HowItWorks } from '@/components/sections/HowItWorks';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;


