import React from "react";
import { features } from "../../../lib/constants/data";

function FeaturesSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-10 lg:px-16 mt-36">
      {features.map((feature, index) => (
        <div
          key={index}
          className="font-clashDisplay text-center flex flex-col items-center gap-[10px] w-full sm:w-1/2 md:w-[30%] lg:w-1/4"
        >
          <img src={feature.icon} alt={feature.alt} />
          <h4 className="font-medium text-4xl leading-none text-dark-gray-2">
            {feature.title}
          </h4>
          <p className="text-2xl text-medium-gray-1">{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default FeaturesSection;
