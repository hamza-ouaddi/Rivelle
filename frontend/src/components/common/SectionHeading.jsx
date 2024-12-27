import React from "react";

function SectionHeading({ title, description }) {
  return (
    <div className="font-clashDisplay text-center mx-auto mb-16 space-y-2">
      <h2 className="font-medium text-5xl text-dark-gray-2 uppercase">
        {title}
      </h2>
      <p className="font-normal text-2xl text-gray w-[88%] md:w-[66%] lg:w-[48%] xl:w-[36%] 2xl:w-[25%] mx-auto">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
