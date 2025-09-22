import React from 'react';
import Head from 'next/head';
import Hero from '../components/ui/Hero';
import Features from '../components/ui/Features';
import Testimonials from '../components/ui/Testimonials';
import CTA from '../components/ui/CTA';
import Footer from '@/components/ui/Footer';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SyriaExplorer - Discover the Soul of Syria</title>
        <meta name="description" content="Explore Syria's timeless beauty through curated experiences that showcase its rich history, culture, and natural wonders." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      


      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer/>
    </>
  );
}