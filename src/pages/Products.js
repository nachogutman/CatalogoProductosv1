import React from 'react'
import PropTypes from 'prop-types'

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
                    <div className="col-4">
                        <a href="product_details.html"><img src="images/product-1.jpg"></img></a>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src="images/product-2.jpg"></img>
                            <h4>Red Printed T-Shirt</h4>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src="images/product-3.jpg"></img>
                            <h4>Red Printed T-Shirt</h4>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src="images/product-4.jpg"></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src="images/product-5.jpg"></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src="images/product-6.jpg"></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src="images/product-7.jpg"></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src="images/product-8.jpg"></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src="images/product-9.jpg"></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src="images/product-10.jpg"></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src="images/product-11.jpg"></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img src="images/product-12.jpg"></img>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
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
