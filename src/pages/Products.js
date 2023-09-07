import React from 'react'
import Product from '../components/Product.js'
import { ProductsContext } from '../context/ProductsContext.js'
import { useContext } from 'react';
import { CategoriesContext } from '../context/CategoriesContext.js';

function Products(props) {
    const { lista } = useContext(ProductsContext);
    const { categories } = useContext(CategoriesContext);

    return (
        <>
            <div className="small-container">
                <div className="row row-2">
                    <h2>All Products</h2>
                    <select>
                        <option>Default Sort</option>
                        {categories.map(category => (
                            <option>{category}</option>
                        ))}
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
