import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    return (
        <header className="header">
            <div className="logo">
               <span><img src="/images/logo.jpg" alt="Paradise Nursery Logo" style={{ width: "40px", height:"40px"}}></img></span> 
                <span><h1>Paradise Nursery</h1></span>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart" className="cart-link">
                    🛒 Cart <span className="cart-count">({totalQuantity})</span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;