import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { products } from "../../../lib/constants/data";
import ProductCard from "../../../components/common/ProductCard";
import SectionHeading from "../../../components/common/SectionHeading";

function NewArrivals() {
  return (
    <section className="w-full mt-36">
      <SectionHeading
        title="New Arrivals"
        description="Explore our newest arrivals, where classic meets modern for a look you'll love."
      />

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={4.5}
          breakpoints={{
            320: {
              slidesPerView: 1.35,
            },
            640: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 4.5,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="!pl-4 md:!pl-10 lg:!pl-16 mb-8"
        >
          {products.slice(0, 8).map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                img={product.image}
                title={product.title}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-start gap-2 !pl-4 md:!pl-10 lg:!pl-16 ">
          <button className="swiper-button-prev min-w-11 flex items-center justify-center !text-dark-gray-2 hover:text-gray hover:bg-light-gray-2 border border-dark-gray-2 rounded-full transition-colors after:content-none"></button>
          <button className="swiper-button-next min-w-11 flex items-center justify-center !text-dark-gray-2 hover:text-gray hover:bg-light-gray-2 border border-dark-gray-2 rounded-full transition-colors after:content-none"></button>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
