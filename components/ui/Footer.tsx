'use client';   

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Explore",
      links: [
        { name: "Destinations", href: "/destinations" },
        { name: "Articles", href: "/articles" },
        { name: "News", href: "/news" },
        { name: "Travel Tips", href: "/articles?category=Travel%20Tips" },
      ]
    },
    {
      title: "About",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about#our-team" },
        { name: "Careers", href: "/about#careers" },
        { name: "Partners", href: "/about#partners" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/contact#faq" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ]
    }
  ];

  // ✅ Your actual social media links
  const socialLinks = {
    instagram: "https://www.instagram.com/peter.toss?igsh=emlidDdnaWh5ZzZ5&utm_source=qr",
    facebook: "https://www.facebook.com/share/17BrCs1Fag/?mibextid=wwXIfr",
    linkedin: "https://www.linkedin.com/in/peter-toss?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent font-playfair">
              Explore Syria
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted guide to exploring the rich history, culture, and beauty of Syria. 
              We're dedicated to showcasing Syria's incredible heritage to the world.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center hover:from-amber-700 hover:to-amber-900 transition-all"
                aria-label="Visit us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
             
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center hover:from-amber-700 hover:to-amber-900 transition-all"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center hover:from-amber-700 hover:to-amber-900 transition-all"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h4 className="text-xl font-bold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start space-x-4"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center hover:from-amber-700 hover:to-amber-900 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold mb-1">Email Us</h5>
                <p className="text-gray-300">info@exploresyria.com</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center hover:from-amber-700 hover:to-amber-900 transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold mb-1">Call Us</h5>
                <p className="text-gray-300">+963 930 673 130</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start space-x-4"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center hover:from-amber-700 hover:to-amber-900 transition-all ">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold mb-1">Visit Us</h5>
                <p className="text-gray-300">Damascus, Syria</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-800 p-8 rounded-xl mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-white mb-3"
            >
              Stay Updated
            </motion.h4>

            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest articles, travel tips, and updates on Syrian tourism.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <button
  type="submit"
  className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-semibold py-3 px-6 rounded-lg transition-all whitespace-nowrap shadow hover:shadow-md min-w-[120px]"
>
  Subscribe
</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Explore Syria. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-amber-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}