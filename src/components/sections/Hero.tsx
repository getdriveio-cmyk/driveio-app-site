import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import appScreen1 from '@/assets/app-screen-1.png';
import { trackingEvents } from '@/lib/tracking';
import { colors } from '@/lib/theme';

export const Hero = () => {
  const handleCTAClick = () => {
    // Track CTA click for advertising and analytics
    trackingEvents.heroCTAClick();
    // Add your CTA logic here
  };

  const handleDownloadClick = () => {
    // Track download click for advertising and analytics
    trackingEvents.downloadAppClick();
    // Add your download logic here
  };

  const handleLearnMoreClick = () => {
    // Track learn more click for advertising and analytics
    trackingEvents.learnMoreClick();
    // Add your learn more logic here
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badge */}
        <div className="mb-8">
          <Badge 
            variant="secondary" 
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-4 py-2 text-sm font-medium"
          >
            🚗 Trust-First Car Sharing Platform
          </Badge>
        </div>

        {/* Main Headline - Following UX best practices: clear, concise, 5-7 words */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Book Local Cars in
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-300">
            Minutes
          </span>
        </h1>

        {/* Subheadline - Following UX best practices: concise, under 20 words */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          DriveIO connects you with verified drivers and transparent pricing. 
          No hidden fees, no surprises. Available in Detroit Metro Area.
        </p>

        {/* CTA Buttons - Following UX best practices: actionable labels, limited to 2 buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-driveio-button hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-primary-600/25 transition-all duration-300 transform hover:scale-105"
            onClick={handleCTAClick}
          >
            Start Booking Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-300"
            onClick={handleLearnMoreClick}
          >
            Learn More
          </Button>
        </div>

        {/* App Screenshot & Download - Simplified without floating card */}
        <div className="relative max-w-md mx-auto">
          {/* Phone Mockup */}
          <div className="relative mx-auto w-64 h-96">
            {/* Phone Frame */}
            <div className="absolute inset-0 bg-primary-900 rounded-[3rem] shadow-2xl border-8 border-primary-800">
              {/* Screen */}
              <div className="absolute inset-2 bg-white rounded-[2rem] overflow-hidden">
                <img 
                  src={appScreen1} 
                  alt="DriveIO App Screenshot" 
                  className="w-full h-full object-cover"
                  width={256}
                  height={384}
                />
              </div>
              
              {/* Home Button */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-neutral-600 rounded-full"></div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-8">
            <Button 
              onClick={handleDownloadClick}
              className="bg-primary-800/80 backdrop-blur-sm text-white hover:bg-primary-800/90 border border-white/20 px-6 py-3 font-medium shadow-xl transition-all duration-300"
            >
              📱 Download iOS App
            </Button>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-white/80">
          <p className="text-sm">
            Trusted by drivers across Detroit • 4.9★ App Store Rating • 24/7 Support
          </p>
        </div>
      </div>
    </section>
  );
};