'use client';

import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    content: 'SyriaExplorer completely changed my perspective on Syria. The guides were incredibly knowledgeable and the experiences were authentic and moving. Palmyra at sunset was a moment I\'ll never forget.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    location: 'Dubai, UAE',
    content: 'As someone with Syrian roots, I wanted to reconnect with my heritage. SyriaExplorer helped me discover parts of my culture I never knew existed. The food tour in Damascus was exceptional!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marie Dubois',
    location: 'Paris, France',
    content: 'The attention to detail and safety measures were impressive. Our guide made ancient history come alive. I particularly loved the mosaic workshop in Maaloula - such a unique experience!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            What Travelers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our travelers have to say about their experiences with SyriaExplorer.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card hoverable className="h-full">
                <div className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-secondary-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                      <p className="text-sm text-secondary-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href="#"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            Read more reviews
            <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;