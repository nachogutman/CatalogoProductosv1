import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { ProductsContext } from '../context/ProductsContext';


export default function BuyButton({id}) {
    const { lista } = useContext(ProductsContext);
    const obj = lista[id];
    function addToCart(){
    }

    return (
        <>
            <a href="" class="btn" onClick={() => addToCart()}>Add To Cart</a>
        </>
    )
}
