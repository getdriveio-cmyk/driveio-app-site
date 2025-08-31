import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-4">Pricing</h1>
            <p className="text-muted-foreground">
              Transparent pricing with no surprises. Contact us for launch promotions and early access discounts.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;


