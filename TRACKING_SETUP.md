# 🍪 Cookie Consent & Tracking Pixel Setup Guide

This guide will help you set up the cookie consent banner and tracking pixels for advertising and analytics purposes.

## 🚀 **QUICK START - Get Your Pixel IDs in 10 Minutes**

### **Step 1: Facebook Pixel (5 minutes)**
1. **Go to**: [Facebook Business Manager](https://business.facebook.com/)
2. **Click**: Events Manager → Data Sources → Pixels
3. **Create**: New pixel or use existing one
4. **Copy**: Pixel ID (looks like: `123456789012345`)
5. **Replace**: `YOUR_FACEBOOK_PIXEL_ID` in `src/lib/tracking-config.ts`

### **Step 2: Google Analytics 4 (3 minutes)**
1. **Go to**: [Google Analytics](https://analytics.google.com/)
2. **Click**: Admin → Data Streams → Web
3. **Copy**: Measurement ID (looks like: `G-XXXXXXXXXX`)
4. **Replace**: `YOUR_GA4_ID` in `src/lib/tracking-config.ts`

### **Step 3: Google Ads (2 minutes)**
1. **Go to**: [Google Ads](https://ads.google.com/)
2. **Click**: Tools & Settings → Conversions
3. **Create**: New conversion action
4. **Copy**: Conversion ID (looks like: `AW-XXXXXXXXX`)
5. **Replace**: `YOUR_GOOGLE_ADS_ID` in `src/lib/tracking-config.ts`

---

## 🔧 **Configuration**

### 1. Configure Tracking Pixel IDs

Edit `src/lib/tracking-config.ts` and replace the placeholder IDs with your actual tracking pixel IDs:

```typescript
export const trackingConfig = {
  facebookPixelId: '123456789012345', // Your Facebook Pixel ID
  googleAnalyticsId: 'G-XXXXXXXXXX', // Your GA4 ID
  googleAdsId: 'AW-123456789', // Your Google Ads ID
  tiktokPixelId: 'ABCDEF123456', // Your TikTok Pixel ID
  // ... other IDs
};
```

### 2. Get Your Tracking Pixel IDs

#### **Facebook Pixel**
1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Navigate to Events Manager → Data Sources → Pixels
3. Create a new pixel or use existing one
4. Copy the Pixel ID

#### **Google Analytics 4**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use existing one
3. Go to Admin → Data Streams → Web
4. Copy the Measurement ID (G-XXXXXXXXXX)

#### **Google Ads**
1. Go to [Google Ads](https://ads.google.com/)
2. Navigate to Tools & Settings → Conversions
3. Create a new conversion action
4. Copy the Conversion ID (AW-XXXXXXXXX)

#### **TikTok Pixel**
1. Go to [TikTok Ads Manager](https://ads.tiktok.com/)
2. Navigate to Assets → Events → Web Events
3. Create a new pixel
4. Copy the Pixel ID

## 🍪 Cookie Consent Features

### **What Users Can Control**
- ✅ **Necessary Cookies**: Always enabled (website functionality)
- 🔍 **Analytics Cookies**: Google Analytics, user behavior tracking
- 📢 **Advertising Cookies**: Facebook, TikTok, Google Ads pixels
- ⚙️ **Functional Cookies**: Enhanced features and personalization

### **User Experience**
- **First Visit**: Cookie banner appears at bottom of page
- **Customization**: Users can choose which cookie types to accept
- **Remember Choice**: Preferences saved in localStorage
- **Respect Privacy**: Only loads tracking pixels after consent

## 📊 Tracking Events Available

### **Automatic Tracking**
- Page views
- User interactions (clicks, form submissions)
- Content engagement
- Navigation patterns

### **Manual Tracking**
```typescript
import { trackingEvents } from '@/lib/tracking';

// Track custom events
trackingEvents.heroCTAClick();
trackingEvents.downloadAppClick();
trackingEvents.contactInquiry('email');
```

## 🔧 Customization Options

### **Modify Cookie Banner Text**
Edit `src/components/ui/cookie-banner.tsx`:

```typescript
<h3 className="text-lg font-semibold text-gray-900 mb-2">
  🍪 We use cookies to enhance your experience
</h3>
```

### **Add New Tracking Pixels**
Edit `src/components/ui/cookie-banner.tsx` in the `initializeAdvertisingPixels` function:

```typescript
// LinkedIn Insight Tag
if (typeof window !== 'undefined' && !window.lintrk) {
  const script = document.createElement('script');
  script.innerHTML = `
    (function(l) {
      if (l.getElementById('l:linkedin')) return;
      var s = l.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
      var e = l.getElementById('l:linkedin');
      e.appendChild(s);
    })(document);
  `;
  document.head.appendChild(script);
}
```

## 📱 Mobile Optimization

The cookie banner is fully responsive and works on all devices:
- **Mobile**: Stacked layout with full-width buttons
- **Desktop**: Side-by-side layout with compact design
- **Touch-friendly**: Large touch targets for mobile users

## 🚨 Privacy Compliance

### **GDPR Compliance**
- ✅ Explicit consent before tracking
- ✅ Granular control over cookie types
- ✅ Easy withdrawal of consent
- ✅ Clear information about data usage

### **CCPA Compliance**
- ✅ Right to know what data is collected
- ✅ Right to opt-out of data sharing
- ✅ Clear privacy policy links

### **Cookie Policy**
Make sure your `/cookies` page explains:
- What cookies you use
- Why you use them
- How users can control them
- Data retention policies

## 🧪 Testing

### **Development Mode**
Tracking is automatically disabled in development:
```typescript
if (process.env.NODE_ENV === 'development') {
  // Tracking disabled
}
```

### **Test Tracking Events**
1. Accept cookies in the banner
2. Open browser developer tools
3. Check Network tab for pixel requests
4. Verify events in your tracking platforms

## 📈 Performance Impact

### **Bundle Size**
- **Cookie Banner**: ~5KB gzipped
- **Tracking Utils**: ~3KB gzipped
- **Total Impact**: Minimal (<1% of total bundle)

### **Loading Strategy**
- Tracking pixels load only after consent
- Async loading for better performance
- No blocking of page rendering

## 🔍 Troubleshooting

### **Common Issues**

#### **Pixels Not Loading**
- Check if cookies are accepted
- Verify pixel IDs are correct
- Check browser console for errors
- Ensure no ad blockers are active

#### **Events Not Tracking**
- Verify tracking functions are called
- Check if pixels are properly initialized
- Test with browser developer tools
- Verify consent preferences

#### **Cookie Banner Not Showing**
- Check if user already made a choice
- Clear localStorage: `localStorage.removeItem('cookie-preferences')`
- Verify component is imported in App.tsx

## 📞 Support

For technical support:
1. Check browser console for errors
2. Verify all pixel IDs are correct
3. Test in incognito/private browsing mode
4. Check ad blocker settings

## 🎯 Next Steps

1. **Configure Pixel IDs**: Replace placeholders with real IDs
2. **Test Locally**: Run `npm run dev` and test cookie banner
3. **Deploy**: Push changes and test in production
4. **Monitor**: Check tracking platforms for data
5. **Optimize**: Use data to improve user experience

---

**Remember**: Always respect user privacy and only track what's necessary for your business goals! 🛡️
