import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/category/:category" element={<Category />} />
          <Route
            path="/shop/:category/:productId"
            element={<SingleProduct />}
          />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
