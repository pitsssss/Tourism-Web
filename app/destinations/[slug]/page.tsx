'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import SocialShare from '@/components/SocialShare';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Destination } from '@/types';

type Props = {
  params: { slug: string };
};

export default function DestinationPage({ params }: Props) {
  const [destination, setDestination] = useState<Destination | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFoundError, setNotFoundError] = useState(false);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        // Fetch destination data from API
        const response = await fetch(`/api/destinations/${params.slug}`);
        
        if (!response.ok) {
          setNotFoundError(true);
          setIsLoading(false);
          return;
        }
        
        const data = await response.json();
        setDestination(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching destination:', error);
        setIsLoading(false);
      }
    };

    fetchDestination();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-amber-600">Loading destination...</div>
      </div>
    );
  }

  if (notFoundError || !destination) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
              {destination.title}
            </h1>
            <p className="text-xl md:text-2xl">{destination.location}</p>
          </motion.div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-amber-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm">
            <Link href="/" className="text-amber-600 hover:text-amber-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/destinations" className="text-amber-600 hover:text-amber-800">Destinations</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{destination.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {destination.description}
                </p>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12 font-playfair">History & Significance</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {destination.history}
                </p>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12 font-playfair">Visitor Information</h2>
                <div className="bg-amber-50 p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Essential Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-gray-700">Opening Hours:</p>
                      <p>{destination.openingHours}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Entry Fee:</p>
                      <p>{destination.entryFee}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Best Time to Visit:</p>
                      <p>{destination.bestTimeToVisit}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Accessibility:</p>
                      <p>{destination.accessibility}</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12 font-playfair">Tips for Visitors</h2>
                <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                  {destination.tips.map((tip, index) => (
                    <li key={index} className="text-lg">{tip}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Gallery */}
            {destination.gallery && destination.gallery.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 font-playfair">Photo Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {destination.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="aspect-square relative overflow-hidden rounded-lg shadow-md"
                    >
                      <Image
                        src={image}
                        alt={`${destination.title} - view ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Social Share */}
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Share this destination</h3>
              <SocialShare 
                title={destination.title}
                url={`https://discoversyria.com/destinations/${destination.slug}`}
                description={destination.description.substring(0, 160)}
              />
            </div>

            {/* Map */}
            {destination.coordinates && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Location</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Map would be displayed here</p>
                </div>
                <p className="mt-4 text-center text-gray-600">{destination.location}</p>
              </div>
            )}

            {/* Related Destinations */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Related Destinations</h3>
              <div className="space-y-4">
                {/* You would fetch related destinations here */}
                <p className="text-gray-500">Related destinations would be loaded here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}