import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CategoriesSection from "./components/CategoriesSection";
import BannerSection from "./components/BannerSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BannerSection />
      <CategoriesSection />
      <FeaturesSection />
    </main>
  );
}
