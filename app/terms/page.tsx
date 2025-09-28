// app/terms/page.tsx
'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div>
  <div 
    className="relative bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px]"
    style={{ backgroundImage: "url('/images/hero/syria-background.jpg')" }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-emerald-700/80"></div>
    <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
      <motion.h1 
        className="text-5xl md:text-6xl font-bold mb-6 font-playfair text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Terms of Service
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Please review these terms before using Explore Syria.
      </motion.p>
    </div>
  </div>
</div>
      {/* Terms Content */}
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
              Effective Date: January 1, 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              By accessing or using the <strong>Explore Syria</strong> website (the “Site”), you agree to comply with and be bound by these Terms of Service (“Terms”). If you do not agree, please refrain from using our Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">2. About Our Service</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              Explore Syria provides informational content about Syria’s cultural heritage, historical sites, travel guides, and tourism updates. Our services are for educational and informational purposes only.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              You agree to use the Site lawfully and responsibly. You must not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li>Use the Site for any illegal or unauthorized purpose.</li>
              <li>Post or transmit harmful, defamatory, or offensive content.</li>
              <li>Attempt to interfere with the Site’s security or functionality.</li>
              <li>Scrape, crawl, or data-mine content without our written permission.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              All content on this Site—including text, images, logos, and design—is the property of Explore Syria or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without explicit permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">5. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              The Site is provided “as is” and “as available.” We do not guarantee the accuracy, completeness, or timeliness of the information provided. Travel conditions in Syria may change rapidly; always verify details with official sources before planning a trip.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              To the fullest extent permitted by law, Explore Syria shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Site or reliance on its content.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">7. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              These Terms are governed by the laws of the Syrian Arab Republic. Any disputes will be subject to the exclusive jurisdiction of the courts in Damascus.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 font-serif">8. Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              For questions about these Terms, please contact us:
            </p>
            <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100">
              <p className="font-semibold text-gray-800">📧 Email:</p>
              <p className="text-gray-700">info@explore-syria.com</p>
            </div>

            <p className="text-gray-600 text-sm mt-8 pt-6 border-t border-gray-100">
              We reserve the right to update these Terms at any time. Continued use of the Site constitutes acceptance of any changes.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}