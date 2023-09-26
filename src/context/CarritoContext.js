import React from 'react';
import { useState, useContext } from 'react';
import { createContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

export const CarritoContext = createContext();

export const CarritoProvider = ( props ) => {
    const { lista } = useContext(ProductsContext);
    const obj = lista[0];
    console.log(obj)
    const [cartList, setCartList] = useState([]);

    setCartList([...cartList, obj]);

    <CarritoContext.Provider value={{cartList}}>
        {props.children}
    </CarritoContext.Provider>
}

export default CarritoProvider;