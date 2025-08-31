import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
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
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-foreground">
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using DriveIO, you agree to these Terms of Service. If you don't agree with any part 
                of these terms, please don't use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>To use DriveIO, you must:</p>
                <ul className="space-y-2 pl-6">
                  <li>• Be at least 21 years old</li>
                  <li>• Have a valid driver's license for at least 2 years</li>
                  <li>• Pass our verification and background check process</li>
                  <li>• Maintain valid insurance coverage</li>
                  <li>• Provide accurate information during registration</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Booking and Usage</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Reservations</h3>
                <ul className="space-y-2 pl-6">
                  <li>• All bookings are subject to availability and owner approval</li>
                  <li>• You must arrive on time for your reservation</li>
                  <li>• Late arrivals may result in booking cancellation</li>
                  <li>• Extensions must be approved by the car owner</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">Vehicle Use</h3>
                <ul className="space-y-2 pl-6">
                  <li>• Use vehicles only for legal purposes</li>
                  <li>• No smoking, pets (unless approved), or illegal activities</li>
                  <li>• Return vehicle in same condition as received</li>
                  <li>• Report any damage or issues immediately</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Payment and Fees</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-medium text-foreground">Pricing</h3>
                <ul className="space-y-2 pl-6">
                  <li>• All prices include applicable taxes and fees</li>
                  <li>• Security deposits may be placed on your payment method</li>
                  <li>• Additional charges may apply for violations or damage</li>
                  <li>• Fuel costs are included in most bookings</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground">Cancellation Policy</h3>
                <ul className="space-y-2 pl-6">
                  <li>• Free cancellation up to 24 hours before booking</li>
                  <li>• Cancellations within 24 hours may incur charges</li>
                  <li>• No-shows result in full booking charge</li>
                  <li>• Emergency cancellations are handled case-by-case</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Insurance and Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>DriveIO provides insurance coverage during your trip, but:</p>
                <ul className="space-y-2 pl-6">
                  <li>• Your personal insurance is primary coverage</li>
                  <li>• DriveIO insurance applies only during booked periods</li>
                  <li>• You're responsible for damages up to deductible amounts</li>
                  <li>• Violations of terms may void insurance coverage</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
              <ul className="space-y-3 text-muted-foreground pl-6">
                <li>• Commercial use (rideshare, delivery, etc.)</li>
                <li>• Allowing unauthorized drivers</li>
                <li>• Racing, off-roading, or reckless driving</li>
                <li>• Transporting illegal substances</li>
                <li>• Tampering with vehicle tracking or safety systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Account Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may suspend or terminate your account for:
              </p>
              <ul className="space-y-3 text-muted-foreground pl-6">
                <li>• Violation of these terms</li>
                <li>• Fraudulent activity or false information</li>
                <li>• Damage to vehicles or property</li>
                <li>• Safety violations or reckless behavior</li>
                <li>• Non-payment of fees or damages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact and Support</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about these terms? Need help with your account?
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground font-medium">Email: support@driveio.app</p>
                <p className="text-muted-foreground">24/7 emergency support available in-app</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;