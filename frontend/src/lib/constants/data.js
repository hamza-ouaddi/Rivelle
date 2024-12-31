import flexiblePayment from "../../assets/icons/flexible-payment.svg";
import expressDelivery from "../../assets/icons/express-delivery.svg";
import freeReturns from "../../assets/icons/free-returns.svg";

import silkEveningDress from "../../assets/images/products/silk-evening-dress.jpg";
import classicOvercoat from "../../assets/images/products/classic-overcoat.jpg";
import charcoalFormalBlazer from "../../assets/images/products/charcoal-formal-blazer.jpg";
import winterPufferJacket from "../../assets/images/products/winter-puffer-jacket.jpg";
import cozyHoddie from "../../assets/images/products/cozy-hoodie.jpg";
import classicTuxedoSet from "../../assets/images/products/classic-tuxedo-set.jpg";
import highRiseJeans from "../../assets/images/products/high-rise-jeans.jpg";
import denimOverallDress from "../../assets/images/products/denim-overall-dress.jpg";
import turtleneckSweater from "../../assets/images/products/turtleneck-sweater.jpg";
import kidsLoungewearSet from "../../assets/images/products/kids-loungewear-set.jpg";
import sportBomberJacket from "../../assets/images/products/sport-bomber-jacket.jpg";
import fitnessBodysuit from "../../assets/images/products/fitness-bodysuit.jpg";
import executiveSuitSet from "../../assets/images/products/executive-suit-set.jpg";

import womenImage from "../../assets/images/woman-image.jpg";
import menImage from "../../assets/images/man-image.jpg";
import kidsImage from "../../assets/images/kids-image.jpg";

export const products = [
  {
    id: 1,
    title: "Silk Evening Dress",
    price: 129,
    image: silkEveningDress,
    category: "women",
  },
  {
    id: 2,
    title: "Classic Overcoat",
    price: 189,
    image: classicOvercoat,
    category: "men",
  },
  {
    id: 3,
    title: "Charcoal Formal Blazer",
    price: 159,
    image: charcoalFormalBlazer,
    category: "men",
  },
  {
    id: 4,
    title: "Winter Puffer Jacket",
    price: 46,
    image: winterPufferJacket,
    category: "women",
  },
  {
    id: 5,
    title: "Cozy Hoodie",
    price: 46,
    image: cozyHoddie,
    category: "kids",
  },

  {
    id: 6,
    title: "Classic Tuxedo Set",
    price: 299,
    image: classicTuxedoSet,
    category: "men",
  },
  {
    id: 7,
    title: "High-Rise Jeans",
    price: 89,
    image: highRiseJeans,
    category: "women",
  },
  {
    id: 8,
    title: "Denim Overall Dress",
    price: 79,
    image: denimOverallDress,
    category: "kids",
  },
  {
    id: 9,
    title: "Turtleneck Sweater",
    price: 95,
    image: turtleneckSweater,
    category: "men",
  },
  {
    id: 10,
    title: "Kids Loungewear Set",
    price: 49,
    image: kidsLoungewearSet,
    category: "kids",
  },
  {
    id: 11,
    title: "Sport Bomber Jacket",
    price: 129,
    image: sportBomberJacket,
    category: "men",
  },
  {
    id: 12,
    title: "Fitness Bodysuit",
    price: 65,
    image: fitnessBodysuit,
    category: "women",
  },
  {
    id: 13,
    title: "Executive Suit Set",
    price: 259,
    image: executiveSuitSet,
    category: "women",
  },
];

export const features = [
  {
    icon: flexiblePayment,
    title: "Flexible Payment",
    description:
      "With out flexible payment options, you can embrace the latest trends, secure your favorite pieces.",
    alt: "Credit Card Check Icon - Flexible Payment",
  },
  {
    icon: expressDelivery,
    title: "Express Delivery",
    description:
      "Wih Express Delivery, your latest fashion treasures are just a click away from arriving in your hands.",
    alt: "Rocket Icon - Express Delivery",
  },
  {
    icon: freeReturns,
    title: "Free Returns",
    description:
      "If your fashion find doesn’t quite meet your expectations, you can return it free of charge.",
    alt: "Coins on a hand icon - Free Returns",
  },
];

export const shopBannerContent = {
  women: {
    backgroundImage: womenImage,
    description:
      "Discover our curated collection of women's fashion, from elegant dresses to comfortable everyday wear.",
  },
  men: {
    backgroundImage: menImage,
    description:
      "Explore our premium selection of menswear, featuring timeless classics and contemporary styles.",
  },
  kids: {
    backgroundImage: kidsImage,
    description:
      "Browse our playful and practical children's collection, designed for comfort and adventure.",
  },
};
