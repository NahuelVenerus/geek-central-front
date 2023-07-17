import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import CustomNavbar from "./components/Navbar";
import Profile from "./components/Profile";
import ProductDetail from "./components/ProductDetail";
import AdminViews from "./components/AdminViews";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminViews />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
