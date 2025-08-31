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
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-foreground">
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                At DriveIO, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, and protect your information when you use our car sharing platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Personal Information</h3>
                <ul className="space-y-2 pl-6">
                  <li>• Name, email address, and phone number</li>
                  <li>• Driver's license and government-issued ID</li>
                  <li>• Payment information and billing address</li>
                  <li>• Profile photo and verification documents</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">Usage Information</h3>
                <ul className="space-y-2 pl-6">
                  <li>• App usage and interaction data</li>
                  <li>• Location information (with your permission)</li>
                  <li>• Device information and IP address</li>
                  <li>• Trip history and booking details</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="space-y-3 text-muted-foreground pl-6">
                <li>• To provide and improve our car sharing services</li>
                <li>• To verify your identity and driver eligibility</li>
                <li>• To process payments and prevent fraud</li>
                <li>• To communicate with you about bookings and updates</li>
                <li>• To comply with legal requirements and safety measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share information only in these limited circumstances:
              </p>
              <ul className="space-y-3 text-muted-foreground pl-6">
                <li>• With car owners when you book their vehicles (limited contact info)</li>
                <li>• With service providers who help operate our platform</li>
                <li>• When required by law or to protect safety</li>
                <li>• With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your information, including 
                encryption, secure servers, and regular security audits. However, no system is 100% secure, 
                and we encourage you to protect your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-3 text-muted-foreground pl-6">
                <li>• Access and review your personal information</li>
                <li>• Correct inaccurate information</li>
                <li>• Delete your account and associated data</li>
                <li>• Opt out of marketing communications</li>
                <li>• Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or want to exercise your rights, 
                contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground font-medium">Email: privacy@driveio.app</p>
                <p className="text-muted-foreground">Response time: Within 48 hours</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;