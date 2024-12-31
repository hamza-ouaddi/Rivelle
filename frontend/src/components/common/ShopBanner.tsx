import React from "react";

function ShopBanner({ backgroundImage, title, description }) {
  return (
    <section
      className="font-clashDisplay text-white relative flex flex-col justify-center h-[44.25vh] bg-cover bg-top px-3 sm:px-12 py-10 sm:py-0 rounded-3xl overflow-hidden mx-3"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t to-40% from-black/60 to-transparent z-0" />
      <h1 className="font-semibold text-[54px] md:text-8xl z-10 leading-none capitalize">
        {title}
      </h1>
      <p className="font-normal text-2xl md:text-[32px] lg:w-[60%] xl:w-[45%] leading-tight z-10">
        {description}
      </p>
    </section>
  );
}

export default ShopBanner;
