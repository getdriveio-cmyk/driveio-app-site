import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Accessibility = () => {
  const accessibilityStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "DriveIO Accessibility",
    "description": "Accessibility features and commitment for DriveIO car sharing platform",
    "mainEntity": {
      "@type": "Organization",
      "name": "DriveIO",
      "url": "https://driveio.app"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Accessibility"
        description="DriveIO is committed to making our platform accessible to everyone. Learn about our accessibility features and commitment to inclusive design."
        canonical="https://driveio.app/accessibility"
        structuredData={accessibilityStructuredData}
        keywords={['DriveIO accessibility', 'inclusive design', 'accessibility features', 'WCAG compliance', 'accessible car sharing']}
      />
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Accessibility</h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              DriveIO is committed to making our platform accessible to everyone. We believe that car sharing should be available to people of all abilities.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3">Our Commitment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're working to ensure our website and mobile app meet accessibility standards and provide an inclusive experience for all users.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Accessibility Features</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Keyboard navigation support</li>
                  <li>Screen reader compatibility</li>
                  <li>High contrast options</li>
                  <li>Alternative text for images</li>
                  <li>Clear, readable typography</li>
                  <li>Consistent navigation structure</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Standards</h2>
                <p className="text-muted-foreground">
                  We're working toward WCAG 2.1 AA compliance and continuously improving our accessibility features based on user feedback and testing.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Feedback</h2>
                <p className="text-muted-foreground">
                  We welcome feedback on accessibility. If you encounter any issues or have suggestions, please contact us at <a href="mailto:accessibility@driveio.app" className="underline">accessibility@driveio.app</a>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Ongoing Improvements</h2>
                <p className="text-muted-foreground">
                  Accessibility is an ongoing priority. We regularly review and update our platform to improve the experience for all users.
                </p>
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


