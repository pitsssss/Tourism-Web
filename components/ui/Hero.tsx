// 'use client';

// import React from 'react';
// import Button from './Button';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const Hero = () => {
//   return (
//     <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
//       {/* الخلفية */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
//         style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
//       ></div>
//       {/* تدرج لتوضيح النصوص */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

//       {/* المحتوى */}
//       <div className="relative container mx-auto text-center px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-block mb-6"
//         >
//           <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
//             Discover the Soul of Syria
//           </span>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
//         >
//           Explore Syria's
//           <span className="block text-primary-400">Timeless Beauty</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-10"
//         >
//           Journey through ancient cities, vibrant markets, and breathtaking landscapes. 
//           Experience the rich culture and warm hospitality that define Syria.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           <Button variant="primary" size="lg" className="border border-white text-white hover:bg-white hover:text-indigo-600">
//             Start Exploring
//           </Button>
          
//           <Link href="/article" passHref>
//             <Button variant="primary" size="lg" className="border border-white text-white hover:bg-white hover:text-indigo-600">
//               Read about Syria
//             </Button>
//           </Link>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/80"
//         >
//           <div className="flex items-center">
//             <span className="text-2xl font-bold text-white mr-2">50+</span>
//             <span>Historic Sites</span>
//           </div>
//           <div className="flex items-center">
//             <span className="text-2xl font-bold text-white mr-2">100+</span>
//             <span>Local Experiences</span>
//           </div>
//           <div className="flex items-center">
//             <span className="text-2xl font-bold text-white mr-2">10K+</span>
//             <span>Happy Travelers</span>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="flex flex-col items-center">
//           <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
//           <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/syria-panorama.jpg"
          alt="Panoramic view of ancient Syrian architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Welcome to Syria
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair leading-tight">
              Discover the Cradle of Civilization
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Explore ancient cities, vibrant markets, and breathtaking landscapes that have inspired travelers for millennia. 
              Syria's rich history and warm hospitality await you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Destinations
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
            >
              Read Articles
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}