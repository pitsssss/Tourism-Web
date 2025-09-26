'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ]
    },
    {
      title: "Destinations",
      links: [
        { name: "All Destinations", href: "/destinations" },
        { name: "Palmyra", href: "/destinations/palmyra" },
        { name: "Damascus Old City", href: "/destinations/damascus-old-city" },
        { name: "Krak des Chevaliers", href: "/destinations/krak-des-chevaliers" },
        { name: "Bosra Roman Theater", href: "/destinations/bosra-roman-theater" },
        { name: "Aleppo Citadel", href: "/destinations/aleppo-citadel" },
        { name: "Maaloula", href: "/destinations/maaloula" },
        { name: "Norias of Hama", href: "/destinations/norias-of-hama" },
        { name: "Ugarit", href: "/destinations/ugarit" },
      ]
    },
    {
      title: "Articles",
      links: [
        { name: "All Articles", href: "/articles" },
        { name: "Travel Guides", href: "/articles?category=Travel%20Guide" },
        { name: "History", href: "/articles?category=History" },
        { name: "Culture", href: "/articles?category=Culture" },
        { name: "Travel Tips", href: "/articles?category=Travel%20Tips" },
      ]
    },
    {
      title: "News",
      links: [
        { name: "All News", href: "/news" },
        { name: "Tourism Policy", href: "/news?category=Tourism%20Policy" },
        { name: "Cultural Heritage", href: "/news?category=Cultural%20Heritage" },
        { name: "Reconstruction", href: "/news?category=Reconstruction" },
        { name: "Tourism Infrastructure", href: "/news?category=Tourism%20Infrastructure" },
      ]
    }
  ];

  // ✅ Correct variant definitions (no 'hover' in variants)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  const linkItem = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Sitemap
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Navigate through all pages of Explore Syria.
          </motion.p>
        </div>
      </div>

      {/* Sitemap Content */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {sitemapSections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15 
                }}
                className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
              >
                {/* Accent bar */}
                <motion.div 
                  className="h-1 w-12 bg-amber-500 rounded-full mb-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                />
                
                <h3 className="text-lg font-bold text-gray-800 mb-4">{section.title}</h3>
                
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      variants={linkItem}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 0.4 + index * 0.1 + linkIndex * 0.05,
                        duration: 0.4 
                      }}
                    >
                      <Link 
                        href={link.href}
                        className="text-amber-700 hover:text-amber-900 font-medium transition-colors block py-1 relative group"
                      >
                        {link.name}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-amber-500 origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <div className="py-8 bg-gray-50 text-center">
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Explore every corner of Syria’s heritage.
        </motion.p>
      </div>
    </div>
  );
}