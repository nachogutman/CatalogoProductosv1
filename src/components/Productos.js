import React, { useState } from 'react';
import Producto from './Producto';

const Productos = ({ products }) => {

    return (
        <section className="productos">
            {products.map(product => (
                <article className="producto" key={product.id}>
                    <img src={`/imgs/${product.brand}-${product.category}-${product.name}.jpg`}></img>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <span className="precio">${product.price}</span>
                    <br></br>
                    <button>Agregar al carrito</button>
                </article>
            ))}
        </section>
    );
};

export default Productos;

