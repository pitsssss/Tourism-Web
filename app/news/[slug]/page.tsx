'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import SocialShare from '@/components/SocialShare';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, Tag, User } from 'lucide-react';
import { marked } from 'marked';
import { news } from '@/lib/news';
import type { NewsItem } from '@/types';

export default function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const foundNews = news.find(n => n.slug === slug);
        if (!foundNews) {
          notFound();
        }
        setNewsItem(foundNews);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        notFound();
      }
    };
    fetchNews();
  }, [slug]);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dynamic metadata
  useEffect(() => {
    if (newsItem) {
      document.title = `${newsItem.title} | Syria Explorer`;
      
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!metaDescription) {
        metaDescription = document.createElement('meta') as HTMLMetaElement;
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = newsItem.metaDescription || newsItem.excerpt;
    }
  }, [newsItem]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-blue-600">Loading news...</div>
      </div>
    );
  }

  if (!newsItem) {
    notFound();
  }

  const contentHtml = typeof newsItem.content === 'string' ? 
    marked.parse(newsItem.content) : newsItem.content;

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen overflow-hidden">
      {/* Elegant Background Pattern - BLUE THEME */}
      <div className="absolute inset-0 opacity-5">
        {/* Subtle geometric pattern inspired by Syrian architecture */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #2563eb 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #2563eb 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Floating ornamental elements in blue tones */}
        <motion.div 
          className="absolute top-20 left-10 text-blue-300 opacity-20 text-4xl"
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✦
        </motion.div>
        
        <motion.div 
          className="absolute top-40 right-20 text-blue-400 opacity-20 text-3xl"
          animate={{ 
            rotate: [0, -15, 0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          ✧
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 left-1/4 text-blue-500 opacity-15 text-5xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ❖
        </motion.div>
      </div>

      {/* Hero Section with Enhanced Design */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {newsItem.image ? (
          <motion.div 
            className="absolute inset-0"
            style={{ 
              y: scrollY * 0.3 // Subtle parallax
            }}
          >
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900"></div>
        )}
        
        {/* Elegant overlay with Syrian-inspired pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        
        {/* Decorative border elements - BLUE THEME */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-wrap items-center gap-4 text-blue-200 mb-4">
              <motion.span 
                className="inline-flex items-center gap-1 text-sm bg-black/30 px-3 py-1 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Calendar className="w-4 h-4" />
                {new Date(newsItem.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </motion.span>
              {newsItem.readTime && (
                <motion.span 
                  className="inline-flex items-center gap-1 text-sm bg-black/30 px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="w-4 h-4" />
                  {newsItem.readTime} min read
                </motion.span>
              )}
            </div>
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {newsItem.title}
            </motion.h1>
            {newsItem.source && (
              <motion.div 
                className="flex flex-wrap items-center gap-4 text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">Source: {newsItem.source}</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Breadcrumb with Elegant Design - BLUE THEME */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-200 py-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors font-medium">Home</Link>
            <span className="mx-2 text-blue-400">/</span>
            <Link href="/news" className="hover:text-blue-600 transition-colors font-medium">News</Link>
            <span className="mx-2 text-blue-400">/</span>
            <span className="text-gray-900 font-medium">{newsItem.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Reading progress indicator with elegant design - BLUE THEME */}
            <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-20">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                initial={{ width: 0 }}
                animate={{ 
                  width: "0%",
                  transition: { duration: 0.1 }
                }}
                whileInView={{ 
                  width: "100%",
                  transition: { duration: 2, ease: "easeInOut" }
                }}
                viewport={{ once: true }}
              />
            </div>

            <article className="prose prose-xl max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-blue-600 prose-a:hover:text-blue-800 hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-800 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:text-gray-700 prose-blockquote:font-serif prose-blockquote:text-xl prose-img:rounded-xl prose-img:shadow-xl prose-img:my-8 prose-img:border prose-img:border-blue-200 prose-ul:space-y-2 prose-ol:space-y-2 prose-li:text-gray-700 prose-li:text-lg prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:shadow-lg prose-table:w-full prose-table:border-collapse prose-td:border prose-td:border-gray-300 prose-td:p-4 prose-th:border prose-th:border-gray-300 prose-th:p-4 prose-th:bg-blue-100 prose-th:font-semibold prose-hr:border-blue-300">
              <div 
                dangerouslySetInnerHTML={{ __html: contentHtml }} 
                className="text-lg text-gray-700 leading-relaxed"
              />
            </article>

            {/* Source */}
            {newsItem.source && (
              <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-gray-600">
                  Source: <a href={newsItem.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                    {newsItem.source}
                  </a>
                </p>
              </div>
            )}

            {/* Article Footer */}
            <motion.div 
              className="mt-16 pt-8 border-t border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Syria Explorer News Team</h4>
                </div>
                <div className="flex gap-3">
                  <SocialShare 
                    title={newsItem.title}
                    url={`https://syriaexplorer.com/news/${newsItem.slug}`}
                    description={newsItem.excerpt}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <motion.div 
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Table of Contents
                </h3>
                <nav className="space-y-3">
                  {newsItem.content
                    .split('\n')
                    .filter(line => line.startsWith('# ') || line.startsWith('## ') || line.startsWith('### '))
                    .map((heading, index) => {
                      const level = heading.startsWith('### ') ? 3 : heading.startsWith('## ') ? 2 : 1;
                      const text = heading.replace(/^#{1,3}\s*/, '');
                      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      
                      return (
                        <motion.a
                          key={index}
                          href={`#${id}`}
                          className={`block text-sm hover:text-blue-600 transition-colors font-medium ${
                            level === 1 ? 'text-gray-900 pl-0 py-2' : 
                            level === 2 ? 'text-gray-700 pl-3 py-1' : 'text-gray-600 pl-6 py-1'
                          }`}
                          whileHover={{ x: 8, color: '#2563eb' }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          {text}
                        </motion.a>
                      );
                    })}
                </nav>
              </motion.div>

              {/* Recent News */}
              <motion.div 
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Recent News
                </h3>
                <div className="space-y-4">
                  {news
                    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
                    .slice(0, 3)
                    .filter(item => item.slug !== newsItem.slug)
                    .map((recent, index) => (
                      <motion.div
                        key={recent.slug}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link 
                          href={`/news/${recent.slug}`}
                          className="block group hover:bg-blue-50 p-3 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200"
                        >
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2">
                            {recent.title}
                          </h4>
                          <p className="text-xs text-gray-500 flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {new Date(recent.publishedAt).toLocaleDateString()}
                          </p>
                        </Link>
                      </motion.div>
                    ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div 
                className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Stay Updated
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Get the latest news and travel updates delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-3 rounded-xl text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/20 backdrop-blur-sm placeholder:text-white/70"
                  />
                  <motion.button
                    type="submit"
                    className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm backdrop-blur-sm border border-white/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}