'use client';

import { useState, useEffect } from 'react';
import DestinationCard from '@/components/DestinationCard';
import { motion, AnimatePresence } from 'framer-motion';
import { destinations } from '@/lib/destinations';
import type { Destination } from '@/types';


export default function DestinationsPage() {
  // const [allDestinations, setAllDestinations] = useState([]);
  // const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [allDestinations, setAllDestinations] = useState<Destination[]>([]);
const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 300));
        setAllDestinations(destinations);
        setFilteredDestinations(destinations);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setIsLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  useEffect(() => {
    let filtered = [...allDestinations];
    
    if (searchTerm) {
      filtered = filtered.filter(dest => 
        dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedRegion !== 'all') {
      filtered = filtered.filter(dest => dest.region === selectedRegion);
    }
    
    setFilteredDestinations(filtered);
  }, [searchTerm, selectedRegion, allDestinations]);

  const regions = ['all', ...new Set(allDestinations.map(d => d.region))];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-amber-600">Loading destinations...</div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore Syria's Treasures
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From ancient ruins to vibrant markets, discover the wonders that await you in Syria
          </motion.p>
        </div>
      </div>

      {/* Filters */}
      <div className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 pl-12 pr-4 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-64">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-4 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 bg-white"
              >
                {regions.map(region => (
                  <option key={region} value={region} className="text-gray-900">
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Showing {filteredDestinations.length} of {allDestinations.length} destinations
          </motion.p>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <DestinationCard destination={destination} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <motion.h3 
                className="text-2xl font-bold text-gray-700 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                No destinations found
              </motion.h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}