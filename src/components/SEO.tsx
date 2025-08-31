import { Helmet } from 'react-helmet-async';
import { colors } from '@/lib/theme';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  structuredData?: object;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
}

export const SEO = ({
  title = "DriveIO - Trust-First Car Sharing Platform",
  description = "Book local cars in minutes with DriveIO. Verified drivers, transparent pricing, no hidden fees. Available in Detroit Metro Area.",
  keywords = [
    // Primary Keywords (High Volume)
    "car sharing",
    "car rental",
    "rent a car",
    "car hire",
    "local car rental",
    "hourly car rental",
    "daily car rental",
    "weekend car rental",
    "airport car rental",
    "Detroit car rental",
    "Michigan car rental",
    
    // Secondary Keywords (Medium Volume)
    "peer to peer car sharing",
    "car sharing app",
    "rent car near me",
    "cheap car rental",
    "affordable car rental",
    "car rental deals",
    "car rental discounts",
    "last minute car rental",
    "same day car rental",
    "car rental without credit card",
    
    // Brand Keywords
    "DriveIO",
    "DriveIO car sharing",
    "DriveIO app",
    "DriveIO Detroit",
    "DriveIO Michigan",
    
    // Long-tail Keywords
    "how to rent a car for a day",
    "best car rental app",
    "car sharing vs car rental",
    "is car sharing cheaper than renting",
    "car rental insurance coverage",
    "car rental requirements",
    "car rental age restrictions",
    "car rental with debit card",
    "car rental pickup and return",
    "car rental cancellation policy"
  ],
  canonical,
  structuredData,
  ogImage = "/og-image.svg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false
}: SEOProps) => {
  const fullTitle = title === "DriveIO - Trust-First Car Sharing Platform" 
    ? title 
    : `${title} | DriveIO`;

  const fullDescription = description.length > 160 
    ? description.substring(0, 157) + "..." 
    : description;

  const fullCanonical = canonical 
    ? `https://driveio.com${canonical}` 
    : "https://driveio.com";

  const fullOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `https://driveio.com${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="DriveIO" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="DriveIO" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@GetDriveIO" />
      <meta name="twitter:creator" content="@GetDriveIO" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={colors.primary[600]} />
      <meta name="msapplication-TileColor" content={colors.primary[600]} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="DriveIO" />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="US-MI" />
      <meta name="geo.placename" content="Detroit" />
      <meta name="geo.position" content="42.3314;-83.0458" />
      <meta name="ICBM" content="42.3314, -83.0458" />
      
      {/* Business Meta Tags */}
      <meta name="business:contact_data:street_address" content="Detroit Metro Area" />
      <meta name="business:contact_data:locality" content="Detroit" />
      <meta name="business:contact_data:region" content="Michigan" />
      <meta name="business:contact_data:postal_code" content="48201" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-313-DRIVEIO" />
      <meta name="business:contact_data:email" content="hello@driveio.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Structured Data for Organization */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DriveIO",
            "url": "https://driveio.com",
            "logo": "https://driveio.com/driveio-logo.png",
            "description": "Trust-first car sharing platform connecting drivers with verified vehicles in Detroit Metro Area.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Detroit",
              "addressRegion": "MI",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-313-DRIVEIO",
              "contactType": "customer service",
              "email": "hello@driveio.com"
            },
            "sameAs": [
              "https://x.com/GetDriveIO",
              "https://www.instagram.com/getdriveio/",
              "https://linkedin.com/company/driveio"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

// Enhanced structured data for common pages
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DriveIO",
  "url": "https://driveio.app",
  "logo": "https://driveio.app/favicon.ico",
  "description": "Trust-first car sharing platform for local mobility",
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Detroit",
    "addressRegion": "MI",
    "addressCountry": "US",
    "postalCode": "48201"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "support@driveio.app",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://x.com/GetDriveIO",
    "https://www.instagram.com/getdriveio/",
    "https://linkedin.com/company/driveio"
  ]
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DriveIO",
  "description": "Trust-first car sharing platform serving the Detroit Metro Area",
  "url": "https://driveio.app",
  "telephone": "+1-313-DRIVEIO",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Detroit Metro Area",
    "addressLocality": "Detroit",
    "addressRegion": "MI",
    "postalCode": "48201",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.3314,
    "longitude": -83.0458
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Apple Pay"],
  "currenciesAccepted": "USD",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 42.3314,
      "longitude": -83.0458
    },
    "geoRadius": "50000"
  }
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "DriveIO",
  "url": "https://driveio.app",
  "description": "Book local cars in minutes with transparent pricing and verified drivers",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://driveio.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const appStructuredData = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "DriveIO",
  "applicationCategory": "TravelApplication",
  "operatingSystem": "iOS",
  "description": "Trust-first car sharing app with fast booking and transparent pricing",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "downloadUrl": "https://apps.apple.com/app/driveio/id123456789",
  "applicationSubCategory": "Car Sharing"
};

export const breadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const reviewStructuredData = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "Service",
    "name": "DriveIO Car Sharing",
    "description": "Trust-first car sharing platform"
  },
  "ratingValue": reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
  "reviewCount": reviews.length,
  "bestRating": 5,
  "worstRating": 1,
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5,
      "worstRating": 1
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished
  }))
});

export const videoStructuredData = (videoUrl: string, title: string, description: string, thumbnailUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": title,
  "description": description,
  "thumbnailUrl": thumbnailUrl,
  "uploadDate": new Date().toISOString(),
  "contentUrl": videoUrl,
  "embedUrl": videoUrl,
  "publisher": {
    "@type": "Organization",
    "name": "DriveIO",
    "logo": {
      "@type": "ImageObject",
      "url": "https://driveio.app/favicon.ico"
    }
  }
});

export const eventStructuredData = (eventName: string, startDate: string, endDate: string, location: string) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": eventName,
  "startDate": startDate,
  "endDate": endDate,
  "location": {
    "@type": "Place",
    "name": location,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Detroit",
      "addressRegion": "MI",
      "addressCountry": "US"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "DriveIO"
  }
});
