import React from "react";
import ProductCTA from "../../../components/common/buttons/ProductCTA";

function OrderSummary({
  selectedItems,
  subtotal,
  taxRate,
  tax,
  shipping,
  totalPrice,
}) {
  return (
    <div className=" lg:col-span-1 p-16 border border-light-gray-2 rounded-lg">
      <h2 className="font-semibold text-[32px] mb-12">Order Summary</h2>
      <div className="flex justify-between pb-5 border-b border-light-gray-3">
        <ul className="text-xl text-medium-gray-1">
          <li>Selected Items:</li>
          <li>Subtotal:</li>
          <li>Estimated Tax ({taxRate * 100}%):</li>
          <li>Estimated Shipping & Handling:</li>
        </ul>

        <ul className="font-medium text-xl text-dark-gray-2 text-right">
          <li>{selectedItems}</li>
          <li>${subtotal}</li>
          <li>${tax.toFixed(2)}</li>
          <li>${shipping}</li>
        </ul>
      </div>

      <ul className="flex justify-between items-center font-medium text-dark-gray-2 mt-8 mb-12 leading-none">
        <li className="text-2xl">Total</li>
        <li className="text-[28px] text-right">${totalPrice.toFixed(2)}</li>
      </ul>

      <ProductCTA label="Checkout now" type="dark" />
    </div>
  );
}

export default OrderSummary;
