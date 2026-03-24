import React, { useState } from "react";
import {
  FiAlertCircle,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
} from "react-icons/fi";

import ShopBanner from "../../components/common/ShopBanner";
import shopBackground from "../../assets/images/shop-background.jpg";
import ShopFilters from "./components/ShopFilters";
import ProductCard from "../../components/common/ProductCard";
import { useGetAllProductsQuery } from "../../redux/features/products/productApi";
import { filters } from "../../lib/constants/filters";

export default function Shop() {
  const [filtersState, setFiltersState] = useState({
    category: "all",
    type: "all",
    priceRange: "all",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const { category, type, priceRange } = filtersState;
  const [minPrice, maxPrice] = priceRange.split("-").map(Number);

  const {
    data: { products = [], totalPages, totalProducts } = {},
    error,
    isLoading,
  } = useGetAllProductsQuery({
    category: category !== "all" ? category : "",
    type: type !== "all" ? type : "",
    minPrice: isNaN(minPrice) ? "" : minPrice,
    maxPrice: isNaN(maxPrice) ? "" : maxPrice,
    page: currentPage,
    limit: 12,
  });

  return (
    <main>
      <ShopBanner
        backgroundImage={shopBackground}
        title="Shop"
        description="Find Your Perfect Look with Our Exclusive Collection"
      />

      <section className="flex flex-col md:flex-row justify-between gap-10  mx-4 md:mx-10 lg:mx-16 mt-36">
        <ShopFilters
          filters={filters}
          filtersState={filtersState}
          setFiltersState={setFiltersState}
        />

        <div className="w-full md:w-4/5">
          <h5 className="font-clashDisplay font-medium text-2xl leading-none text-dark-gray-2">
            {isLoading ? (
              <div className="h-8 w-1/4 bg-stone-200 rounded-full animate-pulse"></div>
            ) : (
              `Showing ${(currentPage - 1) * 12 + 1} to ${Math.min(currentPage * 12, totalProducts)} out of ${totalProducts}`
            )}
          </h5>

          {error && (
            <div className="flex flex-col items-center justify-center mt-20 gap-5 text-center">
              <div className="bg-red-100 rounded-full p-6 shadow-sm">
                <FiAlertCircle className="text-4xl text-red-400" />
              </div>
              <h3 className="text-2xl font-clashDisplay font-medium text-gray-700">
                Something went wrong
              </h3>
              <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                We had trouble loading the products. Please try again in a
                moment.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 border border-gray-200 text-gray-600 px-8 py-3 rounded-full text-sm hover:bg-gray-50 shadow-sm transition"
              >
                Try Again
              </button>
            </div>
          )}

          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 mt-10">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex flex-col gap-3 animate-pulse">
                  <div className="aspect-[4/5] bg-stone-200 rounded-3xl"></div>
                  <div className="h-4 w-2/3 bg-stone-200 rounded-full"></div>
                  <div className="h-4 w-1/3 bg-stone-200 rounded-full"></div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 mt-10">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard
                    key={product._id}
                    productId={product._id}
                    title={product.name}
                    img={product.images?.[0]}
                    price={product.price}
                    category={product.category}
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center col-span-3 mt-20 gap-5 text-center">
                  <div className="bg-light-gray-1 rounded-full p-6 shadow-sm">
                    <FiSearch className="text-4xl text-gray" />
                  </div>
                  <h3 className="text-2xl font-clashDisplay font-medium text-gray-700">
                    No products found
                  </h3>
                </div>
              )}
            </div>
          )}

          {!isLoading && !error && (
            <div className="flex justify-center items-center gap-2 mt-16 mb-10">
              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage == 1}
                className="w-12 h-12 text-base bg-transparent disabled:bg-light-gray-1 hover:bg-gray border border-light-gray-1 rounded-full"
              >
                <FiChevronLeft className="mx-auto" />
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`text-base boder w-12 h-12 rounded-full ${currentPage == page ? "bg-dark-gray-2 text-white" : "bg-transparent hover:bg-gray border-light-gray-1"}`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage == totalPages}
                className="w-12 h-12 text-base bg-transparent disabled:bg-light-gray-1 hover:bg-gray border border-light-gray-1 rounded-full"
              >
                <FiChevronRight className="mx-auto" />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
