import React from 'react'
import { ProductsContext } from '../context/ProductsContext.js'
import { useContext } from 'react';
import { useParams } from "react-router-dom";
import BuyButton from '../components/BuyButton.js';

export default function ProductDetails() {
    const { lista } = useContext(ProductsContext);
    const { id } = useParams();
    const obj = lista[id];

    return (
        <>
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2">
                        <img src={obj.images[0]} alt='error img' width="100%" id="ProductImg"></img>

                        <div className="small-img-row">
                            <div className="small-img-col">
                                <img src={obj.images[0]}  width="100%" class="small-img" alt='error img'></img>
                            </div>
                            <div className="small-img-col">
                                <img src={obj.images[1]}  width="100%" class="small-img" alt='error img'></img>
                            </div>
                            <div className="small-img-col">
                                <img src={obj.images[2]}  width="100%" class="small-img" alt='error img'></img>
                            </div>
                            <div className="small-img-col">
                                <img src={obj.images[3]}  width="100%" class="small-img" alt='error img'></img>
                            </div>
                        </div>

                    </div>
                    <div className="col-2">
                        <p>{obj.category}</p>
                        <h1>{obj.title}</h1>
                        <h4>${obj.price}</h4>
                        <input type="number" value="1"></input>
                        <BuyButton id={id}></BuyButton>

                        <h3>Product Details <i className="fa fa-indent"></i></h3>
                        <br></br>
                        <p>{obj.description}</p>
                    </div>
                </div>
            </div>
        </>

    )
}
