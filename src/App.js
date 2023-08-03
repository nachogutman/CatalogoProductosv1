import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from './components/Productos';
import Home from './components/Home';

function App() {
  const products = [
    {
      id: 1,
      brand: 'Jordan',
      category: '1',
      name: 'Retro High Chicago Lost and Found',
      price: 400,
    },
    {
      id: 2,
      brand: 'Jordan',
      category: '4',
      name: 'Retro Black Cat',
      price: 700,
    },
    {
      id: 3,
      brand: 'Jordan',
      category: '3',
      name: 'Retro White Cement Reimagined',
      price: 300,
    },
    {
      id: 4,
      brand: 'Adidas',
      category: 'Yeezy',
      name: 'Slide Bone',
      price: 180,
    },
    {
      id: 5,
      brand: 'Adidas',
      category: 'Forum',
      name: 'Bad Bunny Back To School',
      price: 400,
    },
    {
      id: 6,
      brand: 'Jordan',
      category: '1',
      name: 'Retro High Travis Scott Mocha',
      price: 1300,
    },
    {
      id: 7,
      brand: 'Nike',
      category: 'Dunk Low',
      name: 'Off-White Lot 3',
      price: 425,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home products={products} />}> Home </Route>
        <Route path="/Productos" element={<Productos product={products} />}> Productos </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
