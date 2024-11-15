import React from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
  return (
    <div className="product-details">
      <button className="go-back">Go Back</button>
      <div className="main-product">
        <img src="https://assets.ajio.com/medias/sys_master/root/20230624/zNCV/6496b822eebac147fcfc3154/-473Wx593H-465591174-black-MODEL.jpg" alt="Female Top" className="main-image" />
        <div className="product-info">
          <h2>Female Tops</h2>
          <p>gen: Female &nbsp;&nbsp; age: 22 - 25</p>
          <h3>Rs. 999.99</h3>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="other-details">
        <h3>Other details</h3>
        <p><strong>Product Name:</strong> Women top</p>
        <p><strong>Gender:</strong> Female</p>
        <p><strong>Age:</strong> 14 - 22</p>
        <p><strong>Size:</strong> M</p>
        <p><strong>Measurement:</strong> <a href="/">Add</a></p>
        <p><strong>Location:</strong> <a href="/">Bangalore</a></p>
        <p><strong>Color:</strong> Black</p>
        <p><strong>Description:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className="book-now">Book now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
