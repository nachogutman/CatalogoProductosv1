import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Products from './pages/Products';
import Product_Details from './pages/Product_Details';
import Contacto from './pages/Contacto';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/product_details' element={<Product_Details />}></Route>
          <Route path='/contacto' element={<Contacto />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

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
