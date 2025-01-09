import React from "react";
import { Link } from "react-router";

function ProductCard({ productId, img, title, price, category }) {
  return (
    <Link to={`/shop/${category}/${productId}`}>
      <div>
        <img
          src={img[0]}
          alt={title}
          loading="lazy"
          className="rounded-2xl aspect-[4/5] object-cover object-center"
        />
        <div className="font-clashDisplay text-xl lg:text-2xl text-dark-gray-2 flex flex-col lg:flex-row justify-between px-2 mt-3">
          <h5 className="font-normal">{title}</h5>
          <p className="font-medium">${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
