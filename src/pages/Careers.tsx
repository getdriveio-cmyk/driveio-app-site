import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Careers = () => {
  const careersStructuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Join DriveIO Team",
    "description": "Help us build the most trusted car sharing experience",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "DriveIO",
      "sameAs": "https://driveio.app"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Detroit",
        "addressRegion": "MI",
        "addressCountry": "US"
      }
    },
    "employmentType": "FULL_TIME",
    "datePosted": "2024-01-01"
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Careers"
        description="Join DriveIO and help build the most trusted car sharing experience. We're hiring passionate people who care about safety, transparency, and user experience."
        canonical="https://driveio.app/careers"
        structuredData={careersStructuredData}
        keywords={['DriveIO careers', 'car sharing jobs', 'Detroit tech jobs', 'DriveIO hiring', 'mobility jobs']}
      />
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Careers at DriveIO</h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We're building the most trusted car sharing experience. That means we need people who care about safety, transparency, and making complex things simple.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3">What we're looking for</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Passion for user experience and safety</li>
                  <li>Experience with iOS development and mobile apps</li>
                  <li>Understanding of trust and verification systems</li>
                  <li>Interest in mobility and local transportation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Open roles</h2>
                <p className="text-muted-foreground">We're currently hiring for iOS developers and product designers. More roles coming soon.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Get in touch</h2>
                <p className="text-muted-foreground">Send your resume and a note about why you're interested to <a href="mailto:careers@driveio.app" className="underline">careers@driveio.app</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;


