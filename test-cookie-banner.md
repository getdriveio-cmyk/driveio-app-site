# 🧪 Testing Your Cookie Consent Banner

## ✅ **Quick Test - Is It Working?**

### **Step 1: Check if Banner Appears**
1. Open your site in a **new incognito/private window**
2. The cookie banner should appear at the bottom
3. If it doesn't appear, check the browser console for errors

### **Step 2: Test Cookie Banner Functions**
1. **Click "Accept All"** - Should hide banner and enable all tracking
2. **Click "Customize"** - Should show detailed preferences
3. **Select specific cookies** - Should only enable selected types
4. **Click "Reject All"** - Should only enable necessary cookies

### **Step 3: Verify Tracking (After Accepting)**
1. Open browser **Developer Tools** (F12)
2. Go to **Console** tab
3. You should see messages like:
   ```
   Facebook Pixel initialized with ID: YOUR_ID
   Google Analytics initialized with ID: YOUR_ID
   ```

## 🔍 **Debugging Common Issues**

### **Banner Not Showing?**
- Clear localStorage: `localStorage.removeItem('cookie-preferences')`
- Refresh the page
- Check if you're in development mode (tracking disabled)

### **Tracking Not Working?**
- Verify pixel IDs are configured in `src/lib/tracking-config.ts`
- Check browser console for errors
- Ensure ad blockers are disabled for testing

### **Console Errors?**
- Check if all imports are correct
- Verify component is added to `App.tsx`
- Make sure build is successful

## 🎯 **Next Steps After Testing**

### **1. Configure Real Pixel IDs**
Edit `src/lib/tracking-config.ts`:
```typescript
export const trackingConfig = {
  facebookPixelId: '123456789012345', // Your real Facebook Pixel ID
  googleAnalyticsId: 'G-XXXXXXXXXX', // Your real GA4 ID
  googleAdsId: 'AW-123456789', // Your real Google Ads ID
  tiktokPixelId: 'ABCDEF123456', // Your real TikTok Pixel ID
};
```

### **2. Test with Real IDs**
- Deploy to production
- Accept cookies on your live site
- Verify tracking in your analytics platforms

### **3. Monitor Performance**
- Check if pixels load correctly
- Verify events are being tracked
- Monitor site performance impact

## 🚀 **Ready to Deploy!**

Once testing is complete:
1. **Commit your changes**: `git add . && git commit -m "test: cookie banner working"`
2. **Push to main**: `git push origin main`
3. **Deploy to Vercel**: `vercel --prod`

Your DriveIO app will then have a fully functional cookie consent system ready for advertising campaigns! 🎉
