import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Product from '../components/Product.js'
import { UserContext } from '../context/userContext.js'
import { useContext } from 'react';
import ListaProvider from '../context/userContext.js';

function Products(props) {
    const { lista } = useContext(UserContext);

    return (
        <>
            <div className="small-container">
                <div className="row row-2">
                    <h2>All Products</h2>
                    <select>
                        <option>Default Sort</option>
                        <option>Sort By Price</option>
                        <option>Sort By Popularity</option>
                        <option>Sort By Rating</option>
                        <option>Sort By Sale</option>
                    </select>
                </div>
                <div className="row">
                    {lista.map(product => (
                        <Product rating={product.rating} image1={product.images[0]} price={product.price} title={product.title} id={product.id}></Product>
                    ))}
                    
                </div>
                <div className="page-btn">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>&#8594;</span>
                </div>
            </div>
        </>
    )
}

Products.propTypes = {}

export default Products
