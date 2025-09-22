'use client';

import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="bg-primary-600 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center max-w-3xl"
      >
        <motion.h2 
          whileHover={{ scale: 1.05 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to Explore Syria?
        </motion.h2>

        <motion.p
          whileHover={{ y: -5 }}
          className="text-xl text-primary-100 mb-8"
        >
          Join thousands of travelers who have discovered the beauty and wonder of Syria with our expertly curated experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          whileHover={{ scale: 1.02 }}
        >
          <Button variant="primary" size="lg">
            Browse Destinations
          </Button>
          <Button variant="primary" size="lg">
            Book Your Trip
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
