// import React from 'react';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 text-black min-h-screen flex justify-center items-center">
//       <div className="container py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="space-y-4 text-center md:text-left">
//             <div className="flex flex-col items-center md:items-start">
//               <img 
//                 className="h-10 w-auto" 
//                 src="/images/favicon.ico" 
//                 alt="SyriaExplorer Logo" 
//               />
//               <span className="mt-2 text-xl font-bold text-black">SyriaExplorer</span>
//             </div>
//             <p className="text-gray-600 text-center md:text-left">
//               Discover the rich history, culture, and beauty of Syria through our curated experiences.
//             </p>
//             <div className="flex justify-center md:justify-start space-x-4">
//               {/* Social icons here */}
//             </div>
//           </div>
          
//           {/* Columns: Destinations, Company, Support */}
//           <div className="text-center md:text-left">
//             <h3 className="text-sm font-semibold leading-6 text-black">Destinations</h3>
//             <ul role="list" className="mt-6 space-y-4">
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Damascus</Link></li>
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Aleppo</Link></li>
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Palmyra</Link></li>
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Latakia</Link></li>
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Tartus</Link></li>
//             </ul>
//           </div>

//           <div className="text-center md:text-left">
//             <h3 className="text-sm font-semibold leading-6 text-black">Company</h3>
//             <ul role="list" className="mt-6 space-y-4">
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">About Us</Link></li>
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Our Team</Link></li>
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Careers</Link></li>
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Press</Link></li>
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Blog</Link></li>
//             </ul>
//           </div>

//           <div className="text-center md:text-left">
//             <h3 className="text-sm font-semibold leading-6 text-black">Support</h3>
//             <ul role="list" className="mt-6 space-y-4">
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Help Center</Link></li>
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Contact Us</Link></li>
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Privacy Policy</Link></li>
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Terms of Service</Link></li>
//               <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Cookie Policy</Link></li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="mt-12 border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-center items-center text-center">
//           <p className="text-xs leading-5 text-gray-600 mb-4 md:mb-0">
//             &copy; {new Date().getFullYear()} SyriaExplorer. All rights reserved.
//           </p>
//           <div className="md:ml-4">
//             <select 
//               id="language" 
//               name="language" 
//               className="block w-full rounded-md border border-gray-400 bg-white py-1.5 pl-3 pr-10 text-black text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
//             >
//               <option>English</option>
//               <option>العربية</option>
//               <option>Français</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

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
            <h3 className="text-3xl font-bold mb-4 font-playfair bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
            Explore Syria
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted guide to exploring the rich history, culture, and beauty of Syria. 
              We're dedicated to showcasing Syria's incredible heritage to the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
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
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
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
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
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
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
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
        <div className="bg-gray-800 p-8 rounded-lg mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-4"
            >
              Stay Updated
            </motion.h4>
            <p className="text-gray-300 mb-6 ">
              Subscribe to our newsletter for the latest articles, travel tips, and updates on Syrian tourism.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-3 rounded text-gray-800 text-sm"
              />
             <div className="flex justify-center w-full">
  <button
    type="submit"
    className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded transition-colors whitespace-nowrap"
  >
    Subscribe
  </button>
</div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Discover Syria. All rights reserved.
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