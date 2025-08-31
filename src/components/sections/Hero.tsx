import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import appScreen1 from '@/assets/app-screen-1.png';

export const Hero = () => {
  const handleCTAClick = () => {
    // Analytics tracking temporarily disabled
    // trackEvents.heroCTAClick();
    // Add your CTA logic here
  };

  const handleDownloadClick = () => {
    // Analytics tracking temporarily disabled
    // trackEvents.heroDownloadClick();
    // Add your download logic here
  };

  const handleLearnMoreClick = () => {
    // Analytics tracking temporarily disabled
    // trackEvents.heroLearnMoreClick();
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

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Book Local Cars in
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
            Minutes
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          DriveIO connects you with verified drivers and transparent pricing. 
          No hidden fees, no surprises. Available in Detroit Metro Area.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            onClick={handleCTAClick}
          >
            Get Started Today
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

        {/* App Screenshot & Download */}
        <div className="relative max-w-md mx-auto">
          {/* Phone Mockup */}
          <div className="relative mx-auto w-64 h-96">
            {/* Phone Frame */}
            <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800">
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
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
            </div>

            {/* Floating Info Card */}
            <div className="absolute -right-4 top-8 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-2xl border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">⚡</div>
                <div className="text-xs font-semibold text-gray-700">Fast Booking</div>
                <div className="text-xs text-gray-500">2 min avg</div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-8">
            <Button 
              onClick={handleDownloadClick}
              className="bg-black/80 backdrop-blur-sm text-white hover:bg-black/90 border border-white/20 px-6 py-3 font-medium shadow-xl transition-all duration-300"
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