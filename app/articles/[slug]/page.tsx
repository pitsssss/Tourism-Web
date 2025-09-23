// // app/article/page.tsx
// export const dynamic = "force-dynamic"; // 👈 SSR

// import React from "react";
// import Card from "@/components/ui/Card";
// import Navbar from "@/components/ui/Navbar";
// import Footer from "@/components/ui/Footer";

// async function getArticle() {
//   return {
//     title: "Things to Do in Damascus: A Complete Travel Guide",
//     intro:
//       "Damascus, the world’s  oldest continuously inhabited city, offers a unique blend of history, culture, and authentic Middle Eastern charm. Whether you are a history enthusiast, a food lover, or simply an adventurer, there are countless things to do in Damascus that will leave you inspired.",
//     content: [
//       {
//         heading: "1. Explore the Umayyad Mosque",
//         text: "One of the most iconic landmarks in Damascus, the Umayyad Mosque is a masterpiece of Islamic architecture. Visitors can admire its breathtaking design, historical mosaics, and spiritual significance.",
//       },
//       {
//         heading: "2. Wander Through the Old City Bazaars",
//         text: "The narrow alleys of Damascus are filled with vibrant souks where you can shop for spices, handicrafts, and traditional textiles. The Souq al-Hamidiyyeh is particularly famous for its lively atmosphere and local flavors.",
//       },
//       {
//         heading: "3. Visit the National Museum of Damascus",
//         text: "For those interested in history, the National Museum houses centuries-old artifacts, sculptures, and manuscripts that tell the story of Syria’s rich heritage.",
//       },
//       {
//         heading: "4. Experience Syrian Cuisine",
//         text: "No trip to Damascus is complete without tasting local dishes such as kebabs, hummus, and falafel. Traditional restaurants in the Old City provide an authentic dining experience.",
//       },
//       {
//         heading: "5. Stroll Through Al Azem Palace",
//         text: "A fine example of Ottoman-era architecture, Al Azem Palace offers a glimpse into the lifestyle of Syrian nobility with its courtyards, fountains, and beautifully decorated halls.",
//       },
//     ],
//     conclusion:
//       "From its ancient landmarks to its vibrant culture and delicious cuisine, Damascus is a city that captivates every visitor. If you’re planning your next trip, make sure to add these things to do in Damascus to your itinerary for an unforgettable experience.",
//   };
// }

// export default async function ArticlePage() {
//   const article = await getArticle();

//   return (
//     <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-gray-800 font-sans">
//       {/* Navbar */}
//       <Navbar />

//       {/* Article Content */}
//       <main className="flex-grow container mx-auto px-6 py-12">
//         <Card className="max-w-4xl mx-auto p-10 bg-white shadow-md border border-gray-200 rounded-2xl">
//           {/* Title */}
//           <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">
//             {article.title}
//           </h1>

//           {/* Intro */}
//           <p className="text-lg leading-loose text-gray-700 mb-8 text-justify">
//             {article.intro}
//           </p>

//           {/* Sections */}
//           {article.content.map((section, idx) => (
//             <div key={idx} className="border-t border-gray-200 pt-6 mt-6">
//               <h2 className="text-2xl font-semibold text-blue-800 mb-3">
//                 {section.heading}
//               </h2>
//               <p className="text-lg leading-relaxed text-gray-700 text-justify">
//                 {section.text}
//               </p>
//             </div>
//           ))}

//           {/* Conclusion */}
//           <div className="border-t border-gray-200 mt-8 pt-6">
//             <p className="text-lg leading-loose text-gray-700 text-justify">
//               <strong className="text-blue-700">Conclusion:</strong>{" "}
//               {article.conclusion}
//             </p>
//           </div>
//         </Card>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }
import { notFound } from 'next/navigation';
import { articles } from '@/lib/articles';
import { Metadata } from 'next';
import Image from 'next/image';
import SocialShare from '@/components/SocialShare';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';
import { marked } from 'marked';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find(a => a.slug === params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | Discover Syria',
    };
  }

  return {
    title: `${article.title} | Discover Syria`,
    description: article.metaDescription || article.excerpt,
    keywords: [article.title, article.category, 'Syria travel', 'tourism guide', 'cultural insights'].join(', '),
    openGraph: {
      title: `${article.title} | Discover Syria`,
      description: article.metaDescription || article.excerpt,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Discover Syria`,
      description: article.metaDescription || article.excerpt,
      images: [article.image],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription || article.excerpt,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Discover Syria",
      "logo": {
        "@type": "ImageObject",
        "url": "https://discoversyria.com/images/logo.png"
      }
    },
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt || article.publishedAt,
    "articleSection": article.category,
    "url": `https://discoversyria.com/articles/${article.slug}`
  };

  // Convert markdown to HTML if needed
  const contentHtml = typeof article.content === 'string' ? 
    marked.parse(article.content) : article.content;

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px]">
        <Image
          src={article.image}
          alt={article.title}
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
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {article.readTime} min read
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-emerald-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm">
            <Link href="/" className="text-emerald-600 hover:text-emerald-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/articles" className="text-emerald-600 hover:text-emerald-800">Articles</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{article.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatedSection animationType="fade-up">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-emerald-600 font-medium">
                    <Tag className="w-5 h-5" />
                    {article.category}
                  </div>
                  <span className="text-gray-600">By {article.author}</span>
                </div>

                {/* Article Content */}
                <article className="prose prose-lg max-w-none">
                  <div 
                    dangerouslySetInnerHTML={{ __html: contentHtml }} 
                    className="text-lg text-gray-700 leading-relaxed"
                  />
                </article>

                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className="mt-12 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>

            {/* Social Share */}
            <AnimatedSection animationType="fade-up" className="mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Share this article</h3>
                <SocialShare 
                  title={article.title}
                  url={`https://discoversyria.com/articles/${article.slug}`}
                  description={article.excerpt}
                />
              </div>
            </AnimatedSection>

            {/* Author Bio */}
            <AnimatedSection animationType="fade-up" className="mt-12">
              <div className="bg-emerald-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">About the Author</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{article.author}</h4>
                    <p className="text-gray-600">{article.authorBio}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Popular Articles */}
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Articles</h3>
              <div className="space-y-4">
                {articles
                  .sort(() => 0.5 - Math.random())
                  .slice(0, 5)
                  .map((popular, index) => (
                    <Link 
                      key={popular.slug}
                      href={`/articles/${popular.slug}`}
                      className="block hover:bg-gray-50 rounded-lg p-3 transition-colors"
                    >
                      <h4 className="font-medium text-gray-800 text-sm line-clamp-2">
                        {popular.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(popular.publishedAt).toLocaleDateString()}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {Array.from(new Set(articles.map(a => a.category))).map((category, index) => (
                  <Link 
                    key={index}
                    href={`/articles?category=${category}`}
                    className="block px-3 py-2 hover:bg-emerald-50 rounded text-sm text-gray-700 transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-emerald-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-sm opacity-90 mb-4">
                Get the latest articles and travel tips delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-3 rounded text-gray-800 text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-emerald-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for SSG
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}