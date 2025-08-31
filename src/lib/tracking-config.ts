// Tracking configuration file
// Replace the placeholder IDs with your actual tracking pixel IDs

export const trackingConfig = {
  // Facebook Pixel ID
  facebookPixelId: 'YOUR_FACEBOOK_PIXEL_ID', // Replace with your actual Facebook Pixel ID
  
  // Google Analytics 4 ID
  googleAnalyticsId: 'YOUR_GA4_ID', // Replace with your actual GA4 ID
  
  // Google Ads ID (for conversion tracking)
  googleAdsId: 'YOUR_GOOGLE_ADS_ID', // Replace with your actual Google Ads ID
  
  // TikTok Pixel ID
  tiktokPixelId: 'YOUR_TIKTOK_PIXEL_ID', // Replace with your actual TikTok Pixel ID
  
  // LinkedIn Insight Tag ID
  linkedinInsightId: 'YOUR_LINKEDIN_INSIGHT_ID', // Replace with your actual LinkedIn ID
  
  // Twitter Pixel ID
  twitterPixelId: 'YOUR_TWITTER_PIXEL_ID', // Replace with your actual Twitter Pixel ID
  
  // Snapchat Pixel ID
  snapchatPixelId: 'YOUR_SNAPCHAT_PIXEL_ID', // Replace with your actual Snapchat Pixel ID
};

// DEMO CONFIGURATION - Uncomment and modify for testing
// export const trackingConfig = {
//   facebookPixelId: '123456789012345', // Example Facebook Pixel ID
//   googleAnalyticsId: 'G-XXXXXXXXXX', // Example GA4 ID
//   googleAdsId: 'AW-123456789', // Example Google Ads ID
//   tiktokPixelId: 'ABCDEF123456', // Example TikTok Pixel ID
//   linkedinInsightId: '123456', // Example LinkedIn ID
//   twitterPixelId: '1234567890', // Example Twitter Pixel ID
//   snapchatPixelId: 'ABCDEF123456', // Example Snapchat Pixel ID
// };

// Environment-specific configuration
export const getTrackingConfig = () => {
  // You can add environment-specific logic here
  // For example, disable tracking in development
  if (process.env.NODE_ENV === 'development') {
    return {
      ...trackingConfig,
      // Disable tracking in development
      facebookPixelId: '',
      googleAnalyticsId: '',
      googleAdsId: '',
      tiktokPixelId: '',
      linkedinInsightId: '',
      twitterPixelId: '',
      snapchatPixelId: '',
    };
  }
  
  return trackingConfig;
};

// Tracking event names (standardized across platforms)
export const trackingEvents = {
  // Page views
  PAGE_VIEW: 'page_view',
  
  // User engagement
  HERO_CTA_CLICK: 'hero_cta_click',
  DOWNLOAD_APP_CLICK: 'download_app_click',
  LEARN_MORE_CLICK: 'learn_more_click',
  
  // Navigation
  NAVIGATION_CLICK: 'navigation_click',
  
  // Form interactions
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  
  // Content engagement
  CONTENT_VIEW: 'content_view',
  
  // Business events
  PRICING_VIEW: 'pricing_view',
  SAFETY_VIEW: 'safety_view',
  ABOUT_VIEW: 'about_view',
  FAQ_VIEW: 'faq_view',
  
  // Conversion events
  CONTACT_INQUIRY: 'contact_inquiry',
  CAREER_APPLICATION: 'career_application',
  
  // Custom events
  CUSTOM_EVENT: 'custom_event',
};

// Tracking properties for common events
export const trackingProperties = {
  // Location properties
  HERO_SECTION: 'hero_section',
  NAVIGATION: 'navigation',
  FOOTER: 'footer',
  
  // Content types
  PAGE: 'page',
  SECTION: 'section',
  BUTTON: 'button',
  FORM: 'form',
  
  // User properties
  USER_TYPE: 'user_type',
  LOCATION: 'location',
  DEVICE: 'device',
};

// Helper function to check if tracking is properly configured
export const isTrackingConfigured = (): boolean => {
  const hasValidIds = Object.values(trackingConfig).some(
    id => id && id !== 'YOUR_FACEBOOK_PIXEL_ID' && id !== 'YOUR_GA4_ID' && 
          id !== 'YOUR_GOOGLE_ADS_ID' && id !== 'YOUR_TIKTOK_PIXEL_ID' &&
          id !== 'YOUR_LINKEDIN_INSIGHT_ID' && id !== 'YOUR_TWITTER_PIXEL_ID' &&
          id !== 'YOUR_SNAPCHAT_PIXEL_ID'
  );
  
  return hasValidIds;
};

// Get configuration status for debugging
export const getConfigStatus = () => {
  return {
    facebook: trackingConfig.facebookPixelId && trackingConfig.facebookPixelId !== 'YOUR_FACEBOOK_PIXEL_ID',
    googleAnalytics: trackingConfig.googleAnalyticsId && trackingConfig.googleAnalyticsId !== 'YOUR_GA4_ID',
    googleAds: trackingConfig.googleAdsId && trackingConfig.googleAdsId !== 'YOUR_GOOGLE_ADS_ID',
    tiktok: trackingConfig.tiktokPixelId && trackingConfig.tiktokPixelId !== 'YOUR_TIKTOK_PIXEL_ID',
    linkedin: trackingConfig.linkedinInsightId && trackingConfig.linkedinInsightId !== 'YOUR_LINKEDIN_INSIGHT_ID',
    twitter: trackingConfig.twitterPixelId && trackingConfig.twitterPixelId !== 'YOUR_TWITTER_PIXEL_ID',
    snapchat: trackingConfig.snapchatPixelId && trackingConfig.snapchatPixelId !== 'YOUR_SNAPCHAT_PIXEL_ID',
  };
};
