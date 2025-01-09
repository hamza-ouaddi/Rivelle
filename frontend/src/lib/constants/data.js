import flexiblePayment from "../../assets/icons/flexible-payment.svg";
import expressDelivery from "../../assets/icons/express-delivery.svg";
import freeReturns from "../../assets/icons/free-returns.svg";

import silkEveningDress01 from "../../assets/images/products/silk-evening-dress-01.jpg";
import silkEveningDress02 from "../../assets/images/products/silk-evening-dress-02.jpg";
import silkEveningDress03 from "../../assets/images/products/silk-evening-dress-03.jpg";
import silkEveningDress04 from "../../assets/images/products/silk-evening-dress-04.jpg";
import classicOvercoat from "../../assets/images/products/classic-overcoat.jpg";
import charcoalFormalBlazer from "../../assets/images/products/charcoal-formal-blazer.jpg";
import winterPufferJacket from "../../assets/images/products/winter-puffer-jacket.jpg";
import cozyHoddie from "../../assets/images/products/cozy-hoodie.jpg";
import classicTuxedoSet from "../../assets/images/products/classic-tuxedo-set.jpg";
import highRiseJeans from "../../assets/images/products/high-rise-jeans.jpg";
import denimOverallDress from "../../assets/images/products/denim-overall-dress.jpg";
import turtleneckSweater1 from "../../assets/images/products/turtleneck-sweater-01.jpg";
import turtleneckSweater2 from "../../assets/images/products/turtleneck-sweater-02.jpg";
import turtleneckSweater3 from "../../assets/images/products/turtleneck-sweater-03.jpg";
import turtleneckSweater4 from "../../assets/images/products/turtleneck-sweater-04.jpg";
import turtleneckSweater5 from "../../assets/images/products/turtleneck-sweater-05.jpg";
import kidsLoungewearSet from "../../assets/images/products/kids-loungewear-set.jpg";
import sportBomberJacket from "../../assets/images/products/sport-bomber-jacket.jpg";
import fitnessBodysuit from "../../assets/images/products/fitness-bodysuit.jpg";
import executiveSuitSet1 from "../../assets/images/products/executive-suit-set-01.jpg";
import executiveSuitSet2 from "../../assets/images/products/executive-suit-set-02.jpg";
import executiveSuitSet5 from "../../assets/images/products/executive-suit-set-03.jpg";
import executiveSuitSet3 from "../../assets/images/products/executive-suit-set-04.jpg";
import executiveSuitSet4 from "../../assets/images/products/executive-suit-set-05.jpg";

import womenImage from "../../assets/images/woman-image.jpg";
import menImage from "../../assets/images/man-image.jpg";
import kidsImage from "../../assets/images/kids-image.jpg";

export const productsData = [
  {
    id: 1,
    title: "Silk Evening Dress",
    description:
      "Make a bold statement with our signature powder blue power suit. This expertly tailored two-piece ensemble features a relaxed-fit blazer with notched lapels and matching wide-leg trousers. The contemporary oversized fit combines professional polish with modern style, while premium stretch fabric ensures all-day comfort. Perfect for the confident professional who appreciates sophisticated simplicity.",
    price: 129,
    image: [
      silkEveningDress01,
      silkEveningDress02,
      silkEveningDress03,
      silkEveningDress04,
    ],
    category: "women",
    type: "dress",
    rating: 4,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    title: "Classic Overcoat",
    price: 189,
    image: [classicOvercoat],
    category: "men",
    type: "coat",
  },
  {
    id: 3,
    title: "Charcoal Formal Blazer",
    price: 159,
    image: [charcoalFormalBlazer],
    category: "men",
    type: "suit",
  },
  {
    id: 4,
    title: "Winter Puffer Jacket",
    price: 46,
    image: [winterPufferJacket],
    category: "women",
    type: "jacket",
  },
  {
    id: 5,
    title: "Cozy Hoodie",
    price: 46,
    image: [cozyHoddie],
    category: "kids",
    type: "hoodie",
  },

  {
    id: 6,
    title: "Classic Tuxedo Set",
    price: 299,
    image: [classicTuxedoSet],
    category: "men",
    type: "suit",
  },
  {
    id: 7,
    title: "High-Rise Jeans",
    price: 89,
    image: [highRiseJeans],
    category: "women",
    type: "pants",
  },
  {
    id: 8,
    title: "Denim Overall Dress",
    price: 79,
    image: [denimOverallDress],
    category: "kids",
    type: "dress",
  },
  {
    id: 9,
    title: "Turtleneck Sweater",
    price: 95,
    image: [
      turtleneckSweater1,
      turtleneckSweater2,
      turtleneckSweater3,
      turtleneckSweater4,
      turtleneckSweater5,
    ],
    category: "men",
    type: "sweater",
  },
  {
    id: 10,
    title: "Kids Loungewear Set",
    price: 49,
    image: [kidsLoungewearSet],
    category: "kids",
    type: "shirt",
  },
  {
    id: 11,
    title: "Sport Bomber Jacket",
    price: 129,
    image: [sportBomberJacket],
    category: "men",
    type: "jacket",
  },
  {
    id: 12,
    title: "Fitness Bodysuit",
    price: 65,
    image: [fitnessBodysuit],
    category: "women",
    type: "athletic",
  },
  {
    id: 13,
    title: "Executive Suit Set",
    price: 259,
    image: [
      executiveSuitSet1,
      executiveSuitSet2,
      executiveSuitSet3,
      executiveSuitSet4,
      executiveSuitSet5,
    ],
    category: "women",
    type: "suit",
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
