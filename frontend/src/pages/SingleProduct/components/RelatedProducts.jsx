import React from "react";
import { useGetRelatedProductsQuery } from "../../../redux/features/products/productApi";
import { productsData } from "../../../lib/constants/data";
import ProductCard from "../../../components/common/ProductCard";
import LinkCTA from "../../../components/common/buttons/LinkCTA";

function RelatedProducts() {
  const relatedProducts = productsData.slice(0, 4);

  return (
    <div className="mt-[70px] pt-[70px] border-t border-gray">
      <h2 className="font-clashDisplay font-medium text-[32px] lg:text-5xl text-dark-gray-2">
        You might also like
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            title={product.title}
            img={product.image[0]}
            price={product.price}
          />
        ))}
      </div>

      <LinkCTA
        url="/shop"
        label="All Products"
        type="dark"
        additionalStyle="mt-16 mx-auto"
      />
    </div>
  );
}

export default RelatedProducts;
