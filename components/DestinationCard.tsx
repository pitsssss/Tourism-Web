'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Destination } from '@/types';

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-64">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {destination.rating && (
          <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            {destination.rating}
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full">
            {destination.region}
          </span>
          {destination.category && (
            <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
              {destination.category}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 font-playfair">
          {destination.title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {destination.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-gray-500">{destination.location}</span>
          <Link 
            href={`/destinations/${destination.slug}`}
            className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center gap-1 transition-colors"
          >
            Explore <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}