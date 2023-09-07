import React from 'react'
import { Link } from "react-router-dom";
import UserContext from '../context/userContext.js'
import { useContext } from 'react';
import ListaProvider from '../context/userContext.js';

function Product() {
    const { lista } = useContext(UserContext);
    console.log(lista)
    return (
        <>
            <div className="col-4">
                <Link to="/product_details"><img src="images/product-1.jpg"></img></Link>
                <h4>Red TShirt</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>

            
        </>
    )
}

export default ListaProvider(Product);