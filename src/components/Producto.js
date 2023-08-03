import React from 'react';

const Producto = ({ product }) => {
    return (
        <article className="producto" key={product.id}>
            <img src={`/imgs/${product.brand}-${product.category}-${product.name}.jpg`}></img>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span className="precio">${product.price}</span>
            <br></br>
            <button>Agregar al carrito</button>
        </article>
    );
};

export default Producto;
