import HeroSection from "@/components/sections/hero-section";
import FeaturedArticles from "@/components/sections/featured-articles";
import LongevityPillars from "@/components/sections/longevity-pillars";
import YouTubeSection from "@/components/sections/youtube-section";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LongevityPillars />
        <FeaturedArticles />
        <YouTubeSection />
      </main>
      <Footer />
    </div>
  );
}
