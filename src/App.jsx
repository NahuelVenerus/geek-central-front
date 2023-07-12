import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Searcher from "./commons/Searcher";
import store from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/search" element={<Searcher />} />
      </Routes>
    </Provider>
  );
}

export default App;
