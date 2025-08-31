import { SEO } from '@/components/SEO';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/sections/Footer';

const Terms = () => {
  const termsStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "DriveIO Terms of Service",
    "description": "Terms of service and user agreement for DriveIO car sharing platform",
    "mainEntity": {
      "@type": "Organization",
      "name": "DriveIO",
      "url": "https://driveio.app"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Terms of Service"
        description="Read DriveIO's terms of service and user agreement. Learn about your rights, responsibilities, and our platform policies."
        canonical="https://driveio.app/terms"
        structuredData={termsStructuredData}
        keywords={['DriveIO terms of service', 'user agreement', 'platform policies', 'terms and conditions', 'user rights']}
      />
      <Navigation />
      <main>
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Acceptance of Terms</h2>
                <p>By using DriveIO's services, you agree to these terms and conditions. If you don't agree, please don't use our platform.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Eligibility</h2>
                <p className="mb-3">To use DriveIO, you must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be at least 21 years old</li>
                  <li>Have a valid driver's license</li>
                  <li>Pass our identity verification process</li>
                  <li>Have a valid payment method</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Service Description</h2>
                <p>DriveIO connects car owners with people who need temporary access to vehicles. We facilitate bookings, payments, and provide support services.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">User Responsibilities</h2>
                <p className="mb-3">As a user, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and truthful information</li>
                  <li>Treat vehicles with care and respect</li>
                  <li>Return vehicles on time and in good condition</li>
                  <li>Follow all traffic laws and safety guidelines</li>
                  <li>Report any issues or accidents immediately</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Payment Terms</h2>
                <p>All fees are charged at the time of booking. You authorize us to charge your payment method for the total amount, including any additional charges that may apply.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Cancellation Policy</h2>
                <p>Free cancellation up to 24 hours before pickup. Later cancellations may incur charges as specified in your booking confirmation.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
                <p>DriveIO's liability is limited to the amount you paid for the service. We're not responsible for indirect, incidental, or consequential damages.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Changes to Terms</h2>
                <p>We may update these terms from time to time. Continued use of our services constitutes acceptance of any changes.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
                <p>Questions about these terms? Contact us at <a href="mailto:legal@driveio.app" className="underline">legal@driveio.app</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;