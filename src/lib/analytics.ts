import { track } from '@vercel/analytics';

// Analytics Configuration for DriveIO
export const analytics = {
  // Page View Tracking
  trackPageView: (pageName: string, properties?: Record<string, any>) => {
    track('page_view', {
      page: pageName,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // User Engagement Tracking
  trackButtonClick: (buttonName: string, location: string, properties?: Record<string, any>) => {
    track('button_click', {
      button: buttonName,
      location,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // Feature Usage Tracking
  trackFeatureUsage: (featureName: string, action: string, properties?: Record<string, any>) => {
    track('feature_usage', {
      feature: featureName,
      action,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // Search and Discovery Tracking
  trackSearch: (searchTerm: string, resultsCount: number, properties?: Record<string, any>) => {
    track('search', {
      term: searchTerm,
      results_count: resultsCount,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // Conversion Tracking
  trackConversion: (conversionType: string, value?: number, properties?: Record<string, any>) => {
    track('conversion', {
      type: conversionType,
      value,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // User Journey Tracking
  trackUserJourney: (step: string, stepNumber: number, properties?: Record<string, any>) => {
    track('user_journey', {
      step,
      step_number: stepNumber,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // Error Tracking
  trackError: (errorType: string, errorMessage: string, properties?: Record<string, any>) => {
    track('error', {
      type: errorType,
      message: errorMessage,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // Performance Tracking
  trackPerformance: (metric: string, value: number, properties?: Record<string, any>) => {
    track('performance', {
      metric,
      value,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // Social Sharing Tracking
  trackSocialShare: (platform: string, content: string, properties?: Record<string, any>) => {
    track('social_share', {
      platform,
      content,
      timestamp: new Date().toISOString(),
      ...properties
    });
  },

  // Local SEO Tracking
  trackLocalSearch: (searchType: string, location: string, properties?: Record<string, any>) => {
    track('local_search', {
      search_type: searchType,
      location,
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
  faqSearch: (searchTerm: string) => analytics.trackSearch(searchTerm, 0, { section: 'faq' }),

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

  // Content Engagement
  contentRead: (contentType: string, contentTitle: string) => analytics.trackFeatureUsage('content', 'read', { type: contentType, title: contentTitle }),
  contentShare: (contentType: string, platform: string) => analytics.trackSocialShare(platform, contentType),
  contentDownload: (contentType: string) => analytics.trackFeatureUsage('content', 'download', { type: contentType }),

  // Local Search
  detroitSearch: (searchTerm: string) => analytics.trackLocalSearch('general', 'Detroit', { term: searchTerm }),
  airportSearch: (searchTerm: string) => analytics.trackLocalSearch('airport', 'Detroit', { term: searchTerm }),
  businessSearch: (searchTerm: string) => analytics.trackLocalSearch('business', 'Detroit', { term: searchTerm }),

  // Performance Metrics
  pageLoadTime: (loadTime: number) => analytics.trackPerformance('page_load_time', loadTime),
  imageLoadTime: (imageName: string, loadTime: number) => analytics.trackPerformance('image_load_time', loadTime, { image: imageName }),
  componentRenderTime: (componentName: string, renderTime: number) => analytics.trackPerformance('component_render_time', renderTime, { component: componentName }),

  // User Behavior
  scrollDepth: (depth: number) => analytics.trackFeatureUsage('scroll', 'depth', { percentage: depth }),
  timeOnPage: (timeSpent: number) => analytics.trackFeatureUsage('page', 'time_spent', { seconds: timeSpent }),
  returnVisit: () => analytics.trackFeatureUsage('user', 'return_visit'),

  // SEO Performance
  organicSearch: (searchTerm: string, position: number) => analytics.trackSearch(searchTerm, 1, { source: 'organic', position }),
  directTraffic: () => analytics.trackFeatureUsage('traffic', 'direct'),
  referralTraffic: (source: string) => analytics.trackFeatureUsage('traffic', 'referral', { source }),

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
