import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { ProductsContext } from '../context/ProductsContext';


export default function BuyButton({id}) {
    const { lista } = useContext(ProductsContext);
    const { cartList, addToCart } = useContext(CarritoContext);
    const obj = lista[id];

    function add(){
        addToCart(obj)
    }
    return (
        <>
            <button class="btn" onClick={() => add()}>Add To Cart</button>
        </>
    )
}
