import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Safety = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-4">Safety</h1>
            <p className="text-muted-foreground">
              We prioritize safety with verified drivers, secure payments, and 24/7 support.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Safety;


