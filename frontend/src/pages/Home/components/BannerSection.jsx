import React from "react";
import bannerBackground from "../../../assets/images/banner-background.jpg";
import RivelleLogo from "../../../assets/images/rivelle-logo.svg";
import LinkCTA from "../../../components/common/buttons/LinkCTA";

function BannerSection() {
  return (
    <section className="mx-4 md:mx-10 lg:mx-16 mt-36">
      <div
        style={{ backgroundImage: `url(${bannerBackground})` }}
        className="flex justify-end min-h-[75vh] bg-cover bg-no-repeat bg-center p-6 rounded-2xl"
      >
        <div className="font-clashDisplay text-center hidden lg:flex flex-col justify-center items-center gap-8 w-1/2 xl:w-2/5 bg-white-2 bg-opacity-45 backdrop-blur-lg p-16 rounded-lg">
          <img src={RivelleLogo} alt="Rivelle Logo" className="w-32" />
          <h2 className="font-medium text-5xl">
            Save money, save time, and simplify life.
          </h2>
          <p className="font-normal text-2xl">
            Discover your fashion favorites with amazing discounts and
            effortless shopping. Every click brings you closer to stylish
            savings.
          </p>
          <LinkCTA url="/shop" label="Shop now" type="dark" />
        </div>
      </div>

      <div className="font-clashDisplay text-center flex lg:hidden flex-col justify-center items-center gap-8 w-full h-[672px] bg-light-gray-1 mt-4 p-4 md:p-16 rounded-2xl">
        <img src={RivelleLogo} alt="Rivelle Logo" className="w-32" />
        <h2 className="font-medium text-[40px] md:text-5xl leading-none">
          Save money, save time, and simplify life.
        </h2>
        <p className="font-normal text-2xl">
          Discover your fashion favorites with amazing discounts and effortless
          shopping. Every click brings you closer to stylish savings.
        </p>
        <LinkCTA url="/shop" label="Shop now" type="dark" />
      </div>
    </section>
  );
}

export default BannerSection;
