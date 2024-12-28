import React from "react";
import { Link } from "react-router";

function LinkCTA({ label, url, type, additionalStyle }) {
  return (
    <Link
      to={url}
      className={`font-clashDisplay font-normal text-2xl block w-fit px-[30px] py-[10px] border border-dark-gray-2 rounded-full leading-none ${additionalStyle} ${
        type === "dark"
          ? "text-dark-gray-2 border-dark-gray-2"
          : "text-white border-white"
      }`}
    >
      {label}
    </Link>
  );
}

export default LinkCTA;
