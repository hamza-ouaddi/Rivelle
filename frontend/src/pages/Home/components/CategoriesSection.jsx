import React from "react";
import { mainCategoriesWithImages } from "../../../lib/constants/route";
import { Link } from "react-router";

function CategoriesSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-7 w-full px-4 md:px-10 lg:px-16 mt-36">
      {mainCategoriesWithImages.map((category) => (
        <Link
          key={category.label}
          to={category.url}
          className="group relative flex items-end p-8 w-full h-[33vh] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 ease-in-out"
        >
          <div
            style={{ backgroundImage: `url(${category.image})` }}
            className="absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <span className="absolute inset-0 group-hover:block bg-gradient-to-t to-40% from-black/60 to-transparent opacity-0 group-hover:opacity-100 z-0 transition-all duration-500 ease-in-out" />
          <span className="font-clashDisplay font-medium text-[64px] text-white leading-none z-10">
            {category.label}
          </span>
        </Link>
      ))}
    </section>
  );
}

export default CategoriesSection;
