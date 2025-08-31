import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Shield, CreditCard, UserCheck, QrCode } from 'lucide-react';
import { useState } from 'react';

export const Hero = () => {
  const [showQR, setShowQR] = useState(false);

  const trustBadges = [
    { icon: UserCheck, text: 'Verified ID & License' },
    { icon: CreditCard, text: 'Transparent Pricing' },
    { icon: Shield, text: 'Secure Payments' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent-light/20 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Book local cars
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              in minutes.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            DriveIO is the trust-first car sharing app—fast booking, 
            clear pricing, and verified drivers.
          </p>

          {/* iOS-only badge */}
          <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm">
            iOS-only for now. Android coming soon.
          </Badge>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg bg-primary hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all duration-smooth"
              onClick={() => window.open('#', '_blank')}
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-start">
                  <span className="text-xs opacity-90">Download on the</span>
                  <span className="font-semibold">App Store</span>
                </div>
                <ExternalLink className="h-5 w-5" />
              </div>
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              className="h-14 px-8 text-lg border-2 hover:bg-muted transition-all duration-smooth"
              onClick={() => window.open('#', '_blank')}
            >
              Join TestFlight Beta
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="h-14 px-6"
              onClick={() => setShowQR(!showQR)}
            >
              <QrCode className="h-6 w-6" />
            </Button>
          </div>

          {/* QR Code Modal (Simple) */}
          {showQR && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" onClick={() => setShowQR(false)}>
              <div className="bg-card p-6 rounded-lg shadow-xl border">
                <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="h-24 w-24 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground text-center">Scan to download DriveIO</p>
              </div>
            </div>
          )}

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <badge.icon className="h-4 w-4 text-success" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Phone Mockup Carousel */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 backdrop-blur-sm border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((screen) => (
                  <div key={screen} className="bg-card rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-smooth hover-lift">
                    <div className="aspect-[9/16] bg-gradient-to-b from-muted to-muted/50 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                          <span className="text-2xl font-bold text-primary">{screen}</span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">
                          {screen === 1 ? 'Search & Browse' : 
                           screen === 2 ? 'Book Instantly' : 
                           'Hit the Road'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Disabled Google Play Badge */}
          <div className="mt-8 flex justify-center">
            <div className="opacity-40 cursor-not-allowed">
              <Button 
                variant="outline" 
                disabled
                className="h-12 px-6 text-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Get it on</span>
                    <span className="font-semibold">Google Play</span>
                  </div>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Coming Soon</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};