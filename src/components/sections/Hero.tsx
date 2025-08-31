import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Shield, CreditCard, UserCheck } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import appScreen1 from '@/assets/app-screen-1.png';

export const Hero = () => {

  const trustBadges = [
    { icon: UserCheck, text: 'Verified ID & License' },
    { icon: CreditCard, text: 'Transparent Pricing' },
    { icon: Shield, text: 'Secure Payments' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Get on the road faster
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text drop-shadow-none">
              with transparent, trusted car sharing.
            </span>
          </h1>

          {/* Subheading (benefit-first) */}
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Book in minutes. See all fees upfront. Drive with verified drivers and secure payments.
          </p>

          {/* iOS-only badge */}
          <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm bg-white/95 text-foreground shadow-lg">
            iOS-only for now. Android coming soon.
          </Badge>

          {/* CTA Buttons (primary + subtle secondary) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg bg-primary hover:bg-primary-hover shadow-xl hover:shadow-2xl transition-all duration-smooth transform hover:scale-105"
              onClick={() => window.open('#', '_blank', 'noopener,noreferrer')}
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-90">Get the app</span>
                  <span className="font-semibold">App Store</span>
                </div>
                <ExternalLink className="h-5 w-5" />
              </div>
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              className="h-14 px-8 text-lg border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 transition-all duration-smooth backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => window.open('#', '_blank', 'noopener,noreferrer')}
            >
              Join TestFlight (beta)
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-white/90 drop-shadow-lg bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
                <badge.icon className="h-4 w-4 text-success drop-shadow-none" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          {/* App Screenshot Display */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="relative w-64 h-auto">
                    {/* Phone Mockup Frame */}
                    <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                      {/* Screen */}
                      <div className="bg-white rounded-[2.5rem] overflow-hidden">
                        <img 
                          src={appScreen1} 
                          alt="DriveIO App Screenshot - Book local cars in minutes" 
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-60"></div>
                  </div>
                  
                  {/* Floating Info Card */}
                  <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/30">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center mb-2 mx-auto shadow-lg">
                        <span className="text-lg font-bold text-white">✓</span>
                      </div>
                      <p className="text-xs text-foreground font-medium">
                        Fast Booking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};