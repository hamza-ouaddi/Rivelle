import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CategoriesSection from "./components/CategoriesSection";
import BannerSection from "./components/BannerSection";
import SpotlightSection from "./components/SpotlightSection";
import NewArrivals from "./components/NewArrivals";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewArrivals />
      <SpotlightSection />
      <BannerSection />
      <CategoriesSection />
      <FeaturesSection />
    </main>
  );
}
