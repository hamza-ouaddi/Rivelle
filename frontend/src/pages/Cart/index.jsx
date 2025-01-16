import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "./components/OrderItem";
import OrderSummary from "./components/OrderSummary";

export default function Cart() {
  const {
    products,
    selectedItems,
    subtotal,
    taxRate,
    tax,
    shipping,
    totalPrice,
  } = useSelector((state) => state.cart);
  return (
    <main className="px-4 md:px-10 lg:px-16">
      <h1 className="font-clashDisplay font-semibold text-[54px] md:text-8xl leading-none mt-12 md:mt-28">
        Shopping Cart
      </h1>

      <section className="font-clashGrotesk grid grid-cols-1 lg:grid-cols-3 gap-24  md:mt-36">
        <OrderItem products={products} />

        <OrderSummary
          selectedItems={selectedItems}
          subtotal={subtotal}
          taxRate={taxRate}
          tax={tax}
          shipping={shipping}
          totalPrice={totalPrice}
        />
      </section>
    </main>
  );
}
