// Safe analytics wrapper to prevent errors
let analyticsAvailable = false;
let trackFunction: any = null;

// Initialize analytics when available
const initializeAnalytics = async () => {
  try {
    const { track } = await import('@vercel/analytics');
    trackFunction = track;
    analyticsAvailable = true;
  } catch (error) {
    console.warn('Vercel Analytics not available:', error);
  }
};

// Safe tracking function with error handling
const safeTrack = async (eventName: string, properties?: Record<string, any>) => {
  if (!analyticsAvailable) {
    await initializeAnalytics();
  }
  
  if (!trackFunction) {
    return;
  }
  
  try {
    trackFunction(eventName, properties);
  } catch (error) {
    console.warn('Analytics tracking failed:', error);
  }
};

// Analytics Configuration for DriveIO
export const analytics = {
  // Page View Tracking
  trackPageView: (pageName: string, properties?: Record<string, any>) => {
    safeTrack('page_view', {
      page: pageName,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // User Engagement Tracking
  trackButtonClick: (buttonName: string, location: string, properties?: Record<string, any>) => {
    safeTrack('button_click', {
      button: buttonName,
      location,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // Feature Usage Tracking
  trackFeatureUsage: (featureName: string, action: string, properties?: Record<string, any>) => {
    safeTrack('feature_usage', {
      feature: featureName,
      action,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // Conversion Tracking
  trackConversion: (conversionType: string, value?: number, properties?: Record<string, any>) => {
    safeTrack('conversion', {
      type: conversionType,
      value,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // User Journey Tracking
  trackUserJourney: (step: string, stepNumber: number, properties?: Record<string, any>) => {
    safeTrack('user_journey', {
      step,
      step_number: stepNumber,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // Error Tracking
  trackError: (errorType: string, errorMessage: string, properties?: Record<string, any>) => {
    safeTrack('error', {
      type: errorType,
      message: errorMessage,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // Performance Tracking
  trackPerformance: (metric: string, value: number, properties?: Record<string, any>) => {
    safeTrack('performance', {
      metric,
      value,
      timestamp: new Date().toISOString(),
      ...properties
    });
  }
};

// Predefined tracking events for common DriveIO actions
export const trackEvents = {
  // Hero Section
  heroCTAClick: () => analytics.trackButtonClick('hero_cta', 'hero_section'),
  heroDownloadClick: () => analytics.trackButtonClick('hero_download', 'hero_section'),
  heroLearnMoreClick: () => analytics.trackButtonClick('hero_learn_more', 'hero_section'),

  // Navigation
  navLinkClick: (linkName: string) => analytics.trackButtonClick(`nav_${linkName}`, 'navigation'),
  mobileMenuOpen: () => analytics.trackFeatureUsage('mobile_menu', 'open'),
  mobileMenuClose: () => analytics.trackFeatureUsage('mobile_menu', 'close'),

  // Features Section
  featureLearnMore: (featureName: string) => analytics.trackButtonClick(`feature_${featureName}`, 'features_section'),
  featureDemo: (featureName: string) => analytics.trackFeatureUsage(`feature_${featureName}`, 'demo_view'),

  // How It Works
  stepView: (stepNumber: number, stepName: string) => analytics.trackUserJourney(stepName, stepNumber),
  processStart: () => analytics.trackUserJourney('process_start', 1),

  // FAQ Section
  faqExpand: (question: string) => analytics.trackFeatureUsage('faq', 'expand', { question }),

  // Footer
  footerLinkClick: (linkName: string) => analytics.trackButtonClick(`footer_${linkName}`, 'footer'),
  socialMediaClick: (platform: string) => analytics.trackButtonClick(`social_${platform}`, 'footer'),

  // Contact & Support
  contactFormStart: () => analytics.trackUserJourney('contact_form_start', 1),
  contactFormSubmit: () => analytics.trackUserJourney('contact_form_submit', 2),
  contactFormSuccess: () => analytics.trackConversion('contact_form', 1),
  contactFormError: (errorMessage: string) => analytics.trackError('contact_form', errorMessage),

  // App Download Intent
  downloadIntent: (platform: 'ios' | 'android') => analytics.trackConversion('download_intent', 1, { platform }),
  appStoreRedirect: () => analytics.trackButtonClick('app_store_redirect', 'download_section'),
  playStoreRedirect: () => analytics.trackButtonClick('play_store_redirect', 'download_section'),

  // Local Search
  detroitSearch: (searchTerm: string) => analytics.trackFeatureUsage('local_search', 'detroit', { term: searchTerm }),
  airportSearch: (searchTerm: string) => analytics.trackFeatureUsage('local_search', 'airport', { term: searchTerm }),
  businessSearch: (searchTerm: string) => analytics.trackFeatureUsage('local_search', 'business', { term: searchTerm }),

  // Performance Metrics
  pageLoadTime: (loadTime: number) => analytics.trackPerformance('page_load_time', loadTime),
  imageLoadTime: (imageName: string, loadTime: number) => analytics.trackPerformance('image_load_time', loadTime, { image: imageName }),

  // User Behavior
  scrollDepth: (depth: number) => analytics.trackFeatureUsage('scroll', 'depth', { percentage: depth }),
  timeOnPage: (timeSpent: number) => analytics.trackFeatureUsage('page', 'time_spent', { seconds: timeSpent }),
  returnVisit: () => analytics.trackFeatureUsage('user', 'return_visit'),

  // Business Metrics
  leadGeneration: (leadType: string) => analytics.trackConversion('lead_generation', 1, { type: leadType }),
  partnershipInquiry: () => analytics.trackConversion('partnership_inquiry', 1),
  pressInquiry: () => analytics.trackConversion('press_inquiry', 1),
  careerApplication: () => analytics.trackConversion('career_application', 1)
};

// Custom hook for easy analytics integration
export const useAnalytics = () => {
  return {
    ...analytics,
    ...trackEvents
  };
};

// Export default analytics instance
export default analytics;
