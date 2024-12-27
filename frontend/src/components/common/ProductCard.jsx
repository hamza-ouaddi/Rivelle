import React from "react";

function ProductCard({ img, title, price }) {
  return (
    <div>
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="rounded-2xl aspect-[4/5] object-cover object-center"
      />
      <div className="font-clashDisplay text-xl lg:text-2xl text-dark-gray-2 flex flex-col lg:flex-row justify-between px-2 mt-3">
        <h5 className="font-normal">{title}</h5>
        <p className="font-medium">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
