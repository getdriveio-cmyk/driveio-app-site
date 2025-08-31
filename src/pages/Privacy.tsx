import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy — DriveIO</title>
        <meta name="description" content="Learn how DriveIO collects, uses, and protects your information." />
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: August 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-foreground">

            <section>
              <h2 className="text-2xl font-semibold mb-4">Who we are</h2>
              <p className="text-muted-foreground leading-relaxed">
                DriveIO, Inc. ("DriveIO", "we", "us") operates a trust-first car sharing platform. We are based in the Detroit Metro Area, USA. This policy explains how we collect, use, disclose, and protect information when you use our apps, website, and related services (collectively, the "Services").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information we collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Account & identity</h3>
                <ul className="space-y-2 pl-6">
                  <li>• Name, email, phone number</li>
                  <li>• Driver’s license details and government ID (for verification)</li>
                  <li>• Profile photo and verification artifacts</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">Bookings & usage</h3>
                <ul className="space-y-2 pl-6">
                  <li>• Trip and booking details, messages, and support inquiries</li>
                  <li>• App and site activity (feature usage, interactions)</li>
                  <li>• Device data (OS, model), IP address, and diagnostic logs</li>
                  <li>• Approximate or precise location (with permission)</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">Payments</h3>
                <ul className="space-y-2 pl-6">
                  <li>• Billing address and transaction metadata</li>
                  <li>• We use payment processors; we do not store full card numbers</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">Cookies & similar</h3>
                <ul className="space-y-2 pl-6">
                  <li>• Preferences, analytics, and security cookies (see our <a className="underline" href="/cookies">Cookie Policy</a>)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How we use information</h2>
              <ul className="space-y-3 text-muted-foreground pl-6">
                <li>• Provide, personalize, and improve the Services</li>
                <li>• Verify identity and eligibility; ensure platform and trip safety</li>
                <li>• Process payments, prevent fraud, and resolve disputes</li>
                <li>• Communicate about bookings, updates, and support</li>
                <li>• Comply with legal, tax, and regulatory requirements</li>
                <li>• Analyze performance and enhance user experience</li>
              </ul>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-foreground mb-2">Legal bases (EEA/UK)</h3>
                <ul className="space-y-2 text-muted-foreground pl-6">
                  <li>• Contract (to provide the Services)</li>
                  <li>• Legitimate interests (safety, security, improvement)</li>
                  <li>• Consent (where required, e.g., precise location, marketing)</li>
                  <li>• Legal obligation (compliance and enforcement)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How we share information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We do not sell personal information. We share it only as needed:</p>
              <ul className="space-y-3 text-muted-foreground pl-6">
                <li>• With vehicle owners and renters to fulfill bookings</li>
                <li>• With service providers (hosting, payments, ID verification, support)</li>
                <li>• For safety and legal reasons (law enforcement, legal claims)</li>
                <li>• In corporate transactions (merger, acquisition) with safeguards</li>
                <li>• With your direction or consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain information for as long as necessary to provide the Services, meet legal obligations, resolve disputes, and enforce agreements. Retention periods vary by data type and legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
              <ul className="space-y-3 text-muted-foreground pl-6">
                <li>• Access, correct, or delete your personal information</li>
                <li>• Object to or restrict certain processing</li>
                <li>• Opt out of marketing communications</li>
                <li>• Receive a portable copy of your data</li>
                <li>• Appeal decisions and lodge a complaint with a regulator</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                California residents: You may have additional rights under the CCPA/CPRA, including the right to know, delete, and correct. We do not sell personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">International data transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may process your information in the United States and other countries where we or our service providers operate. Where required, we use appropriate safeguards (such as standard contractual clauses).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use administrative, technical, and physical safeguards to protect information. No method of transmission or storage is 100% secure. Please use strong passwords and keep your account credentials safe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Children’s privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Services are not intended for individuals under 18. Drivers must be at least 21, as described in our Terms. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to this policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this policy from time to time. We will post the updated version and revise the “Last updated” date. Material changes will be communicated where required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
              <div className="mt-2 p-4 bg-muted rounded-lg">
                <p className="text-foreground font-medium">Privacy: privacy@driveio.app</p>
                <p className="text-foreground font-medium">Support: support@driveio.app</p>
                <p className="text-muted-foreground">Detroit Metro Area, USA</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;