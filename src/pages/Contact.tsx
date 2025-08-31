import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Contact = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact DriveIO",
    "description": "Get in touch with DriveIO for support, media, and partnership inquiries",
    "mainEntity": {
      "@type": "Organization",
      "name": "DriveIO",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "support@driveio.app",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "contactType": "media relations",
          "email": "press@driveio.app",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "contactType": "careers",
          "email": "careers@driveio.app",
          "availableLanguage": "English"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact"
        description="Get in touch with DriveIO for support, media, and partnership inquiries."
        canonical="https://driveio.app/contact"
        structuredData={contactStructuredData}
        keywords={['contact DriveIO', 'support', 'media inquiries', 'partnership', 'customer service']}
      />
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Contact</h1>
            <div className="space-y-4 text-muted-foreground">
              <p>Support: <a href="mailto:support@driveio.app" className="underline">support@driveio.app</a></p>
              <p>Media: <a href="mailto:press@driveio.app" className="underline">press@driveio.app</a></p>
              <p>Careers: <a href="mailto:careers@driveio.app" className="underline">careers@driveio.app</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;


