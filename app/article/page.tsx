// app/article/page.tsx
export const dynamic = "force-dynamic"; // 👈 SSR

import React from "react";
import Card from "@/components/ui/Card";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

async function getArticle() {
  return {
    title: "Things to Do in Damascus: A Complete Travel Guide",
    intro:
      "Damascus, the world’s  oldest continuously inhabited city, offers a unique blend of history, culture, and authentic Middle Eastern charm. Whether you are a history enthusiast, a food lover, or simply an adventurer, there are countless things to do in Damascus that will leave you inspired.",
    content: [
      {
        heading: "1. Explore the Umayyad Mosque",
        text: "One of the most iconic landmarks in Damascus, the Umayyad Mosque is a masterpiece of Islamic architecture. Visitors can admire its breathtaking design, historical mosaics, and spiritual significance.",
      },
      {
        heading: "2. Wander Through the Old City Bazaars",
        text: "The narrow alleys of Damascus are filled with vibrant souks where you can shop for spices, handicrafts, and traditional textiles. The Souq al-Hamidiyyeh is particularly famous for its lively atmosphere and local flavors.",
      },
      {
        heading: "3. Visit the National Museum of Damascus",
        text: "For those interested in history, the National Museum houses centuries-old artifacts, sculptures, and manuscripts that tell the story of Syria’s rich heritage.",
      },
      {
        heading: "4. Experience Syrian Cuisine",
        text: "No trip to Damascus is complete without tasting local dishes such as kebabs, hummus, and falafel. Traditional restaurants in the Old City provide an authentic dining experience.",
      },
      {
        heading: "5. Stroll Through Al Azem Palace",
        text: "A fine example of Ottoman-era architecture, Al Azem Palace offers a glimpse into the lifestyle of Syrian nobility with its courtyards, fountains, and beautifully decorated halls.",
      },
    ],
    conclusion:
      "From its ancient landmarks to its vibrant culture and delicious cuisine, Damascus is a city that captivates every visitor. If you’re planning your next trip, make sure to add these things to do in Damascus to your itinerary for an unforgettable experience.",
  };
}

export default async function ArticlePage() {
  const article = await getArticle();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-gray-800 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Article Content */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <Card className="max-w-4xl mx-auto p-10 bg-white shadow-md border border-gray-200 rounded-2xl">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">
            {article.title}
          </h1>

          {/* Intro */}
          <p className="text-lg leading-loose text-gray-700 mb-8 text-justify">
            {article.intro}
          </p>

          {/* Sections */}
          {article.content.map((section, idx) => (
            <div key={idx} className="border-t border-gray-200 pt-6 mt-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                {section.heading}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 text-justify">
                {section.text}
              </p>
            </div>
          ))}

          {/* Conclusion */}
          <div className="border-t border-gray-200 mt-8 pt-6">
            <p className="text-lg leading-loose text-gray-700 text-justify">
              <strong className="text-blue-700">Conclusion:</strong>{" "}
              {article.conclusion}
            </p>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
