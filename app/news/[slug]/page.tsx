import { notFound } from 'next/navigation';
import { news } from '@/lib/news';
import { Metadata } from 'next';
import Image from 'next/image';
import SocialShare from '@/components/SocialShare';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { marked } from 'marked';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const newsItem = news.find(n => n.slug === params.slug);
  
  if (!newsItem) {
    return {
      title: 'News Not Found | Discover Syria',
    };
  }

  return {
    title: `${newsItem.title} | Discover Syria`,
    description: newsItem.metaDescription || newsItem.excerpt,
    keywords: [newsItem.title, 'Syria news', 'tourism updates', 'travel advisory'].join(', '),
    openGraph: {
      title: `${newsItem.title} | Discover Syria`,
      description: newsItem.metaDescription || newsItem.excerpt,
      images: newsItem.image ? [
        {
          url: newsItem.image,
          width: 1200,
          height: 630,
          alt: newsItem.title,
        },
      ] : [],
      type: 'article',
      publishedTime: newsItem.publishedAt,
      modifiedTime: newsItem.updatedAt || newsItem.publishedAt,
    },
  };
}

export default function NewsPage({ params }: Props) {
  const newsItem = news.find(n => n.slug === params.slug);

  if (!newsItem) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": newsItem.title,
    "description": newsItem.metaDescription || newsItem.excerpt,
    "image": newsItem.image || "",
    "datePublished": newsItem.publishedAt,
    "dateModified": newsItem.updatedAt || newsItem.publishedAt,
    "url": `https://discoversyria.com/news/${newsItem.slug}`
  };

  // Convert markdown to HTML if needed
  const contentHtml = typeof newsItem.content === 'string' ? 
    marked.parse(newsItem.content) : newsItem.content;

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      {newsItem.image && (
        <div className="relative h-96 md:h-[500px]">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
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
                {newsItem.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {new Date(newsItem.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                {newsItem.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {newsItem.readTime} min read
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {!newsItem.image && (
        <div className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 font-playfair"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {newsItem.title}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-4 text-lg justify-center">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(newsItem.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-blue-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/news" className="text-blue-600 hover:text-blue-800">News</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{newsItem.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animationType="fade-up">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* News Content */}
              <article className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: contentHtml }} 
                  className="text-lg text-gray-700 leading-relaxed"
                />
              </article>

              {/* Source */}
              {newsItem.source && (
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Source: <a href={newsItem.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {newsItem.source}
                    </a>
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatedSection>

          {/* Social Share */}
          <AnimatedSection animationType="fade-up" className="mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Share this news</h3>
              <SocialShare 
                title={newsItem.title}
                url={`https://discoversyria.com/news/${newsItem.slug}`}
                description={newsItem.excerpt}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for SSG
export async function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}