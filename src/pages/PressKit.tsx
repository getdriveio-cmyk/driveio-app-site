import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const PressKit = () => {
  const pressKitStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "DriveIO Press Kit",
    "description": "Media resources and information about DriveIO car sharing platform",
    "mainEntity": {
      "@type": "Organization",
      "name": "DriveIO",
      "description": "Trust-first car sharing platform for local mobility",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Detroit",
        "addressRegion": "MI",
        "addressCountry": "US"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Press Kit"
        description="Media resources, company information, and press contacts for DriveIO. Learn about our mission to build the most trusted car sharing experience."
        canonical="https://driveio.app/press"
        structuredData={pressKitStructuredData}
        keywords={['DriveIO press kit', 'media resources', 'company information', 'car sharing press', 'DriveIO media']}
      />
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Press Kit</h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Media resources and company information for journalists and content creators covering DriveIO.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3">About DriveIO</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DriveIO is a trust-first car sharing platform that makes local mobility simple and trustworthy. We combine fast booking, fully transparent pricing, and verified drivers to create the most trusted car sharing experience.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Key Facts</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Founded in 2024 in Detroit, Michigan</li>
                  <li>Currently operating in the Detroit Metro Area</li>
                  <li>iOS app available on the App Store</li>
                  <li>Focus on trust, transparency, and safety</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Media Contact</h2>
                <p className="text-muted-foreground">For press inquiries, please contact <a href="mailto:press@driveio.app" className="underline">press@driveio.app</a></p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Assets</h2>
                <p className="text-muted-foreground">Logo and brand assets available upon request for approved media coverage.</p>
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


