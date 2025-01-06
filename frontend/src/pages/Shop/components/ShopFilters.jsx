import React, { useState } from "react";
import filterIcon from "../../../assets/icons/filter.svg";
import { IoIosArrowUp } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

function ShopFilters({ filters, filtersState, setFiltersState }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden md:block w-1/6">
        <div className="flex items-center gap-2 border-b pb-2">
          <img src={filterIcon} alt="Filter Icon" />
          <span className="font-clashGrotesk font-medium text-[32px]">
            Filters
          </span>
        </div>

        <div className="font-clashGrotesk space-y-10 mt-10">
          <div>
            <h5 className="font-medium text-2xl uppercase">Categories</h5>
            <div className="text-xl flex flex-col items-start gap-3 mt-5">
              {filters.categories.options.map((category) => (
                <button
                  key={category.value}
                  onClick={() => {
                    setFiltersState((prev) => ({
                      ...prev,
                      category: category.value,
                    }));
                  }}
                  className={`${
                    filtersState.category === category.value
                      ? "font-medium text-dark-gray-2 underline underline-offset-4"
                      : "text-medium-gray-1"
                  } transition-all ease-in-out duration-300`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-medium text-2xl uppercase">Types</h5>
            <div className="text-xl flex flex-col items-start gap-3 mt-5">
              {filters.types.options.map((type) => (
                <button
                  key={type.value}
                  onClick={() =>
                    setFiltersState((prev) => ({
                      ...prev,
                      type: type.value,
                    }))
                  }
                  className={`${
                    filtersState.type === type.value
                      ? "font-medium text-dark-gray-2 underline underline-offset-4"
                      : "text-medium-gray-1"
                  } transition-all ease-in-out duration-300`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-medium text-2xl uppercase">Price</h5>
            <div className="text-xl flex flex-col items-start gap-3 mt-5">
              {filters.price.options.map((price) => (
                <label
                  key={price.value}
                  className="relative flex justify-between items-center w-full cursor-pointer"
                >
                  <span>{price.label}</span>
                  <input
                    type="radio"
                    name="priceRange"
                    value={price.value}
                    checked={filtersState.priceRange === price.value}
                    onChange={() =>
                      setFiltersState((prev) => ({
                        ...prev,
                        priceRange: price.value,
                      }))
                    }
                    className="peer w-6 h-6 border border-medium-gray-1 checked:!bg-dark-gray-1 rounded-xl cursor-pointer transition-all duration-300 ease-in-out appearance-none"
                  />
                  <FaCheck
                    className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity duration-300 ease-in-out"
                    size={12}
                    color="white"
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* For small screens */}
      <div className="md:hidden w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full border-b pb-2"
        >
          <div className="flex items-center gap-2">
            <img src={filterIcon} alt="Filter Icon" />
            <span className="font-clashGrotesk font-medium text-[32px]">
              Filters
            </span>
          </div>
          <IoIosArrowUp
            size={24}
            className={`${
              isOpen ? "rotate-180" : ""
            } transition-all ease-in-out duration-300`}
          />
        </button>

        {isOpen && (
          <div className="font-clashGrotesk space-y-10 mt-10">
            <div>
              <h5 className="font-medium text-2xl uppercase">Categories</h5>
              <div className="text-xl flex flex-col items-start gap-3 mt-5">
                {filters.categories.options.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => {
                      setFiltersState((prev) => ({
                        ...prev,
                        category: category.value,
                      }));
                    }}
                    className={`${
                      filtersState.category === category.value
                        ? "font-medium text-dark-gray-2 underline underline-offset-4"
                        : "text-medium-gray-1"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-medium text-2xl uppercase">Types</h5>
              <div className="text-xl flex flex-col items-start gap-3 mt-5">
                {filters.types.options.map((type) => (
                  <button
                    key={type.value}
                    onClick={() =>
                      setFiltersState((prev) => ({
                        ...prev,
                        type: type.value,
                      }))
                    }
                    className={`${
                      filtersState.type === type.value
                        ? "font-medium text-dark-gray-2 underline underline-offset-4"
                        : "text-medium-gray-1"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-medium text-2xl uppercase">Price</h5>
              <div className="text-xl flex flex-col items-start gap-3 mt-5">
                {filters.price.options.map((price) => (
                  <label
                    key={price.value}
                    className="relative flex justify-between items-center w-full cursor-pointer"
                  >
                    <span>{price.label}</span>
                    <input
                      type="radio"
                      name="priceRange"
                      value={price.value}
                      checked={filtersState.priceRange === price.value}
                      onChange={() =>
                        setFiltersState((prev) => ({
                          ...prev,
                          priceRange: price.value,
                        }))
                      }
                      className="peer w-6 h-6 border border-medium-gray-1 checked:!bg-dark-gray-1 rounded-xl cursor-pointer transition-all duration-300 ease-in-out appearance-none"
                    />
                    <FaCheck
                      className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity duration-300 ease-in-out"
                      size={12}
                      color="white"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ShopFilters;
