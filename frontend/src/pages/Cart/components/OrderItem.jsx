import React from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../../redux/features/cart/cartSlice";

function OrderItem({ products }) {
  const dispatch = useDispatch();

  const handleQuantityUpdate = (id, type) => {
    dispatch(updateQuantity({ id, type }));
  };

  return (
    <table className="w-full text-left rtl:text-right lg:col-span-2 h-fit">
      <thead className="text-sm md:text-xl text-medium-gray-1 border-b border-medium-gray-1 uppercase">
        <tr>
          <th className="font-medium pb-5 pl-[50px]">Product</th>
          <th className="font-medium pb-5 pr-2">Quantity</th>
          <th className="font-medium pb-5 pr-2">Price</th>
          <th className="font-medium pb-5 pr-2">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id} className="border-b border-light-gray-2">
            <td className="flex flex-col md:flex-row items-start md:items-center gap-4 w-max py-6 pl-5">
              <button>
                <IoIosClose size={24} className="text-medium-gray-1" />
              </button>

              <img
                src={item.image[0]}
                alt={item.title}
                className="w-32 aspect-[4/5] object-cover object-center rounded-lg"
              />
              <div>
                <h3 className="font-clashDisplay font-medium text-xl md:text-2xl text-dark-gray-2 leading-5">
                  {item.title}
                </h3>
                <div className="font-normal text-sm md:text-base text-gray leading-5 mt-2">
                  <p>Type: {item.type}</p>
                  <p>Category: {item.category}</p>
                </div>
              </div>
            </td>

            <td className="py-6">
              <div className="flex items-center gap-1">
                <button
                  disabled={item.quantity === 1}
                  onClick={() => handleQuantityUpdate(item.id, "decrease")}
                  className={`w-8 h-8 flex items-center justify-center transition-all duration-300 ease-in-out border border-light-gray-2 rounded-full ${
                    item.quantity === 1
                      ? "bg-light-gray-1 hover:bg-light-gray-1 opacity-50"
                      : "hover:bg-light-gray-2 hover:border-light-gray-3"
                  }`}
                >
                  <IoIosArrowBack />
                </button>
                <span className="font-medium text-base min-w-5 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleQuantityUpdate(item.id, "increase")}
                  className="w-8 h-8 flex items-center justify-center hover:bg-light-gray-2 border border-light-gray-2 hover:border-light-gray-3 transition-all duration-300 ease-in-out rounded-full"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </td>

            <td className="text-base md:text-2xl py-6">${item.price}</td>
            <td className="font-medium text-base md:text-2xl py-6">
              ${item.price * item.quantity}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderItem;
