import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pricing — DriveIO</title>
        <meta name="description" content="Transparent pricing with all fees upfront. No surprises—just fair rates and flexible insurance options." />
      </Helmet>
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Pricing</h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We show you all costs upfront—rental rate, taxes, fees, and any deposit hold—so you always know exactly what you’ll pay.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-6 rounded-xl border card-gradient">
                <h2 className="text-xl font-semibold mb-2">Base rate</h2>
                <p className="text-muted-foreground">Daily price determined by the vehicle and dates you choose.</p>
              </div>
              <div className="p-6 rounded-xl border card-gradient">
                <h2 className="text-xl font-semibold mb-2">Taxes & fees</h2>
                <p className="text-muted-foreground">Itemized at checkout. No hidden add‑ons.</p>
              </div>
              <div className="p-6 rounded-xl border card-gradient">
                <h2 className="text-xl font-semibold mb-2">Insurance options</h2>
                <p className="text-muted-foreground">Choose the coverage level that fits your comfort and budget.</p>
              </div>
              <div className="p-6 rounded-xl border card-gradient">
                <h2 className="text-xl font-semibold mb-2">Deposits</h2>
                <p className="text-muted-foreground">A temporary hold may apply during your trip window. Released after return per policy.</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-2">Savings</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Lower weekday rates vs. weekends</li>
                <li>Early bookings often get better selection and pricing</li>
                <li>Launch promotions — join TestFlight for early discounts</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;


