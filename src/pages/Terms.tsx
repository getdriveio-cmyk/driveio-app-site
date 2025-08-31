import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service — DriveIO</title>
        <meta name="description" content="Read the terms and conditions for using DriveIO." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Back Button */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to DriveIO
          </Button>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: August 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-foreground">
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of DriveIO’s website, apps, and related services (the "Services"). By accessing or using the Services, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>To use DriveIO, you must:</p>
                <ul className="space-y-2 pl-6">
                  <li>• Be at least 21 years old</li>
                  <li>• Hold a valid driver’s license for at least 2 years</li>
                  <li>• Pass our identity verification and background checks</li>
                  <li>• Maintain valid insurance coverage where required</li>
                  <li>• Provide accurate and complete information during registration</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Bookings and use</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Reservations</h3>
                <ul className="space-y-2 pl-6">
                  <li>• Bookings are subject to availability and owner approval</li>
                  <li>• Arrive on time; late arrivals may be cancelled</li>
                  <li>• Extensions require owner approval</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">Vehicle use</h3>
                <ul className="space-y-2 pl-6">
                  <li>• Use vehicles only for lawful purposes</li>
                  <li>• No smoking or illegal activities; pets only if permitted</li>
                  <li>• Return the vehicle in the same condition and with agreed fuel level</li>
                  <li>• Report accidents, damage, or issues immediately</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Payments and fees</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Pricing</h3>
                <ul className="space-y-2 pl-6">
                  <li>• Prices may include taxes and fees; details shown at checkout</li>
                  <li>• A security deposit or payment hold may apply</li>
                  <li>• Additional charges may apply for violations or damage</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">Cancellations</h3>
                <ul className="space-y-2 pl-6">
                  <li>• Free cancellation up to 24 hours before pickup, unless stated otherwise</li>
                  <li>• Cancellations within 24 hours may incur charges</li>
                  <li>• No-shows are charged in full</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Insurance and liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Coverage details are provided during checkout and may vary by jurisdiction. You are responsible for complying with insurance requirements.</p>
                <ul className="space-y-2 pl-6">
                  <li>• Your personal auto policy, if any, may be primary</li>
                  <li>• Platform coverage applies only during booked periods and subject to policy terms</li>
                  <li>• Deductibles and exclusions may apply</li>
                  <li>• Violations of these Terms may void coverage</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Prohibited activities</h2>
              <ul className="space-y-3 text-muted-foreground pl-6">
                <li>• Commercial use (rideshare, delivery) unless expressly permitted</li>
                <li>• Allowing unauthorized drivers or subleasing</li>
                <li>• Racing, off-roading, reckless or impaired driving</li>
                <li>• Transporting illegal substances or hazardous materials</li>
                <li>• Tampering with tracking, safety, or telematics systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Account suspension and termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may suspend or terminate accounts for:</p>
              <ul className="space-y-3 text-muted-foreground pl-6">
                <li>• Violations of these Terms or policies</li>
                <li>• Fraud, abuse, or unsafe behavior</li>
                <li>• Non-payment or chargebacks</li>
                <li>• Legal or safety requirements</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Services are provided “as is” and “as available” without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. DriveIO does not guarantee uninterrupted or error-free operation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, DriveIO and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless DriveIO, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, liabilities, and expenses arising from your use of the Services or your breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Governing law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the State of Michigan, without regard to conflict of law principles. Venue for disputes will be in the state or federal courts located in Michigan, USA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time. Updated terms will be posted with a revised “Last updated” date. Your continued use of the Services constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground font-medium">Support: support@driveio.app</p>
                <p className="text-foreground font-medium">Legal: legal@driveio.app</p>
                <p className="text-muted-foreground">Detroit Metro Area, USA</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;