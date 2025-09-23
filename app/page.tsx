// import React from 'react';
// import Head from 'next/head';
// import Hero from '../components/ui/Hero';
// import Features from '../components/ui/Features';
// import Testimonials from '../components/ui/Testimonials';
// import CTA from '../components/ui/CTA';
// import Footer from '@/components/ui/Footer';
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>SyriaExplorer - Discover the Soul of Syria</title>
//         <meta name="description" content="Explore Syria's timeless beauty through curated experiences that showcase its rich history, culture, and natural wonders." />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
      


//       <Hero />
//       <Features />
//       <Testimonials />
//       <CTA />
//       <Footer/>
//     </>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import DestinationCard from '@/components/DestinationCard';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/ui/Newsletter';
import { Destination, Article } from '@/types';

export default function Home() {
  const [featuredDestinations, setFeaturedDestinations] = useState<Destination[]>([]);
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // In a real app, you would fetch from your API
        // const destinationsResponse = await fetch('/api/destinations');
        // const articlesResponse = await fetch('/api/articles');
        // const destinations = await destinationsResponse.json();
        // const articles = await articlesResponse.json();
        
        // For now, we'll use the existing data but simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Import data dynamically
        const destinationsModule = await import('@/lib/destinations');
        const articlesModule = await import('@/lib/articles');
        
        const destinations = destinationsModule.destinations;
        const articles = articlesModule.articles;
        
        // Get 3 random featured destinations
        const shuffled = [...destinations].sort(() => 0.5 - Math.random());
        setFeaturedDestinations(shuffled.slice(0, 3));
        
        // Get 3 latest articles
        const sortedArticles = [...articles].sort((a, b) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        setLatestArticles(sortedArticles.slice(0, 3));
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();

    // Auto-rotate hero section
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "Explore the Cradle of Civilization",
      subtitle: "Explore ancient cities, vibrant markets, and breathtaking landscapes",
      image: "/images/hero/syria-panorama.jpg",
      cta: "Explore Destinations",
      ctaLink: "/destinations",
      gradient: "from-amber-800 to-amber-900"
    },
    {
      title: "Taste the Flavors of Syria",
      subtitle: "Savor centuries of culinary tradition in every bite",
      image: "/images/hero/syrian-cuisine.jpg",
      cta: "Read Food Articles",
      ctaLink: "/articles?category=Culture",
      gradient: "from-emerald-800 to-emerald-900"
    },
    {
      title: "Walk Through Living History",
      subtitle: "Experience millennia of civilization in every step",
      image: "/images/hero/ancient-syria.jpg",
      cta: "Read Historical Articles",
      ctaLink: "/articles?category=History",
      gradient: "from-blue-800 to-blue-900"
    }
  ];

  const stats = [
    { number: "6", label: "UNESCO World Heritage Sites" },
    { number: "11,000+", label: "Years of Continuous Civilization" },
    { number: "200+", label: "Archaeological Sites" },
    { number: "18", label: "Distinct Culinary Traditions" }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-amber-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen max-h-[800px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={heroSlides[currentHeroIndex].image}
            alt={heroSlides[currentHeroIndex].title}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentHeroIndex].gradient} opacity-80`}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-4 md:mx-8">
            <motion.div
              key={currentHeroIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight">
                {heroSlides[currentHeroIndex].title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                {heroSlides[currentHeroIndex].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href={heroSlides[currentHeroIndex].ctaLink}
                  className="inline-flex items-center justify-center bg-white text-amber-900 hover:bg-amber-50 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  {heroSlides[currentHeroIndex].cta}
                </Link>
                <Link
                  href="/articles"
                  className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                >
                  Read Articles
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-playfair">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Syria's most breathtaking historical sites and cultural treasures
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <DestinationCard destination={destination} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.a
              href="/destinations"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore All Destinations</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-playfair">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guides, travel tips, and cultural insights for your Syrian journey
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.a
              href="/articles"
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Read More Articles</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
              What Travelers Say
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Hear from those who've experienced the magic of Syria firsthand
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Visiting Palmyra was like stepping back in time. The scale and preservation of the ruins are breathtaking, and our local guide brought the history to life in a way no book could.",
                author: "Sarah J., History Enthusiast",
                image: "/images/testimonials/sarah.jpg"
              },
              {
                quote: "The hospitality of the Syrian people exceeded all my expectations. From sharing tea in Damascus' old city to home-cooked meals in Aleppo, I felt genuinely welcomed everywhere I went.",
                author: "Michael T., Cultural Traveler",
                image: "/images/testimonials/michael.jpg"
              },
              {
                quote: "As a foodie, Syria was paradise. The flavors, the aromas, the generosity at every table - it's a culinary journey unlike any other. I'm already planning my return to try more regional specialties!",
                author: "Lena K., Culinary Explorer",
                image: "/images/testimonials/lena.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">
                  <svg className="w-12 h-12 text-amber-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.979-3.995 3.376-3.995 6.441v7.391h-6zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.979-3.996 3.376-3.996 6.441v7.391h-6z" />
                  </svg>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.split(' ')[0][0]}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 font-playfair"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to Explore Syria?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Subscribe to our newsletter for exclusive travel tips, updates on accessible destinations, and special offers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Newsletter />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}