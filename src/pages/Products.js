import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Product from '../components/Product.js'

function Products(props) {
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
                    <Product></Product>
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
