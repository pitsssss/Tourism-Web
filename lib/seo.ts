// Helper functions for SEO optimization

export const generateArticleStructuredData = (article: any) => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.metaDescription || article.excerpt,
      "image": article.image,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Discover Syria",
        "logo": {
          "@type": "ImageObject",
          "url": "https://discoversyria.com/images/logo.png"
        }
      },
      "datePublished": article.publishedAt,
      "dateModified": article.updatedAt || article.publishedAt,
      "articleSection": article.category,
      "url": `https://discoversyria.com/articles/${article.slug}`
    };
  };
  
  export const generateDestinationStructuredData = (destination: any) => {
    return {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": destination.title,
      "description": destination.metaDescription || destination.description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": destination.location,
        "addressCountry": "SY"
      },
      "image": destination.image,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": destination.coordinates?.lat || 0,
        "longitude": destination.coordinates?.lng || 0
      },
      "url": `https://discoversyria.com/destinations/${destination.slug}`
    };
  };
  
  export const generateNewsStructuredData = (newsItem: any) => {
    return {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": newsItem.title,
      "description": newsItem.metaDescription || newsItem.excerpt,
      "image": newsItem.image || "",
      "datePublished": newsItem.publishedAt,
      "dateModified": newsItem.updatedAt || newsItem.publishedAt,
      "url": `https://discoversyria.com/news/${newsItem.slug}`
    };
  };
  
  export const generateSiteStructuredData = () => {
    return {
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
  };
  
  // Helper function to generate meta tags for articles
  export const generateArticleMeta = (article: any) => {
    return {
      title: `${article.title} | Discover Syria`,
      description: article.metaDescription || article.excerpt,
      keywords: [article.title, article.category, 'Syria travel', 'tourism guide', 'cultural insights'].join(', '),
      openGraph: {
        title: `${article.title} | Discover Syria`,
        description: article.metaDescription || article.excerpt,
        images: [
          {
            url: article.image,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
        type: 'article',
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt || article.publishedAt,
        authors: [article.author],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${article.title} | Discover Syria`,
        description: article.metaDescription || article.excerpt,
        images: [article.image],
      },
    };
  };
  
  // Helper function to generate meta tags for destinations
  export const generateDestinationMeta = (destination: any) => {
    return {
      title: `${destination.title} | Discover Syria`,
      description: destination.metaDescription || `Explore ${destination.title}, ${destination.location} - ${destination.description.substring(0, 160)}...`,
      keywords: [destination.title, destination.location, 'Syria tourism', 'travel guide', 'historical sites'].join(', '),
      openGraph: {
        title: `${destination.title} | Discover Syria`,
        description: destination.metaDescription || destination.description.substring(0, 160),
        images: [
          {
            url: destination.image,
            width: 1200,
            height: 630,
            alt: destination.title,
          },
        ],
      },
    };
  };
  
  // Helper function to generate breadcrumbs for SEO
  export const generateBreadcrumbs = (path: string, title: string) => {
    const baseUrl = "https://discoversyria.com";
    const pathSegments = path.split('/').filter(segment => segment);
    
    const itemListElement = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ];
    
    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const position = index + 2;
      const name = segment === pathSegments[pathSegments.length - 1] ? title : 
      segment.charAt(0).toUpperCase() + segment.slice(1);
    
    itemListElement.push({
      "@type": "ListItem",
      "position": position,
      "name": name,
      "item": `${baseUrl}${currentPath}`
    });
  });
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
};

// Helper function to generate FAQ structured data
export const generateFAQStructuredData = (questions: Array<{ question: string, answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };
};

// Helper function to generate local business structured data
export const generateLocalBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Discover Syria",
    "image": "https://discoversyria.com/images/logo.png",
    "@id": "https://discoversyria.com",
    "url": "https://discoversyria.com",
    "telephone": "+963-11-123-4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office in Damascus",
      "addressLocality": "Damascus",
      "addressCountry": "SY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5138,
      "longitude": 36.2918
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://facebook.com/discoversyria",
      "https://twitter.com/discoversyria",
      "https://instagram.com/discoversyria"
    ]
  };
};

// Helper function to generate sitemap entries for dynamic pages
export const generateSitemapEntries = (items: any[], type: 'articles' | 'destinations' | 'news') => {
  return items.map(item => ({
    url: `https://discoversyria.com/${type}/${item.slug}`,
    lastModified: item.updatedAt || item.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));
};

// Helper function to generate robots.txt content
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /
Allow: /destinations/
Allow: /articles/
Allow: /news/
Allow: /about/
Allow: /contact/

# Disallow crawling of admin pages
Disallow: /admin/
Disallow: /api/

# Sitemap
Sitemap: https://discoversyria.com/sitemap.xml
`;
};

// Helper function to generate canonical URL
export const generateCanonicalUrl = (path: string) => {
  return `https://discoversyria.com${path}`;
};

// Helper function to generate hreflang tags for internationalization
export const generateHrefLangTags = (currentPath: string) => {
  const languages = [
    { lang: 'en', name: 'English' },
    { lang: 'ar', name: 'العربية' },
    { lang: 'fr', name: 'Français' },
    { lang: 'es', name: 'Español' }
  ];
  
  return languages.map(lang => ({
    rel: 'alternate',
    hrefLang: lang.lang,
    href: `https://discoversyria.com/${lang.lang}${currentPath}`
  }));
};

// Helper function to generate article JSON-LD for SEO
export const generateArticleJSONLD = (article: any) => {
  return {
    "@context": "http://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://discoversyria.com/articles/${article.slug}`
    },
    "headline": article.title,
    "description": article.metaDescription || article.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": article.image,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": "https://discoversyria.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Discover Syria",
      "logo": {
        "@type": "ImageObject",
        "url": "https://discoversyria.com/images/logo.png",
        "width": 600,
        "height": 60
      }
    },
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt || article.publishedAt,
    "articleSection": article.category,
    "keywords": article.tags?.join(', ') || article.category
  };
};

