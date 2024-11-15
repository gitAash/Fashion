import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">StarFashion</div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Contact</a>
            </nav>
            <div className="actions">
                <a href="#" className="search">Search</a>
                <a href="#" className="cart">Cart</a>
                <a href="#" className="get-started">Get started</a>
            </div>
        </header>
    );
}

export default Navbar;
