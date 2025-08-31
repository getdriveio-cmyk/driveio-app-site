import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';
import { Features } from '@/components/sections/Features';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Features — DriveIO</title>
        <meta name="description" content="Quick booking, transparent pricing, verified drivers, and secure payments — see what makes DriveIO different." />
      </Helmet>
      <Navigation />
      <main>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;


