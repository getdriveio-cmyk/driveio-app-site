import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { FAQ } from '@/components/sections/FAQ';

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;


