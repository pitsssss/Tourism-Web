'use client';

import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    name: 'Ancient Heritage',
    description: 'Explore UNESCO World Heritage sites and ancient cities that have stood for millennia.',
    icon: '/images/feature1.svg',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Cultural Experiences',
    description: 'Immerse yourself in authentic Syrian culture through local cuisine, music, and traditions.',
    icon: '/images/feature2.svg',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Expert Guides',
    description: 'Travel with knowledgeable local guides who bring Syria’s stories to life.',
    icon: '/images/feature3.svg',
    image: '/images/hero-bg.jpg',
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-black min-h-screen flex items-center justify-center">
      <div className="container text-center flex flex-col items-center justify-center">
        <motion.div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Discover Syria with Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            We offer unique experiences that showcase the best of Syria's rich history, culture, and natural beauty.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50, x: 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <Card hoverable className="bg-gray-900 text-white flex flex-col items-center justify-center">
                <div className="relative h-48 overflow-hidden rounded-t-xl w-72">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4">
                    <img src={feature.icon} alt="" className="h-12 w-12" />
                  </div>
                </div>
                <div className="p-6 flex flex-col items-center justify-center text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{feature.name}</h3>
                  <p className="mb-6 italic text-center text-black">{feature.description}</p>
                  <a 
                    href="#" 
                    className="text-primary-400 font-medium hover:text-primary-300 transition-colors flex items-center justify-center"
                  >
                    Learn more
                    <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
