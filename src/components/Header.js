import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <a href="#"><img src="/images/logo.png" alt="logo" width="125px"></img></a>
                    </div>
                    <nav>
                        <ul id="MenuItems">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contacto">Contacto</Link></li>
                        </ul>
                    </nav>
                    <Link to="/Cart"><img src="/images/cart.png" width="30px" height="30px"></img></Link>
                    <img src="/images/menu.png" className="menu-icon" onClick="menutoggle()"></img>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {}

export default Header
