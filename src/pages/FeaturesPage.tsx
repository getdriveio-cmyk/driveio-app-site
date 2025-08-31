import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { Features } from '@/components/sections/Features';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;


