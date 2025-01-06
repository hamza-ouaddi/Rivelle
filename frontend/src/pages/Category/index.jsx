import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShopBanner from "../../components/common/ShopBanner";
import { productsData, shopBannerContent } from "../../lib/constants/data";
import ProductCard from "../../components/common/ProductCard";

export default function Category() {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const bannerContent = shopBannerContent[category];

  useEffect(() => {
    window.scrollTo(0, 0);

    const filtered = productsData.filter(
      (product) => product.category === category
    );

    setFilteredProducts(filtered);
  }, [category]);

  return (
    <main className="">
      <ShopBanner
        title={category}
        backgroundImage={bannerContent.backgroundImage}
        description={bannerContent.description}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 md:mx-10 lg:mx-16 mt-36">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            img={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
}
