import React from "react";
import "./App.css";
import ProductList from "./Pages/ProductList";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { products } from "./components/data";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./components/Footer";
import WishList from "./Pages/WishList";
import Profile from "./Pages/Profile";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/productItem/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
