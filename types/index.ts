// /src/types/index.ts
export interface Destination {
  slug: string;
  title: string;
  location: string;
  region: string;
  category: string;
  image: string;
  gallery: string[];
  coordinates?: {
    lat: number;
    lng: number;
    // name:string;
    // content:string;
  };
  rating?: number;
  description: string;
  history: string;
  openingHours: string;
  entryFee: string;
  bestTimeToVisit: string;
  accessibility: string;
  tips: string[];
  metaDescription: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorBio: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  category: string;
  tags?: string[];
  metaDescription: string;
  source?: string;
  sourceUrl?: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  category?: string;
  publishedAt: string;
  updatedAt?: string;
  readTime?: string;
  source?: string;
  sourceUrl?: string;
  metaDescription: string;
}