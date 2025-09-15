'use client';

import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="bg-primary-600">
      <div className="container section-padding">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Explore Syria?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto"
          >
            Join thousands of travelers who have discovered the beauty and wonder of Syria with our expertly curated experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="secondary" size="lg">
              Browse Destinations
            </Button>
            <Button variant="primary" size="lg">
              Book Your Trip
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;