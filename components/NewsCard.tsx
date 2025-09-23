'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function NewsCard({ news }: { news: any }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl border-l-4 border-blue-600"
    >
      <div className="flex flex-col md:flex-row">
        {news.image && (
          <div className="md:w-1/3 relative h-48 md:h-auto">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        
        <div className="p-6 flex-grow flex flex-col md:w-2/3">
          <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            {new Date(news.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </div>
          
          {news.category && (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full w-fit mb-3">
              {news.category}
            </span>
          )}
          
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 font-playfair hover:text-blue-600 transition-colors">
            <Link href={`/news/${news.slug}`}>
              {news.title}
            </Link>
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
            {news.excerpt}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            {news.source && (
              <span className="text-xs text-gray-500">Source: {news.source}</span>
            )}
            <Link 
              href={`/news/${news.slug}`}
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 transition-colors"
            >
              Read more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}