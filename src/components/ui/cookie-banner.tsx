import { useState, useEffect } from 'react';
import { X, Settings, CheckCircle } from 'lucide-react';
import { Button } from './button';
import { trackingConfig } from '@/lib/tracking-config';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
  functional: boolean;
}

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    advertising: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('driveio-cookie-consent');
    if (!hasConsent) {
      setIsVisible(true);
    } else {
      // Load saved preferences
      const savedPrefs = localStorage.getItem('driveio-cookie-preferences');
      if (savedPrefs) {
        try {
          const parsedPrefs = JSON.parse(savedPrefs);
          setPreferences(parsedPrefs);
          
          // Apply saved preferences
          applyTrackingPixels(parsedPrefs);
        } catch (error) {
          console.error('Error parsing cookie preferences:', error);
        }
      }
    }
  }, []);

  const applyTrackingPixels = (prefs: CookiePreferences) => {
    if (prefs.analytics) {
      injectGoogleAnalytics();
    }
    if (prefs.advertising) {
      injectFacebookPixel();
      injectGoogleAds();
      injectTikTokPixel();
    }
  };

  const injectGoogleAnalytics = () => {
    if (trackingConfig.googleAnalytics && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingConfig.googleAnalytics}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', trackingConfig.googleAnalytics);
    }
  };

  const injectFacebookPixel = () => {
    if (trackingConfig.facebook && !window.fbq) {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${trackingConfig.facebook}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }
  };

  const injectGoogleAds = () => {
    if (trackingConfig.googleAds && !window.gtag) {
      // Google Ads uses the same gtag as Analytics
      injectGoogleAnalytics();
    }
  };

  const injectTikTokPixel = () => {
    if (trackingConfig.tikTok && !window.ttq) {
      const script = document.createElement('script');
      script.innerHTML = `
        !function (w, d, t) {
          w[t] = w[t] || [];
          w[t].push({
            'tt.event': 'tt.ready',
            'tt.config': {
              'pixel_code': '${trackingConfig.tikTok}',
              'pixel_type': 'ttq'
            }
          });
        }(window, document, 'ttq');
      `;
      document.head.appendChild(script);

      const ttqScript = document.createElement('script');
      ttqScript.src = 'https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=' + trackingConfig.tikTok;
      document.head.appendChild(ttqScript);
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      advertising: true,
      functional: true,
    };
    
    setPreferences(allAccepted);
    localStorage.setItem('driveio-cookie-consent', 'accepted');
    localStorage.setItem('driveio-cookie-preferences', JSON.stringify(allAccepted));
    
    applyTrackingPixels(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('driveio-cookie-consent', 'accepted');
    localStorage.setItem('driveio-cookie-preferences', JSON.stringify(preferences));
    
    applyTrackingPixels(preferences);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      advertising: false,
      functional: false,
    };
    
    setPreferences(onlyNecessary);
    localStorage.setItem('driveio-cookie-consent', 'rejected');
    localStorage.setItem('driveio-cookie-preferences', JSON.stringify(onlyNecessary));
    
    setIsVisible(false);
    setShowPreferences(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-300 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {!showPreferences ? (
          /* Main Banner */
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="h-5 w-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-primary-800">We value your privacy</h3>
              </div>
              <p className="text-primary-700 text-sm leading-relaxed">
                We use cookies to enhance your experience, analyze site traffic, and provide personalized content. 
                By continuing to use our site, you consent to our use of cookies. 
                <a href="/cookies" className="text-primary hover:underline ml-1">Learn more</a>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreferences(true)}
                className="border-primary-300 text-primary-700 hover:bg-primary-50"
              >
                <Settings className="h-4 w-4 mr-2" />
                Customize
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="bg-primary hover:bg-primary-hover text-white"
              >
                Accept All
              </Button>
            </div>
          </div>
        ) : (
          /* Preferences Panel */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-primary-800">Cookie Preferences</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreferences(false)}
                className="text-primary-600 hover:text-primary-800"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-primary-800">Necessary Cookies</h4>
                  <p className="text-sm text-primary-600">Required for the website to function properly</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="h-4 w-4 text-primary-600 rounded border-neutral-300"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white border border-neutral-300 rounded-lg">
                <div>
                  <h4 className="font-medium text-primary-800">Analytics Cookies</h4>
                  <p className="text-sm text-primary-600">Help us understand how visitors use our website</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => togglePreference('analytics')}
                    className="h-4 w-4 text-primary-600 rounded border-neutral-300"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white border border-neutral-300 rounded-lg">
                <div>
                  <h4 className="font-medium text-primary-800">Advertising Cookies</h4>
                  <p className="text-sm text-primary-600">Used to deliver personalized ads and measure campaign performance</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.advertising}
                    onChange={() => togglePreference('advertising')}
                    className="h-4 w-4 text-primary-600 rounded border-neutral-300"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white border border-neutral-300 rounded-lg">
                <div>
                  <h4 className="font-medium text-primary-800">Functional Cookies</h4>
                  <p className="text-sm text-primary-600">Enable enhanced functionality and personalization</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={() => togglePreference('functional')}
                    className="h-4 w-4 text-primary-600 rounded border-neutral-300"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-300">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
                className="border-neutral-300 text-neutral-700 hover:bg-neutral-50"
              >
                Reject All
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptSelected}
                className="bg-primary hover:bg-primary-hover text-white"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// TypeScript declarations for global tracking functions
declare global {
  interface Window {
    fbq: any;
    gtag: any;
    ttq: any;
    dataLayer: any[];
  }
}
