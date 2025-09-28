import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import RivelleLogo from "../../assets/images/rivelle-logo.svg";
import { navbarRoutes } from "../../lib/constants/route";
import {
  FiSearch,
  FiMenu,
  FiHome,
  FiLogOut,
  FiUser,
  FiGrid,
} from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import LinkCTA from "../common/buttons/LinkCTA";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../redux/features/auth/authApi";
import { logout } from "../../redux/features/auth/authSlice";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [logoutUser] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.auth.user);

  const toggleDropdownMenu = (isDropdownMenuOpen) => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  };

  const dropdownRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownMenuOpen(false);
      }

      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Failed to logout.");
    }
  };

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

        <div className="relative flex justify-center items-center gap-5">
          <FiSearch size={24} />
          <Link to="/cart" className="relative">
            <BsHandbag size={24} />
            <span className="absolute -top-2 -right-2 text-xs w-5 h-5 flex items-center justify-center text-white bg-red-500 rounded-full">
              {products.length}
            </span>
          </Link>

          {user ? (
            <div ref={dropdownRef} className="relative flex">
              <button onClick={() => toggleDropdownMenu(isDropdownMenuOpen)}>
                <img
                  src={
                    user.profilePicture ||
                    `https://ui-avatars.com/api/?name=${user.username}&background=random`
                  }
                  className="w-9 h-9 rounded-full object-cover"
                  alt="Profile picture"
                />
              </button>

              <div
                className={`absolute top-full right-0 flex flex-col gap-3 w-52 bg-white p-4 mt-2 rounded-lg border border-dark-gray-2s transform transition-all duration-300 ease-in-out z-50 ${
                  isDropdownMenuOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <p className="flex items-center gap-2 text-xl text-medium-gray-1">
                  <FiUser />
                  {user.username}
                </p>
                <hr className="border-gray" />
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-xl hover:underline"
                >
                  <FiGrid size={20} />
                  Dashboard
                </Link>
                <Link
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-xl hover:underline"
                >
                  <FiLogOut size={20} />
                  Sign out
                </Link>
              </div>
            </div>
          ) : (
            <LinkCTA
              url="/signin"
              label="Sign in"
              type="dark"
              additionalStyle="hidden md:block"
            />
          )}

          <div ref={navMenuRef} className="relative flex">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FiMenu size={24} className="block md:hidden " />
            </button>
            <div
              className={`absolute top-full right-0 flex flex-col gap-3 w-52 bg-white p-4 mt-3 rounded-lg border border-dark-gray-2s transform transition-all duration-300 ease-in-out z-50 ${
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
                    isActive
                      ? "text-dark-gray-2 underline"
                      : "text-medium-gray-1"
                  }
                >
                  {route.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
