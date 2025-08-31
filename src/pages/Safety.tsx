import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Safety = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Safety — DriveIO</title>
        <meta name="description" content="Safety is built into DriveIO: identity verification, secure payments, insurance options, and 24/7 support." />
      </Helmet>
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Safety at DriveIO</h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We’re a trust-first platform. From the moment you sign up to the moment you hand back the keys, we design safety into every step.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-2">Identity verification</h2>
                <p className="text-muted-foreground">We verify driver’s licenses and government IDs to help ensure every trip is taken by the right person.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Insurance options</h2>
                <p className="text-muted-foreground">Choose coverage levels during checkout. Policy terms and availability may vary by region.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Secure payments</h2>
                <p className="text-muted-foreground">Apple Pay and secure card processing. Sensitive data is handled by PCI‑compliant processors.</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Support</h2>
                <p className="text-muted-foreground">Help when you need it. Reach out at <a className="underline" href="mailto:support@driveio.app">support@driveio.app</a>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Safety;


