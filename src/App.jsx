import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import FakeProducts from "./seeders/FakeProducts";

function App() {
  return (
    <>
      <FakeProducts />
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
