'use client';

import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-secondary-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/90 to-secondary-900/70"></div>
      
      <div className="relative container pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-6">
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
            className="max-w-3xl mx-auto text-lg md:text-xl text-secondary-300 mb-10"
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
            <Button variant="primary" size="lg">
              Start Exploring
            </Button>
            <Button variant="outline" size="lg" className="text-white border-secondary-600 hover:bg-secondary-800">
              Watch Video
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <div className="flex flex-wrap justify-center gap-8 text-sm text-secondary-300">
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
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
        <div className="flex flex-col items-center">
          <span className="text-secondary-400 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-secondary-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;