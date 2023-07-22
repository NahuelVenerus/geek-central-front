import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import CustomNavbar from "./components/Navbar";
import Profile from "./components/Profile";
import ProductDetail from "./components/ProductDetail";
import AdminViews from "./components/AdminViews";
import { getUser } from "./services/users/getUser";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";
import EditProduct from "./components/EditProduct";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userPersistenceData = await getUser();
        dispatch(setUser(userPersistenceData));
      } catch (error) {
        console.log("persistence-error", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/admin" element={<AdminViews />} />
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
