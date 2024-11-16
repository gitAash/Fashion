import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import Cart from "./Cart";
function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#343a40",
        color: "#fff",
      }}
    >
      {/* Logo Section */}
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>StarFashion</div>

      {/* Navigation Links */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/cart"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          Home
        </Link>
        <Link
          to="/services"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          Products
        </Link>
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          Contact
        </a>
      </nav>

      {/* Action Links */}
      <div style={{ display: "flex", gap: "15px" }}>
        <a
          href="#"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1rem",
          }}
          className="search"
        >
          Search
        </a>
        <Link
          to="/cart"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1rem",
          }}
          className="cart"
        >
          <span>Cart Items: {cart.length}</span>
        </Link>
        <a
          href="#"
          style={{
            backgroundColor: "#ffc107",
            color: "#343a40",
            textDecoration: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
          className="get-started"
        >
          Get started
        </a>
      </div>
    </header>
  );
}

export default Navbar;
