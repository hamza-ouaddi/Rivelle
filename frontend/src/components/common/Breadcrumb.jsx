import React from "react";
import { Link, useLocation } from "react-router";

function Breadcrumb() {
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split("/");

  const breadcrumbLinks = segments.map((segment, index) => {
    const url = `/${segment}`;

    return (
      <>
        <span key={index} className="text-gray-400 mx-2 first:hidden">
          ›
        </span>
        <Link
          key={segment}
          to={`${url}`}
          className="capitalize font-clashDisplay text-xl last:font-medium "
        >
          {segment === "" ? "Home" : segment}
        </Link>
      </>
    );
  });
  return <div className="mb-4 z-10">{breadcrumbLinks}</div>;
}

export default Breadcrumb;
