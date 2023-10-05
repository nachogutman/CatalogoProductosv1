import React from 'react';
import { useState, useContext } from 'react';
import { createContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

export const CarritoContext = createContext();

export const CarritoProvider = (props) => {
    const [cartList, setCartList] = useState([]);

    function addToCart(product) {
        setCartList([...cartList, product])
        localStorage.setItem('cartList', JSON.stringify([...cartList, product]))
    }

    function deleteFromCart(index) {
        const temp = [...cartList];
        temp.splice(index, 1);
        setCartList(temp);
        localStorage.setItem('cartList', JSON.stringify(temp))
    }

    return (
        <CarritoContext.Provider value={{ cartList, addToCart, deleteFromCart }}>
            {props.children}
        </CarritoContext.Provider>
    )
}


export default CarritoProvider;