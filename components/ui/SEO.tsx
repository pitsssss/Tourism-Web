'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

interface SEOProps {
  // You can add props here if needed
}

export function SEO({}: SEOProps) {
  const pathname = usePathname();

  // Canonical URL
  const canonicalUrl = `https://discoversyria.com${pathname}`;

  // Structured data for the entire site
  const siteStructuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Discover Syria",
    "description": "Your trusted guide to exploring the rich history, culture, and beauty of Syria",
    "url": "https://discoversyria.com",
    "logo": "https://discoversyria.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Damascus",
      "addressCountry": "SY"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+963-11-123-4567",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://facebook.com/discoversyria",
      "https://twitter.com/discoversyria",
      "https://instagram.com/discoversyria"
    ]
  };

  return (
    <>
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Structured Data */}
      <Script 
        id="site-structured-data" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData) }}
      />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload important resources */}
      <link rel="preload" href="/images/logo.png" as="image" />
    </>
  );
}

// Export as default as well for compatibility
export default SEO;