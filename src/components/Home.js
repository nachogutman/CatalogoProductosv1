import React from 'react'
import { Link } from "react-router-dom";

export default function Home({ products }) {
    return (
        <div className="App">
            <header>
                <h1>Kickz and Dickz</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Productos">Productos</Link>
                </nav>


            </header>

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

            <footer>
                <p>&copy; {new Date().getFullYear()} Kickz and Dickz. Todos los derechos reservados.</p>
            </footer>
        </div>
    )
}
