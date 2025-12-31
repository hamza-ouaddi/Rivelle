import React from "react";
import spotlightImage1 from "../../../assets/images/spotlight-image-01.jpg";
import spotlightImage2 from "../../../assets/images/spotlight-image-02.jpg";
import spotlightImage3 from "../../../assets/images/spotlight-image-03.jpg";
import RivelleLogo from "../../../assets/images/rivelle-logo-white.svg";
import LinkCTA from "../../../components/common/buttons/LinkCTA";

function SpotlightSection() {
  return (
    <section className="font-clashDisplay text-white flex flex-col lg:flex-row gap-4 mx-4 md:mx-10 lg:mx-16 mt-36">
      <div
        style={{ backgroundImage: `url(${spotlightImage1})` }}
        className="flex flex-col justify-between bg-cover bg-[20%] md:bg-left w-full lg:w-[45%] h-[64vh] lg:h-[98vh] p-6 lg:p-8 rounded-2xl"
      >
        <img src={RivelleLogo} alt="Rivelle Logo" className="w-32" />
        <h1 className="font-medium text-[clamp(3rem,5vw,6rem)] w-3/4 xl:w-1/2 leading-none">
          TAKE IT IF YOU LIKE IT
        </h1>
        <p className="font-normal text-[clamp(1.5rem,2vw,2rem)]">
          www.rivelle.com
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full lg:w-[55%]">
        <div
          style={{ backgroundImage: `url(${spotlightImage2})` }}
          className="relative flex justify-center items-end h-[64vh] lg:h-[43%] bg-cover bg-center p-6 lg:p-8 rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20 w-full h-full z-0"></div>
          <h2 className="font-normal text-[clamp(2rem,3.5vw,3rem)] text-center w-full xl:w-2/3 z-10 leading-none">
            Step up your style game, exclusively online.
          </h2>
        </div>
        <div
          style={{ backgroundImage: `url(${spotlightImage3})` }}
          className="flex flex-col justify-end items-start gap-4 h-[64vh] lg:h-[57%] bg-cover bg-[36%] md:bg-center p-6 lg:p-8 rounded-2xl"
        >
          <h1 className="font-medium text-[clamp(3rem,5vw,6rem)] w-full sm:w-4/6 lg:w-[96%] 2xl:w-4/5 leading-none">
            Indulge in exclusive deals
          </h1>
          <p className="font-normal text-[clamp(1.5rem,2vw,2rem)] leading-none">
            Shop now and enjoy <br /> our latest fashion finds.
          </p>
          <LinkCTA url="/shop" label="Shop now" type="white" />
        </div>
      </div>
    </section>
  );
}

export default SpotlightSection;
