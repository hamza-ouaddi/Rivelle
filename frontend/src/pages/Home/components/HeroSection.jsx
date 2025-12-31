import React from "react";
import heroBackground from "../../../assets/images/hero-background.jpg";
import LinkCTA from "../../../components/common/buttons/LinkCTA";

function HeroSection() {
  return (
    <section
      className="font-clashDisplay text-white relative flex flex-col justify-end h-[88.5vh] bg-cover bg-center px-3 py-11 sm:px-6 sm:py-11 md:p-12 mx-3 rounded-3xl overflow-hidden"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t to-40% from-black/60 to-transparent z-0" />
      <h1 className="font-semibold text-[clamp(1.5rem,5vw,6rem)] z-10 leading-none">
        OUR SPRING COLLECTION
      </h1>

      <div className="flex justify-between flex-col lg:flex-row gap-4 items-start z-10">
        <p className="font-normal text-[clamp(1rem,2vw,2rem)] lg:w-[60%] xl:w-[45%] leading-tight">
          Find out our best spring collection offering our best quality product
          in Rivelle shop.
        </p>

        <LinkCTA url="/shop" label="Shop now" type="white" />
      </div>
    </section>
  );
}

export default HeroSection;
