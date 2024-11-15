import React from 'react';
import './ProductDetails1.css';

const ProductDetails1= () => {
  return (
    <div className="product-details">
      <button className="go-back">Go Back</button>
      <div className="main-product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBUv2BNxqvQAUtrNtki0V4ZkE3zTL6yWACA&s" alt="Female Top" className="main-image" />
        <div className="product-info">
          <h2>Female Jeans</h2>
          <p>gen: Female &nbsp;&nbsp; age: 22 - 25</p>
          <h3>Rs. 999.99</h3>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="other-details">
        <h3>Other details</h3>
        <p><strong>Product Name:</strong> Women Jeans</p>
        <p><strong>Gender:</strong> Female</p>
        <p><strong>Age:</strong> 14 - 22</p>
        <p><strong>Size:</strong> M</p>
        <p><strong>Measurement:</strong> <a href="/">Add</a></p>
        <p><strong>Location:</strong> <a href="/">Bangalore</a></p>
        <p><strong>Color:</strong> Blue</p>
        <p><strong>Description:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className="book-now">Book now</button>
      </div>
    </div>
  );
};

export default ProductDetails1;
