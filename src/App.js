import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import ProductDetails from "./pages/Product_Details";
import Contacto from "./pages/Contacto";
import ListaProvider from "./context/ProductsContext";
import CategoriesProvider from "./context/CategoriesContext";
import CarritoProvider from "./context/CarritoContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <CategoriesProvider>
      <ListaProvider>
        <CarritoProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route
                  path="/product_details/:id"
                  element={<ProductDetails />}
                ></Route>
                <Route path="/contacto" element={<Contacto />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </CarritoProvider>
      </ListaProvider>
    </CategoriesProvider>
  );
}

/*var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px"
  }
  else {
    MenuItems.style.maxHeight = "0px"
  }

}*/

export default App;
