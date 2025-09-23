'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-700 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Discover Syria
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your trusted guide to exploring the rich history and culture of Syria
          </motion.p>
        </div>
      </div>

      {/* Mission Section */}
      <AnimatedSection className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6 font-playfair">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Discover Syria, we are dedicated to showcasing the beauty, history, and resilience of Syria to the world. 
                Despite the challenges of recent years, Syria's cultural heritage remains one of the richest in human history.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is to provide accurate, up-to-date information for travelers interested in visiting Syria, 
                while promoting responsible tourism that benefits local communities and helps preserve Syria's incredible heritage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work with local experts, historians, and tourism professionals to bring you the most authentic 
                and comprehensive guide to exploring this ancient land.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <Image
                src="/images/about/mission.jpg"
                alt="Syrian cultural heritage"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-playfair">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate experts behind Discover Syria
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Layla Hassan",
                role: "Founder & Cultural Expert",
                bio: "Born in Damascus, Layla has over 15 years of experience in Syrian tourism and cultural heritage preservation.",
                image: "/images/about/layla.jpg"
              },
              {
                name: "Ahmad Faris",
                role: "Historian & Content Director",
                bio: "PhD in Ancient Near Eastern History, Ahmad ensures our content is accurate and deeply informed.",
                image: "/images/about/ahmad.jpg"
              },
              {
                name: "Yara Khoury",
                role: "Travel Experience Designer",
                bio: "Yara creates unique, authentic travel experiences that connect visitors with local communities.",
                image: "/images/about/yara.jpg"
              },
              {
                name: "Karim Al-Masri",
                role: "Photographer & Visual Storyteller",
                bio: "Karim's stunning photography captures the soul of Syria's landscapes and people.",
                image: "/images/about/karim.jpg"
              },
              {
                name: "Nadia Suleiman",
                role: "Community Outreach Coordinator",
                bio: "Nadia works with local communities to ensure tourism benefits everyone.",
                image: "/images/about/nadia.jpg"
              },
              {
                name: "Omar Taha",
                role: "Digital Strategy & SEO Expert",
                bio: "Omar ensures our platform reaches travelers worldwide with optimized, accessible content.",
                image: "/images/about/omar.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-amber-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-amber-700 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-amber-800 to-amber-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-playfair">Our Core Values</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Authenticity",
                description: "We provide genuine, firsthand information from local experts who know Syria intimately.",
                icon: "🏛️"
              },
              {
                title: "Responsibility",
                description: "We promote tourism that respects local communities, cultures, and environments.",
                icon: "🤝"
              },
              {
                title: "Preservation",
                description: "We support efforts to protect and restore Syria's irreplaceable cultural heritage.",
                icon: "🛡️"
              },
              {
                title: "Accessibility",
                description: "We make information about Syria accessible to travelers from all backgrounds.",
                icon: "🌐"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="opacity-90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-6 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Join Us in Rediscovering Syria
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Whether you're planning a trip, researching Syrian culture, or simply curious about this ancient land, 
            we're here to guide you on your journey.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </AnimatedSection>
    </div>
  );
}