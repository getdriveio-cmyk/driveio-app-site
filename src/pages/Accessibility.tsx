import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Accessibility = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-4">Accessibility</h1>
            <p className="text-muted-foreground">
              We are committed to making DriveIO accessible to everyone. If you encounter accessibility barriers, please contact support@driveio.app.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility;


