import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Accessibility = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Accessibility — DriveIO</title>
        <meta name="description" content="DriveIO is committed to accessibility. Learn about our approach and how to contact us with feedback." />
      </Helmet>
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Accessibility at DriveIO</h1>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We aim to meet WCAG 2.1 AA guidelines across our website and iOS app. If you encounter any barriers, we want to hear from you.
            </p>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Our approach</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Semantic HTML and ARIA where appropriate</li>
                  <li>Keyboard navigability and visible focus states</li>
                  <li>Color contrast that meets WCAG guidelines</li>
                  <li>Support for reduced motion preferences</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Contact</h2>
                <p>Share feedback at <a className="underline" href="mailto:support@driveio.app">support@driveio.app</a>. We typically respond within 48 hours.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility;


