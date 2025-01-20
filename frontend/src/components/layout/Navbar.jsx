import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import RivelleLogo from "../../assets/images/rivelle-logo.svg";
import { navbarRoutes } from "../../lib/constants/route";
import { FiSearch, FiMenu } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import LinkCTA from "../common/buttons/LinkCTA";
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);

  return (
    <>
      <nav className="font-clashDisplay text-2xl font-normal relative w-full h-[10vh] flex justify-between items-center p-4 md:px-10 md:py-5 lg:px-16 lg:py-5">
        <Link to="/">
          <img src={RivelleLogo} alt="Rivelle Logo" className="min-w-28" />
        </Link>

        <div className="hidden md:flex gap-8 lg:gap-16">
          {navbarRoutes.map((route) => (
            <NavLink
              key={route.label}
              to={route.url}
              className={({ isActive }) =>
                isActive ? "text-dark-gray-2 underline" : "text-medium-gray-1"
              }
            >
              {route.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <FiSearch size={24} />
          <Link to="/cart" className="relative">
            <BsHandbag size={24} />
            <span className="absolute -top-2 -right-2 text-xs w-5 h-5 flex items-center justify-center text-white bg-red-500 rounded-full">
              {products.length}
            </span>
          </Link>
          <LinkCTA
            url="/signin"
            label="Sign in"
            type="dark"
            additionalStyle="hidden md:block"
          />

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FiMenu size={24} className="block md:hidden " />
          </button>
        </div>

        <div
          className={`absolute top-full right-0 flex flex-col gap-3 bg-white p-4 mr-4 w-1/2 rounded-lg border border-dark-gray-2s transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "visible opacity-100 translate-y-0"
              : "invisible opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          {navbarRoutes.map((route) => (
            <NavLink
              key={route.label}
              to={route.url}
              className={({ isActive }) =>
                isActive ? "text-dark-gray-2 underline" : "text-medium-gray-1"
              }
            >
              {route.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
