import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact — DriveIO</title>
        <meta name="description" content="Get in touch with DriveIO for support, media, and partnership inquiries." />
      </Helmet>
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


