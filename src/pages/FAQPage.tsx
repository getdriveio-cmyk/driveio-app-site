import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { FAQ } from '@/components/sections/FAQ';

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>FAQ — DriveIO</title>
        <meta name="description" content="Answers to common questions about booking, payments, insurance, and getting support on DriveIO." />
      </Helmet>
      <Navigation />
      <main>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;


