'use client';

import { useState, useEffect } from 'react';
import NewsCard from '@/components/NewsCard';
import { motion, AnimatePresence } from 'framer-motion';
import { news } from '@/lib/news';
import type { NewsItem } from '@/types';

export default function NewsPage() {
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 300));
        setAllNews(news);
        setFilteredNews(news);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    let filtered = [...allNews];
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedYear !== 'all') {
      filtered = filtered.filter(item => 
        new Date(item.publishedAt).getFullYear().toString() === selectedYear
      );
    }
    
    filtered.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    
    setFilteredNews(filtered);
  }, [searchTerm, selectedYear, allNews]);

  const years = ['all', ...new Set(allNews.map(n => new Date(n.publishedAt).getFullYear().toString()))].sort().reverse();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-blue-600">Loading news...</div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div>
  <div 
    className="relative bg-cover bg-center bg-no-repeat h-[300px] md:h-[400px]"
    style={{ backgroundImage: "url('/images/hero/syria-background.jpg')" }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-blue-900/80"></div>
    <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
      <motion.h1 
        className="text-5xl md:text-6xl font-bold mb-6 font-playfair text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Syria Tourism News
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Stay updated with the latest developments in Syrian tourism and travel advisories
      </motion.p>
    </div>
  </div>
</div>

      {/* Filters */}
      <div className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 pl-12 pr-4 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full p-4 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
              >
                {years.map(year => (
                  <option key={year} value={year} className="text-gray-900">
                    {year === 'all' ? 'All Years' : year}
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
            Showing {filteredNews.length} of {allNews.length} news items
          </motion.p>

          {/* News Grid */}
          <div className="space-y-8">
            <AnimatePresence>
              {filteredNews.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NewsCard news={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <motion.h3 
                className="text-2xl font-bold text-gray-700 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                No news found
              </motion.h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}