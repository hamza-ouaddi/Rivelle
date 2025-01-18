import React, { Fragment } from "react";
import { Link, useLocation } from "react-router";

function Breadcrumb() {
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split("/");

  const breadcrumbLinks = segments.map((segment, index) => {
    const url = `/${segment}`;

    return (
      <Fragment key={index}>
        {index > 0 && (
          <span className="text-medium-gray-1 text-xl mx-2">›</span>
        )}
        <Link
          to={`${url}`}
          className="capitalize font-clashDisplay text-xl text-medium-gray-1 last:text-dark-gray-2 last:font-medium "
        >
          {segment === "" ? "Home" : segment}
        </Link>
      </Fragment>
    );
  });
  return <div className="mb-4 z-10">{breadcrumbLinks}</div>;
}

export default Breadcrumb;
