'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Article } from '@/types';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-48">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readTime} min read
          </div>
        </div>
        
        <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full w-fit mb-3">
          {article.category}
        </span>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 font-playfair hover:text-emerald-600 transition-colors">
          <Link href={`/articles/${article.slug}`}>
            {article.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-gray-500">By {article.author}</span>
          <Link 
            href={`/articles/${article.slug}`}
            className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1 transition-colors"
          >
            Read more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}