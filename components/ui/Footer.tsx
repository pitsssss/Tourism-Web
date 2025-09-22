import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black min-h-screen flex justify-center items-center">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <img 
                className="h-10 w-auto" 
                src="/images/favicon.ico" 
                alt="SyriaExplorer Logo" 
              />
              <span className="mt-2 text-xl font-bold text-black">SyriaExplorer</span>
            </div>
            <p className="text-gray-600 text-center md:text-left">
              Discover the rich history, culture, and beauty of Syria through our curated experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Social icons here */}
            </div>
          </div>
          
          {/* Columns: Destinations, Company, Support */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold leading-6 text-black">Destinations</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Damascus</Link></li>
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Aleppo</Link></li>
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Palmyra</Link></li>
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Latakia</Link></li>
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Tartus</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold leading-6 text-black">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Our Team</Link></li>
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Press</Link></li>
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold leading-6 text-black">Support</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm leading-6 text-gray-600 hover:text-black transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-center items-center text-center">
          <p className="text-xs leading-5 text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SyriaExplorer. All rights reserved.
          </p>
          <div className="md:ml-4">
            <select 
              id="language" 
              name="language" 
              className="block w-full rounded-md border border-gray-400 bg-white py-1.5 pl-3 pr-10 text-black text-sm focus:ring-2 focus:ring-primary-500 focus:outline-none"
            >
              <option>English</option>
              <option>العربية</option>
              <option>Français</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
