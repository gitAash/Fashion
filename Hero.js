import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "linear-gradient(120deg, #e3f2fd, #90caf9)",
        padding: "2rem",
      }}
    >
      {/* Hero Content */}
      <div style={{ maxWidth: "500px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Getting the best <span style={{ color: "#0056d2" }}>and</span> latest
          style has never <span style={{ color: "#0056d2" }}>been easier!</span>
        </h1>
        <p style={{ fontSize: "1rem", color: "#555", marginBottom: "1.5rem" }}>
          <strong>StarFashion</strong> is a platform that helps to make fashion
          accessible to all! It brings fashion to your doorstep.
        </p>
        <Link to="/services">
          <button
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#0056d2",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Shop collections
          </button>
        </Link>

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "1rem",
            fontSize: "0.9rem",
            color: "#333",
          }}
        >
          <span>Free Register</span>
          <span>Great Service</span>
          <span>Easy Payment</span>
        </div>
      </div>

      {/* Hero Images */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <img
          src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D"
          alt="Shopping Image 1"
          style={{
            width: "150px",
            height: "auto",
            borderRadius: "15px",
          }}
        />
        <img
          src="https://thumbs.dreamstime.com/b/pregnant-french-woman-coat-taking-overalls-shopping-bag-beige-background-stock-image-pregnant-french-woman-coat-201033704.jpg"
          alt="Shopping Image 2"
          style={{
            width: "150px",
            height: "auto",
            borderRadius: "15px",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
