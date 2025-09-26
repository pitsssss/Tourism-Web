'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import SocialShare from '@/components/SocialShare';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, Star, Tag } from 'lucide-react';
import { destinations } from '@/lib/destinations';
import type { Destination } from '@/types';

export default function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  
  const [destination, setDestination] = useState<Destination | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const foundDestination = destinations.find(d => d.slug === slug);
        if (!foundDestination) {
          notFound();
        }
        setDestination(foundDestination);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        notFound();
      }
    };
    fetchDestination();
  }, [slug]);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dynamic metadata
  useEffect(() => {
    if (destination) {
      document.title = `${destination.title} | Syria Explorer`;
      
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!metaDescription) {
        metaDescription = document.createElement('meta') as HTMLMetaElement;
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = destination.metaDescription || destination.description.substring(0, 160);
    }
  }, [destination]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-amber-600">Loading destination...</div>
      </div>
    );
  }

  if (!destination) {
    notFound();
  }

  return (
    <div className="relative bg-gradient-to-br from-amber-50 via-white to-amber-100 min-h-screen overflow-hidden">
      {/* Elegant Background Pattern - AMBER THEME */}
      <div className="absolute inset-0 opacity-5">
        {/* Subtle geometric pattern inspired by Syrian architecture */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #d97706 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #d97706 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Floating ornamental elements */}
        <motion.div 
          className="absolute top-20 left-10 text-amber-300 opacity-20 text-4xl"
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✦
        </motion.div>
        
        <motion.div 
          className="absolute top-40 right-20 text-amber-400 opacity-20 text-3xl"
          animate={{ 
            rotate: [0, -15, 0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          ✧
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 left-1/4 text-amber-500 opacity-15 text-5xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ❖
        </motion.div>
      </div>

      {/* Hero Section with Enhanced Design */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ 
            y: scrollY * 0.3 // Subtle parallax
          }}
        >
          <Image
            src={destination.image}
            alt={destination.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        {/* Elegant overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        
        {/* Decorative border elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-wrap items-center gap-4 text-amber-200 mb-4">
              {destination.rating && (
                <motion.div 
                  className="inline-flex items-center gap-1 text-sm bg-black/30 px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Star className="w-4 h-4 fill-current" />
                  {destination.rating}
                </motion.div>
              )}
              <motion.span 
                className="inline-flex items-center gap-1 text-sm bg-black/30 px-3 py-1 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-4 h-4" />
                {destination.location}
              </motion.span>
            </div>
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {destination.title}
            </motion.h1>
            <motion.div 
              className="flex flex-wrap items-center gap-4 text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span className="font-medium">{destination.region}</span>
              </div>
              {destination.category && (
                <div className="flex items-center gap-2">
                  <span className="bg-amber-600/30 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {destination.category}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Breadcrumb with Elegant Design */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-amber-200 py-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600 transition-colors font-medium">Home</Link>
            <span className="mx-2 text-amber-400">/</span>
            <Link href="/destinations" className="hover:text-amber-600 transition-colors font-medium">Destinations</Link>
            <span className="mx-2 text-amber-400">/</span>
            <span className="text-gray-900 font-medium">{destination.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Reading progress indicator */}
            <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-20">
              <motion.div 
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
                initial={{ width: 0 }}
                animate={{ 
                  width: "0%",
                  transition: { duration: 0.1 }
                }}
                whileInView={{ 
                  width: "100%",
                  transition: { duration: 2, ease: "easeInOut" }
                }}
                viewport={{ once: true }}
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-xl max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-amber-600 prose-a:hover:text-amber-800 hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-800 prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50/50 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:text-gray-700 prose-blockquote:font-serif prose-blockquote:text-xl prose-img:rounded-xl prose-img:shadow-xl prose-img:my-8 prose-img:border prose-img:border-amber-200 prose-ul:space-y-2 prose-ol:space-y-2 prose-li:text-gray-700 prose-li:text-lg prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:shadow-lg prose-table:w-full prose-table:border-collapse prose-td:border prose-td:border-gray-300 prose-td:p-4 prose-th:border prose-th:border-gray-300 prose-th:p-4 prose-th:bg-amber-100 prose-th:font-semibold prose-hr:border-amber-300">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {destination.description}
                </p>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12 font-serif">History & Significance</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {destination.history}
                </p>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12 font-serif">Visitor Information</h2>
                <div className="bg-amber-50 p-6 rounded-xl mb-8 border border-amber-200 shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-amber-600" />
                    Essential Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-gray-700 flex items-center gap-2">
                          <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Opening Hours:
                        </p>
                        <p className="text-gray-900">{destination.openingHours}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 flex items-center gap-2">
                          <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Entry Fee:
                        </p>
                        <p className="text-gray-900">{destination.entryFee}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-gray-700 flex items-center gap-2">
                          <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 003 0m6-3H9m6 3H9m2 4h2M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                          </svg>
                          Best Time to Visit:
                        </p>
                        <p className="text-gray-900">{destination.bestTimeToVisit}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 flex items-center gap-2">
                          <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          Accessibility:
                        </p>
                        <p className="text-gray-900">{destination.accessibility}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12 font-serif">Tips for Visitors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.tips.map((tip, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{tip}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Gallery */}
            {destination.gallery && destination.gallery.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Photo Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destination.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      className="aspect-square relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Image
                        src={image}
                        alt={`${destination.title} - view ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm font-medium">
                          {destination.title} - {index + 1}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Social Share */}
              <motion.div 
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share this destination
                </h3>
                <SocialShare 
                  title={destination.title}
                  url={`https://syriaexplorer.com/destinations/${destination.slug}`}
                  description={destination.description.substring(0, 160)}
                />
              </motion.div>

              {/* Map */}
              {destination.coordinates && (
                <motion.div 
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-200"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    Location
                  </h3>
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center border-2 border-dashed border-amber-300">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-2" />
                      <p className="text-amber-700 font-medium">{destination.location}</p>
                      <p className="text-amber-600 text-sm mt-1">
                        {destination.coordinates.lat.toFixed(4)}, {destination.coordinates.lng.toFixed(4)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Related Destinations */}
              <motion.div 
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Related Destinations
                </h3>
                <div className="space-y-4">
                  {destinations
                    .filter(d => d.region === destination.region && d.slug !== destination.slug)
                    .slice(0, 3)
                    .map((related, index) => (
                      <motion.div
                        key={related.slug}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link 
                          href={`/destinations/${related.slug}`}
                          className="block group hover:bg-amber-50 p-3 rounded-xl transition-all duration-300 border border-transparent hover:border-amber-200"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Star className="w-6 h-6 text-amber-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-amber-700 transition-colors line-clamp-1">
                                {related.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {related.location}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}