import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { trackingEvents } from '@/lib/tracking';

export const FinalCTA = () => {
  const handlePrimaryCTAClick = () => {
    trackingEvents.finalCTAClick('primary');
    window.open('https://apps.apple.com/app/driveio', '_blank');
  };

  const handleSecondaryCTAClick = () => {
    trackingEvents.finalCTAClick('secondary');
    window.open('https://testflight.apple.com/join/driveio', '_blank');
  };

  const handleLearnMoreClick = (section: string) => {
    trackingEvents.learnMoreClick(section);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-100 via-primary-50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-6 leading-tight">
            Ready to Start
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Driving Today?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of drivers who trust DriveIO for safe, reliable car sharing. 
            Download now and experience the future of transportation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={handlePrimaryCTAClick}
              className="h-16 px-10 text-lg bg-gradient-driveio-button hover:bg-primary-700 shadow-xl hover:shadow-2xl transition-all duration-smooth text-white"
            >
              Download iOS App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleSecondaryCTAClick}
              className="h-16 px-10 text-lg border-2 border-primary-300 text-primary-700 hover:bg-primary-50 transition-all duration-smooth"
            >
              Join TestFlight Beta
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-primary-800 mb-2">4.9★ Rating</h3>
            <p className="text-primary-700">Top-rated on the App Store with thousands of 5-star reviews</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-primary-800 mb-2">100% Verified</h3>
            <p className="text-primary-700">Every driver and vehicle is thoroughly vetted for your safety</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-primary-800 mb-2">24/7 Support</h3>
            <p className="text-primary-700">Round-the-clock customer service whenever you need help</p>
          </div>
        </div>

        {/* Additional Links */}
        <div className="space-y-4">
          <p className="text-primary-700">
            Want to learn more? Check out our{' '}
            <button 
              onClick={() => handleLearnMoreClick('features')}
              className="hover:text-primary transition-colors duration-fast underline"
            >
              features
            </button>
            ,{' '}
            <button 
              onClick={() => handleLearnMoreClick('safety')}
              className="hover:text-primary transition-colors duration-fast underline"
            >
              safety measures
            </button>
            , and{' '}
            <button 
              onClick={() => handleLearnMoreClick('pricing')}
              className="hover:text-primary transition-colors duration-fast underline"
            >
              transparent pricing
            </button>
            .
          </p>
        </div>
      </div>
    </section>
  );
};