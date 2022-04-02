import reactDom from "react-dom";
import React from "react";
import App from './App'
import {
    HashRouter,
    Routes,
    Route
  } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CartWindow from "./components/Cart_window";
import ProductWindow from "./components/Product_window";

reactDom.render(
    <HashRouter>
    <Routes>
      <Route path="/" element={<App />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/cart" element={<CartWindow/>} />
        <Route path="/prod_window" element={<ProductWindow/>} />
    </Routes>
  </HashRouter>
   ,
    document.getElementById("root")
)