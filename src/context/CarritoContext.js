import React from 'react';
import { useState, useContext } from 'react';
import { createContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

export const CarritoContext = createContext();

export const CarritoProvider = (props) => {
    const [cartList, setCartList] = useState([]);

    function addToCart(product){
        setCartList([...cartList, product])
    }

    return (
        <CarritoContext.Provider value={{ cartList, addToCart }}>
            {props.children}
        </CarritoContext.Provider>
    )
}


export default CarritoProvider;