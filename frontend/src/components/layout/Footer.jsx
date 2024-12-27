import React from "react";
import { Link } from "react-router";
import RivelleLogo from "../../assets/images/rivelle-logo-white.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {
  categoriesRoutes,
  customerServices,
  productsRoutes,
  socialMediaLinks,
} from "../../lib/constants/route";

function Footer() {
  return (
    <footer className="font-clashDisplay flex justify-between flex-col lg:flex-row gap-16 bg-dark-gray-2 px-5 md:px-16 py-[120px] mt-36">
      <div className="max-w-[440px] space-y-4">
        <Link to="/">
          <img src={RivelleLogo} alt="Rivelle Logo" className="w-[404px]" />
        </Link>
        <p className="text-xl text-medium-gray-1">
          Don’t miss out on the latest fashion updates! Subscribe for exclusive
          deals, trend insights, and all things Rivelle delivered to you.
        </p>

        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent text-sm text-white-2 placeholder-medium-gray-1 border-2 border-gray rounded-full pl-4 py-3 focus:outline-none focus:bg-dark-gray-1 transition-all caret-white"
          />

          <button
            aria-label="Subscribe"
            className="absolute right-2 top-2 w-8 h-8 bg-medium-gray-1 rounded-full"
          >
            <HiOutlineArrowNarrowRight
              size={14}
              color="white"
              className="mx-auto"
            />
          </button>
        </div>
      </div>

      <div className="font-normal flex items-center md:items-start flex-col md:flex-row gap-16 xl:gap-28 text-xl text-medium-gray-1 ">
        <ul className="leading-[100%] text-center md:text-left">
          <li className="font-medium text-white text-2xl mb-6 leading-[100%]">
            Categories
          </li>
          {categoriesRoutes.map((category) => (
            <li className="mb-3">
              <Link key={category.label} to={category.url}>
                {category.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="leading-[100%] text-center md:text-left">
          <li className="font-medium text-white text-2xl mb-6 leading-[100%]">
            Products
          </li>
          {productsRoutes.map((product) => (
            <li className="mb-3">
              <Link key={product.label} to={product.url}>
                {product.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="leading-[100%] text-center md:text-left">
          <li className="font-medium text-white text-2xl mb-6 leading-[100%]">
            Customer Services
          </li>
          {customerServices.map((service) => (
            <li className="mb-3">
              <Link key={service.label} to={service.url}>
                {service.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="leading-[100%] text-center md:text-left">
          <li className="font-medium text-white text-2xl mb-6 leading-[100%]">
            Follow Us
          </li>
          {socialMediaLinks.map((socialMedia) => (
            <li className="mb-3">
              <Link key={socialMedia.label} to={socialMedia.url}>
                {socialMedia.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
