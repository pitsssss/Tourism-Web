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
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Cultural Experiences',
    description: 'Immerse yourself in authentic Syrian culture through local cuisine, music, and traditions.',
    icon: '/images/feature2.svg',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Expert Guides',
    description: 'Travel with knowledgeable local guides who bring Syrias stories to life.',
    icon: '/images/feature3.svg',
    image: 'https://images.unsplash.com/photo-1542187171-c04e85e95b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Discover Syria with Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle max-w-3xl mx-auto"
          >
            We offer unique experiences that showcase the best of Syria's rich history, culture, and natural beauty.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card hoverable>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <img src={feature.icon} alt="" className="h-12 w-12" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">{feature.name}</h3>
                  <p className="text-secondary-600 mb-4">{feature.description}</p>
                  <a href="#" className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center">
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