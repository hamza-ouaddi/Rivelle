import React from "react";
import { useState } from "react";
import { IoStar } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import ProductCTA from "../../../components/common/buttons/ProductCTA";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/cart/cartSlice";

function ProductDetails({ productData }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <section className="flex flex-col lg:flex-row justify-between mt-6 md:mt-11">
      <div className="flex flex-col-reverse lg:flex-row gap-2 lg:gap-4 w-full lg:w-1/2">
        <div className="flex flex-row lg:flex-col gap-[10px] lg:gap-4 justify-between">
          {productData.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={productData.title}
              onClick={() => setSelectedImage(index)}
              className={` min-w-[23%] lg:w-52 lg:h-1/4 aspect-square object-cover object-center rounded-lg lg:rounded-2xl cursor-pointer ${
                selectedImage === index ? "" : "opacity-60"
              }`}
            />
          ))}
        </div>

        <div className="flex-1">
          <img
            src={productData.image[selectedImage]}
            alt={productData.title}
            className="aspect-[4/5] lg:aspect-[4/3] w-full h-full object-cover object-center rounded-2xl"
          />
        </div>
      </div>

      <div className="w-full lg:w-[44%] mt-20 lg:mt-0">
        <div className="space-y-4">
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[2px]">
              {[...Array(5)].map((_, index) => (
                <span key={index}>
                  {index < productData.rating ? (
                    <IoStar size={18} className="text-dark-gray-1" />
                  ) : (
                    <IoStar size={18} className="text-gray" />
                  )}
                </span>
              ))}
            </div>
            <span className="font-clashGrotesk text-xl">11 Reviews</span>
          </div>
          <h1 className="font-clashDisplay font-medium text-5xl md:text-7xl leading-none">
            {productData.title}
          </h1>
          <p className="font-clashDisplay font-normal text-4xl leading-none">
            ${productData.price}
          </p>
        </div>

        <div className="font-clashGrotesk mt-12 space-y-2">
          <h3 className="font-medium text-2xl text-dark-gray-1">Description</h3>
          <p className="font-normal text-xl text-gray-2">
            {productData.description}
          </p>
        </div>

        <div className="font-clashGrotesk py-8  mt-8 space-y-2 border-y border-light-gray-1">
          <h3 className="font-medium text-2xl text-dark-gray-1">
            Choose color{" "}
            <IoIosArrowForward size={16} className="inline-block" />
          </h3>

          <div className="flex gap-4">
            {productData.sizes.map((size) => (
              <button
                key={size}
                className="font-medium text-2xl text-dark-gray-1 w-[60px] h-[60px] bg-light-gray-1 p-2 rounded-lg"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pb-8 mt-10 border-b border-light-gray-1">
          <ProductCTA
            label="Add to cart"
            type="dark"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(productData);
            }}
          />
          <ProductCTA label="Checkout now" type="light" />
        </div>

        <div className="flex gap-16 font-clashGrotesk text-base pt-8">
          <ul className="text-medium-gray-1">
            <li>Category</li>
            <li>Type</li>
          </ul>

          <ul className="text-dark-gray-2">
            <li className="capitalize">{productData.category}</li>
            <li className="capitalize">{productData.type}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
