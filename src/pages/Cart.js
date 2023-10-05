import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { CarritoContext } from '../context/CarritoContext';
import { useContext } from 'react';
import Product from '../components/Product';
import { CategoriesContext } from '../context/CategoriesContext.js';
import { useState } from 'react';

function Cart(props) {
    const { cartList, addToCart, deleteFromCart } = useContext(CarritoContext);

    return (
        <>
            <div className="small-container">
                <div className="row row-2">
                    <h2>Cart</h2>
                </div>
                {cartList.map((product, index)  => (
                    /*
                    (product.category == categorySelected || categorySelected == 'Default Sort') &&
                    <Product rating={product.rating} image1={product.images[0]} price={product.price} title={product.title} id={product.id-1}></Product>*/

                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, .02)',
                        padding: '1%',
                        margin: '1%',
                        borderRadius: '25px'
                        }}>
                <img src={product.images[0]} width="100%" id="ProductImg" style={{ height: '150px', float: 'left', marginRight: '1%', width: 'auto' }}></img>
                <div>
                    <p>{product.category}</p>
                    <h1>{product.title}</h1>
                    <h4 style={{ display: 'inline' }}>${product.price}</h4>
                    <button style={{
                        backgroundColor: 'red',
                        borderRadius: '25%',
                        margin: '1%',
                    }} onClick={() => deleteFromCart(index)}> X </button>
                </div>
            </div>
                ))}
        </div>
        </>
    )
}

Cart.propTypes = {}

export default Cart
