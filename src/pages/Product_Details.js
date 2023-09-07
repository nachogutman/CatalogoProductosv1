import React from 'react'
import { UserContext } from '../context/userContext.js'
import { useContext } from 'react';
import ListaProvider from '../context/userContext.js';
import { useParams } from "react-router-dom";


export default function Product_Details() {
    const { lista } = useContext(UserContext);
    const { id } = useParams();
    const obj = lista[id];
    console.log(obj)

    return (
        <>
            <div class="small-container single-product">
                <div class="row">
                    <div class="col-2">
                        <img src={obj.images[0]} width="100%" id="ProductImg"></img>

                        <div class="small-img-row">
                            <div class="small-img-col">
                                <img src={obj.images[0]}  width="100%" class="small-img"></img>
                            </div>
                            <div class="small-img-col">
                                <img src={obj.images[1]}  width="100%" class="small-img"></img>
                            </div>
                            <div class="small-img-col">
                                <img src={obj.images[2]}  width="100%" class="small-img"></img>
                            </div>
                            <div class="small-img-col">
                                <img src={obj.images[3]}  width="100%" class="small-img"></img>
                            </div>
                        </div>

                    </div>
                    <div class="col-2">
                        <p>{obj.category}</p>
                        <h1>{obj.title}</h1>
                        <h4>${obj.price}</h4>
                        <input type="number" value="1"></input>
                        <a href="" class="btn">Add To Cart</a>

                        <h3>Product Details <i class="fa fa-indent"></i></h3>
                        <br></br>
                        <p>{obj.description}</p>
                    </div>
                </div>
            </div>
        </>

    )
}
