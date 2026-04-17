import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import { productsData } from "../../lib/constants/data";
import ProductDetails from "./components/ProductDetails";
import ReviewsSection from "./components/ReviewsSection";
import RelatedProducts from "./components/RelatedProducts";

export default function SingleProduct() {
  return (
    <main className="px-4 md:px-10 lg:px-16">
      <Breadcrumb />
      <ProductDetails productData={productsData[0]} />
      <ReviewsSection />
      <RelatedProducts />
    </main>
  );
}
