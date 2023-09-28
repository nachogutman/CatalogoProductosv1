import React from 'react'
import { Link } from "react-router-dom";


export default function Product({id, title, price, image1, rating}) {
    const link = "/product_details/" + id;
    return (
        <>
            <div className="col-4">
                <Link to={link}><img src={image1} alt='error img'></img></Link>
                <h4>{title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>${price}</p>
            </div>

            
        </>
    )
}
