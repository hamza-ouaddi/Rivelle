import React, { useEffect, useState } from "react";
import ShopBanner from "../../components/common/ShopBanner";
import shopBackground from "../../assets/images/shop-background.jpg";
import ShopFilters from "./components/ShopFilters";
import { productsData } from "../../lib/constants/data";
import ProductCard from "../../components/common/ProductCard";

const filters = {
  categories: {
    type: "link",
    options: [
      { value: "all", label: "All", isUnderlined: true },
      { value: "women", label: "Women" },
      { value: "men", label: "Men" },
      { value: "kids", label: "Kids" },
    ],
  },
  types: {
    type: "link",
    options: [
      { value: "all", label: "All", isUnderlined: true },
      { value: "jacket", label: "Jacket" },
      { value: "coat", label: "Coat" },
      { value: "suit", label: "Suit" },
      { value: "shirt", label: "Shirt" },
      { value: "pants", label: "Pants" },
      { value: "dress", label: "Dress" },
      { value: "t-shirt", label: "T-shirt" },
      { value: "sweater", label: "Sweater" },
      { value: "hoodie", label: "Hoodie" },
    ],
  },
  price: {
    type: "checkbox",
    options: [
      { value: "all", label: "All Prices" },
      { value: "0-99", label: "$0 - 99" },
      { value: "100-199", label: "$100 - 199" },
      { value: "200-299", label: "$200 - 299" },
      { value: "300-399", label: "$300 - 399" },
      { value: "400", label: "$400+" },
    ],
  },
};

export default function Shop() {
  const [products, setProducts] = useState(productsData);
  const [filtersState, setFiltersState] = useState({
    category: "all",
    type: "all",
    priceRange: "all",
  });

  const applyFilters = () => {
    let filteredProducts = productsData;

    if (filtersState.category && filtersState.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filtersState.category
      );
    }

    if (filtersState.type && filtersState.type !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.type === filtersState.type
      );
    }

    if (filtersState.priceRange && filtersState.priceRange !== "all") {
      const [minPrice, maxPrice] = filtersState.priceRange
        .split("-")
        .map(Number);

      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filtersState]);

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
            Showing {products.length} products.
          </h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 mt-10">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                title={product.title}
                img={product.image}
                price={product.price}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
