import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cookie Policy — DriveIO</title>
        <meta name="description" content="Learn how DriveIO uses cookies for essential functionality, analytics, and preferences." />
      </Helmet>
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-muted-foreground mb-6">We use cookies and similar technologies to run our Services and improve your experience.</p>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Types of cookies</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Essential — required for core functionality (security, login)</li>
                  <li>Preferences — remember your settings (e.g., theme)</li>
                  <li>Analytics — help us understand usage and improve performance</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Controls</h2>
                <p>You can control or block cookies in your browser settings. Some features may not work without essential cookies.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;


