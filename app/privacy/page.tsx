// app/privacy/page.tsx
'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your trust matters. Learn how we protect your personal information.
          </motion.p>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-600 italic mb-8">
              Last updated: January 1, 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Welcome to <strong>Explore Syria</strong> (“we,” “our,” or “us”). We are deeply committed to safeguarding your privacy and ensuring transparency in how we collect, use, and protect your personal data. This Privacy Policy explains our practices regarding your information when you visit our website, contact us, or engage with our content.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li><strong>Personal Information:</strong> Name, email address, and messages when you contact us.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage patterns via cookies.</li>
              <li><strong>Travel Preferences:</strong> If provided voluntarily (e.g., in feedback forms).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              We use your information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Improve our website content, user experience, and services.</li>
              <li>Analyze traffic and usage trends to enhance performance.</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              We implement industry-standard administrative, technical, and physical safeguards to protect your personal data. While no system is 100% secure, we continuously monitor and update our security practices to minimize risks.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">5. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>Access, correct, or delete your personal information.</li>
              <li>Restrict or object to certain processing activities.</li>
              <li>Request data portability (where applicable).</li>
              <li>Withdraw consent at any time (without affecting prior processing).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">6. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              If you have questions, requests, or concerns about this Privacy Policy or your personal data, please reach out to us:
            </p>
            <div className="bg-amber-50 p-5 rounded-lg mb-8 border border-amber-100">
              <p className="font-semibold text-gray-800 mb-1">📧 Email:</p>
              <p className="text-gray-700">info@explore-syria.com</p>
              <p className="font-semibold text-gray-800 mt-3 mb-1">📍 Address:</p>
              <p className="text-gray-700">Damascus, Syrian Arab Republic</p>
            </div>

            <p className="text-gray-600 text-sm mt-8 pt-6 border-t border-gray-100">
              By using Explore Syria, you acknowledge and agree to the terms of this Privacy Policy.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}