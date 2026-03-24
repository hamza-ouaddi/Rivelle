export const filters = {
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
