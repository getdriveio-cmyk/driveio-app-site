import { useState, useEffect } from 'react';
import { Button } from './button';
import { X } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
  functional: boolean;
}

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    advertising: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookie-preferences');
    if (!cookieChoice) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(cookieChoice);
      setPreferences(savedPreferences);
      
      // Initialize tracking pixels based on saved preferences
      if (savedPreferences.advertising) {
        initializeAdvertisingPixels();
      }
      if (savedPreferences.analytics) {
        initializeAnalyticsPixels();
      }
    }
  }, []);

  const initializeAdvertisingPixels = () => {
    // Facebook Pixel
    if (typeof window !== 'undefined' && !window.fbq) {
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
        fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }

    // Google Ads Pixel
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ADS_ID';
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', 'YOUR_GOOGLE_ADS_ID');
    }

    // TikTok Pixel
    if (typeof window !== 'undefined' && !window.ttq) {
      const script = document.createElement('script');
      script.innerHTML = `
        !function (w, d, t) {
          w[t] = w[t] || [];
          w[t].push({
            'ttq.load': 'YOUR_TIKTOK_PIXEL_ID',
            'ttq.track': 'PageView'
          });
          var s = d.createElement('script');
          s.src = 'https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=YOUR_TIKTOK_PIXEL_ID';
          s.async = true;
          d.getElementsByTagName('head')[0].appendChild(s);
        }(window, document, 'ttq');
      `;
      document.head.appendChild(script);
    }
  };

  const initializeAnalyticsPixels = () => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_ID';
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', 'YOUR_GA4_ID');
    }
  };

  const acceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      advertising: true,
      functional: true,
    };
    
    setPreferences(allPreferences);
    localStorage.setItem('cookie-preferences', JSON.stringify(allPreferences));
    setShowBanner(false);
    
    // Initialize all tracking pixels
    initializeAdvertisingPixels();
    initializeAnalyticsPixels();
  };

  const acceptSelected = () => {
    setPreferences(preferences);
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    setShowBanner(false);
    
    // Initialize tracking pixels based on preferences
    if (preferences.advertising) {
      initializeAdvertisingPixels();
    }
    if (preferences.analytics) {
      initializeAnalyticsPixels();
    }
  };

  const rejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      advertising: false,
      functional: false,
    };
    
    setPreferences(minimalPreferences);
    localStorage.setItem('cookie-preferences', JSON.stringify(minimalPreferences));
    setShowBanner(false);
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {!showPreferences ? (
          // Main Banner
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🍪 We use cookies to enhance your experience
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                We use cookies and similar technologies to provide, protect, and improve our services. 
                This includes analytics and advertising cookies that help us deliver personalized content.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreferences(true)}
                className="w-full sm:w-auto"
              >
                Customize
              </Button>
              <Button
                size="sm"
                onClick={acceptAll}
                className="w-full sm:w-auto"
              >
                Accept All
              </Button>
            </div>
          </div>
        ) : (
          // Preferences Modal
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Cookie Preferences
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreferences(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Necessary Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Essential for the website to function properly
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-500">Always Active</span>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Help us understand how visitors interact with our website
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => updatePreference('analytics', e.target.checked)}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                </div>
              </div>

              {/* Advertising Cookies */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Advertising Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Used to deliver personalized ads and track campaign performance
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.advertising}
                    onChange={(e) => updatePreference('advertising', e.target.checked)}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Functional Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Enable enhanced functionality and personalization
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) => updatePreference('functional', e.target.checked)}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                size="sm"
                onClick={rejectAll}
                className="w-full sm:w-auto"
              >
                Reject All
              </Button>
              <Button
                size="sm"
                onClick={acceptSelected}
                className="w-full sm:w-auto"
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
