import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const PressKit = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Press Kit — DriveIO</title>
        <meta name="description" content="Access DriveIO logos, brand guidelines, and press contacts." />
      </Helmet>
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Press Kit</h1>
            <p className="text-muted-foreground mb-6">
              For media inquiries and brand assets, use the resources below. For anything else, email <a className="underline" href="mailto:press@driveio.app">press@driveio.app</a>.
            </p>
            <div className="space-y-4">
              <div className="p-6 rounded-xl border card-gradient">
                <h2 className="text-xl font-semibold mb-2">Logos</h2>
                <p className="text-muted-foreground">Primary and monochrome logos available upon request.</p>
              </div>
              <div className="p-6 rounded-xl border card-gradient">
                <h2 className="text-xl font-semibold mb-2">Screenshots</h2>
                <p className="text-muted-foreground">High‑resolution app screens will be provided at launch.</p>
              </div>
              <div className="p-6 rounded-xl border card-gradient">
                <h2 className="text-xl font-semibold mb-2">Brand guidelines</h2>
                <p className="text-muted-foreground">Usage, spacing, and color specifications available with assets.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PressKit;


