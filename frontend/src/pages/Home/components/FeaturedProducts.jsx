import React from "react";
import SectionHeading from "../../../components/common/SectionHeading";
import { productsData } from "../../../lib/constants/data";
import ProductCard from "../../../components/common/ProductCard";
import LinkCTA from "../../../components/common/buttons/LinkCTA";

function FeaturedProducts() {
  return (
    <section className=" mx-4 md:mx-10 lg:mx-16 mt-36">
      <SectionHeading
        title="Featured Products"
        description="Our most popular styles, chosen by our customers for their timeless appeal."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            img={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>

      <LinkCTA
        label="All Products"
        url="/shop"
        type="dark"
        additionalStyle="mt-16 mx-auto"
      />
    </section>
  );
}

export default FeaturedProducts;
