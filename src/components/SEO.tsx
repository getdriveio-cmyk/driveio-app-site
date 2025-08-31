import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: object;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

export const SEO = ({
  title,
  description,
  canonical = 'https://driveio.app',
  ogImage = 'https://driveio.app/og-image.svg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  keywords = [
    // Primary Keywords (High Volume)
    'car rental near me', 'rent a car', 'car sharing app', 'rental car app', 'car hire',
    // Secondary Keywords (Medium Volume)  
    'hourly car rental', 'daily car rental', 'weekend car rental', 'airport car rental', 'business car rental',
    // Long-tail Keywords (High Intent)
    'rent car for day trip', 'car sharing app for business travel', 'rental car app with insurance',
    'car rental app no deposit', 'rent car hourly', 'trust-first car sharing', 'verified driver car rental',
    // Local Keywords (Detroit Focus)
    'Detroit car rental', 'car rental Detroit airport', 'Detroit car sharing', 'Michigan car rental app',
    'Detroit metro car rental', 'car rental Michigan', 'Detroit area car rental',
    // Brand Keywords
    'DriveIO', 'DriveIO app', 'DriveIO car sharing', 'DriveIO rental'
  ],
  author = 'DriveIO',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false
}: SEOProps) => {
  const fullTitle = title.includes('DriveIO') ? title : `${title} — DriveIO`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="googlebot" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Language and Region */}
      <meta name="language" content="en" />
      <meta name="geo.region" content="US-MI" />
      <meta name="geo.placename" content="Detroit" />
      <meta name="geo.position" content="42.3314;-83.0458" />
      <meta name="ICBM" content="42.3314, -83.0458" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${fullTitle} - ${description}`} />
      <meta property="og:site_name" content="DriveIO" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_CA" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@driveio_app" />
      <meta name="twitter:creator" content="@driveio_app" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${fullTitle} - ${description}`} />
      
      {/* LinkedIn */}
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/svg+xml" />
      
      {/* Article-specific meta tags */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {ogType === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#00CED1" />
      <meta name="msapplication-TileColor" content="#00CED1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="DriveIO" />
      <meta name="application-name" content="DriveIO" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
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
