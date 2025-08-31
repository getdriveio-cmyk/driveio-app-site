import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            <p className="text-muted-foreground mb-4">
              Email us at <a href="mailto:support@driveio.app" className="text-primary underline">support@driveio.app</a>
            </p>
            <p className="text-muted-foreground">
              Media or partnership inquiries: <a href="mailto:press@driveio.app" className="text-primary underline">press@driveio.app</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;


