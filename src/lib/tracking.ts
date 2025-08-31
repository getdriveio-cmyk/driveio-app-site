// Tracking utility for advertising and analytics pixels
// This file provides easy-to-use functions for tracking user interactions

interface TrackingEvent {
  event: string;
  properties?: Record<string, any>;
}

// Facebook Pixel tracking
export const trackFacebookEvent = (event: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, properties);
  }
};

// Google Analytics 4 tracking
export const trackGAEvent = (event: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, properties);
  }
};

// TikTok Pixel tracking
export const trackTikTokEvent = (event: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track(event, properties);
  }
};

// Universal tracking function that sends to all active pixels
export const trackEvent = (event: string, properties?: Record<string, any>) => {
  const cookiePreferences = localStorage.getItem('cookie-preferences');
  
  if (cookiePreferences) {
    const preferences = JSON.parse(cookiePreferences);
    
    if (preferences.advertising) {
      trackFacebookEvent(event, properties);
      trackTikTokEvent(event, properties);
    }
    
    if (preferences.analytics) {
      trackGAEvent(event, properties);
    }
  }
};

// Common tracking events for DriveIO
export const trackingEvents = {
  // Page views
  pageView: (page: string) => trackEvent('page_view', { page }),
  
  // User interactions
  heroCTAClick: () => trackEvent('hero_cta_click', { location: 'hero_section' }),
  downloadAppClick: () => trackEvent('download_app_click', { location: 'hero_section' }),
  learnMoreClick: () => trackEvent('learn_more_click', { location: 'hero_section' }),
  
  // Navigation
  navigationClick: (section: string) => trackEvent('navigation_click', { section }),
  
  // Form interactions
  formStart: (formName: string) => trackEvent('form_start', { form_name: formName }),
  formSubmit: (formName: string) => trackEvent('form_submit', { form_name: formName }),
  
  // Content engagement
  contentView: (contentType: string, contentId: string) => 
    trackEvent('content_view', { content_type: contentType, content_id: contentId }),
  
  // Business events
  pricingView: () => trackEvent('pricing_view'),
  safetyView: () => trackEvent('safety_view'),
  aboutView: () => trackEvent('about_view'),
  faqView: () => trackEvent('faq_view'),
  
  // Conversion events
  contactInquiry: (method: string) => trackEvent('contact_inquiry', { method }),
  careerApplication: (position: string) => trackEvent('career_application', { position }),
};

// Initialize tracking based on cookie preferences
export const initializeTracking = () => {
  const cookiePreferences = localStorage.getItem('cookie-preferences');
  
  if (cookiePreferences) {
    const preferences = JSON.parse(cookiePreferences);
    
    if (preferences.advertising || preferences.analytics) {
      // Track initial page view
      trackingEvents.pageView(window.location.pathname);
    }
  }
};

// Check if tracking is enabled
export const isTrackingEnabled = (type: 'advertising' | 'analytics'): boolean => {
  const cookiePreferences = localStorage.getItem('cookie-preferences');
  
  if (cookiePreferences) {
    const preferences = JSON.parse(cookiePreferences);
    return preferences[type] || false;
  }
  
  return false;
};

// Update tracking when preferences change
export const updateTrackingPreferences = (preferences: {
  analytics: boolean;
  advertising: boolean;
}) => {
  if (preferences.analytics || preferences.advertising) {
    // Re-initialize tracking
    initializeTracking();
  }
};
