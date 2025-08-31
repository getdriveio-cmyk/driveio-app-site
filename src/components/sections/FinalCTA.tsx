import { Button } from '@/components/ui/button';
import { ExternalLink, QrCode } from 'lucide-react';
import { useState } from 'react';

export const FinalCTA = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to roll?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Detroit drivers who trust DriveIO for their car sharing needs.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button 
            size="lg" 
            className="h-16 px-10 text-lg bg-primary hover:bg-primary-hover shadow-xl hover:shadow-2xl transition-all duration-smooth"
            onClick={() => window.open('#', '_blank')}
          >
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-start">
                <span className="text-sm opacity-90">Download on the</span>
                <span className="font-bold text-lg">App Store</span>
              </div>
              <ExternalLink className="h-5 w-5" />
            </div>
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            className="h-16 px-10 text-lg border-2 border-primary/30 hover:bg-primary/5 transition-all duration-smooth"
            onClick={() => window.open('#', '_blank')}
          >
            <div className="flex items-center gap-3">
              <span className="font-semibold">Join TestFlight Beta</span>
              <ExternalLink className="h-5 w-5" />
            </div>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="h-16 px-8 hover:bg-muted/50"
            onClick={() => setShowQR(!showQR)}
          >
            <div className="flex flex-col items-center gap-1">
              <QrCode className="h-6 w-6" />
              <span className="text-xs">QR Code</span>
            </div>
          </Button>
        </div>

        {/* QR Code Modal */}
        {showQR && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" onClick={() => setShowQR(false)}>
            <div className="bg-card p-8 rounded-xl shadow-2xl border border-border max-w-sm mx-4">
              <div className="w-48 h-48 bg-muted rounded-xl flex items-center justify-center mb-6 mx-auto">
                <QrCode className="h-24 w-24 text-muted-foreground" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Scan to Download</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Point your camera at this QR code to download DriveIO
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigator.clipboard.writeText('https://apps.apple.com/app/driveio')}
                >
                  Copy Link
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Legal Links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a 
            href="/privacy"
            className="hover:text-primary transition-colors duration-fast"
          >
            Privacy Policy
          </a>
          <span>•</span>
          <a 
            href="/terms"
            className="hover:text-primary transition-colors duration-fast"
          >
            Terms of Service
          </a>
          <span>•</span>
          <a 
            href="mailto:support@driveio.app"
            className="hover:text-primary transition-colors duration-fast"
          >
            Contact Support
          </a>
        </div>

        {/* Launch Info */}
        <div className="mt-8 p-6 bg-accent-light rounded-xl border border-accent/20">
          <p className="text-foreground font-medium">
            🚗 Now live in Detroit Metro Area
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            More cities coming soon. Follow us for updates.
          </p>
        </div>
      </div>
    </section>
  );
};