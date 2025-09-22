'use client';

import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* الخلفية */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      ></div>
      {/* تدرج لتوضيح النصوص */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* المحتوى */}
      <div className="relative container mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            Discover the Soul of Syria
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Explore Syria's
          <span className="block text-primary-400">Timeless Beauty</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-10"
        >
          Journey through ancient cities, vibrant markets, and breathtaking landscapes. 
          Experience the rich culture and warm hospitality that define Syria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" size="lg" className="border border-white text-white hover:bg-white hover:text-indigo-600">
            Start Exploring
          </Button>
          
          <Link href="/article" passHref>
            <Button variant="primary" size="lg" className="border border-white text-white hover:bg-white hover:text-indigo-600">
              Read about Syria
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/80"
        >
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white mr-2">50+</span>
            <span>Historic Sites</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white mr-2">100+</span>
            <span>Local Experiences</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white mr-2">10K+</span>
            <span>Happy Travelers</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
