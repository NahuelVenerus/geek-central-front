import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import FakeProducts from "./seeders/FakeProducts";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