// Helper function to generate destination JSON-LD for SEO
export const generateDestinationJSONLD = (destination: any) => {
  return {
    "@context": "http://schema.org",
    "@type": "TouristAttraction",
    "name": destination.title,
    "description": destination.metaDescription || destination.description,
    "image": {
      "@type": "ImageObject",
      "url": destination.image,
      "width": 1200,
      "height": 630
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": destination.location,
      "addressCountry": "SY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": destination.coordinates?.lat || 0,
      "longitude": destination.coordinates?.lng || 0
    },
    "openingHours": destination.openingHours,
    "telephone": "+963-11-123-4567",
    "url": `https://discoversyria.com/destinations/${destination.slug}`,
    "sameAs": [
      "https://facebook.com/discoversyria",
      "https://twitter.com/discoversyria"
    ]
  };
};

// Helper function to generate organization JSON-LD
export const generateOrganizationJSONLD = () => {
  return {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Discover Syria",
    "url": "https://discoversyria.com",
    "logo": "https://discoversyria.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+963-11-123-4567",
      "contactType": "Customer Service",
      "areaServed": "SY",
      "availableLanguage": ["English", "Arabic", "French"]
    },
    "sameAs": [
      "https://facebook.com/discoversyria",
      "https://twitter.com/discoversyria",
      "https://instagram.com/discoversyria"
    ]
  };
};

// Helper function to generate website JSON-LD
export const generateWebsiteJSONLD = () => {
  return {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "Discover Syria",
    "url": "https://discoversyria.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://discoversyria.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
};

// Export all functions for use in components
export default {
  generateArticleStructuredData,
  generateDestinationStructuredData,
  generateNewsStructuredData,
  generateSiteStructuredData,
  generateArticleMeta,
  generateDestinationMeta,
  generateBreadcrumbs,
  generateFAQStructuredData,
  generateLocalBusinessStructuredData,
  generateSitemapEntries,
  generateRobotsTxt,
  generateCanonicalUrl,
  generateHrefLangTags,
  generateArticleJSONLD,
  generateDestinationJSONLD,
  generateOrganizationJSONLD,
  generateWebsiteJSONLD
};