import womenImage from "../../assets/images/woman-image.jpg";
import menImage from "../../assets/images/man-image.jpg";
import kidsImage from "../../assets/images/kids-image.jpg";

export const navbarRoutes = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Shop",
    url: "/shop",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

export const userDropdownMenu = [
  {
    label: "Dashboard",
    url: "/dashboard",
  },
  {
    label: "Profile",
    url: "/dashboard/profile",
  },
  {
    label: "Orders",
    url: "/dashboard/orders",
  },
  {
    label: "Payments",
    url: "/dashboard/payments",
  },
];

export const adminDropdownMenu = [
  {
    label: "Dashboard",
    url: "/dashboard",
  },
  {
    label: "Manage Items",
    url: "/dashboard/manage-items",
  },
  {
    label: "All orders",
    url: "/dashboard/manage-orders",
  },
  {
    label: "Add new post",
    url: "/dashboard/add-post",
  },
];

export const mainCategoriesWithImages = [
  {
    label: "Women",
    url: "/shop/category/women",
    image: womenImage,
  },
  {
    label: "Men",
    url: "/shop/category/men",
    image: menImage,
  },
  {
    label: "Kids",
    url: "/shop/category/kids",
    image: kidsImage,
  },
];

export const categoriesRoutes = [
  {
    label: "Women",
    url: "/women",
  },
  {
    label: "Men",
    url: "/men",
  },
  {
    label: "Kids",
    url: "/kids",
  },
];

export const productsRoutes = [
  {
    label: "Jacket",
    url: "/products/jacket",
  },
  {
    label: "Shirt",
    url: "/products/shirt",
  },
  {
    label: "Pants",
    url: "/products/pants",
  },
  {
    label: "T-Shirt",
    url: "/products/t-shirt",
  },
  {
    label: "Dress",
    url: "/products/dress",
  },
  {
    label: "Suit",
    url: "/products/suit",
  },
  {
    label: "Hoodie",
    url: "/products/hoodie",
  },
  {
    label: "Coat",
    url: "/products/coat",
  },
];

export const customerServices = [
  {
    label: "My Orders",
    url: "/my-orders",
  },
  {
    label: "Shipping and Return",
    url: "/shipping-return",
  },
  {
    label: "Terms and Conditions",
    url: "/products/terms-conditions",
  },
  {
    label: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    label: "FAQ",
    url: "/faq",
  },
];

export const socialMediaLinks = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/",
  },
  {
    label: "Twitter",
    url: "https://x.com/home",
  },
  {
    label: "Pinterest",
    url: "https://www.pinterest.com/",
  },
];
