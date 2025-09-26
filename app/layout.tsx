import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./styles/animations.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { SEO } from "@/components/ui/SEO";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Syria Explorer - Ancient Wonders, Rich Culture & Timeless Beauty",
  description: "Explore Syria's breathtaking historical sites, vibrant culture, and hidden gems. Read expert travel guides, latest news, and plan your unforgettable journey.",
  keywords: ["Syria tourism", "Visit Syria", "Syria travel guide", "Ancient Syria", "Damascus", "Palmyra", "Syria articles", "Middle East travel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen bg-amber-50">
        <SEO />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}