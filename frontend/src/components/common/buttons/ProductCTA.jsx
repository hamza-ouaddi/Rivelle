import React from "react";

function ProductCTA({ label, type }) {
  return (
    <button
      className={`font-clashGrotesk font-medium text-xl w-full py-[10px] rounded-full ${
        type === "dark"
          ? "text-white bg-dark-gray-2"
          : type === "light"
          ? "text-dark-gray-2 bg-white border border-gray"
          : ""
      }`}
    >
      {label}
    </button>
  );
}

export default ProductCTA;
