import React from 'react';
import './Suggestions.css';

const products = [
  { id: 1, name: "Female T-shirts", price: 299, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbxjygOtw9LhmJlVaKPe1tID3au1kTZeFTA&s" },
  { id: 2, name: "Female Tops", price: 599, img: "https://5.imimg.com/data5/EA/UH/MY-7108950/agspl-3041-tt-04-white-l-01-500x500.jpg" },
  { id: 3, name: "Female Jeans", price: 999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_AqMAFxnU1KMW4ytKm0WQ8e3JUH34_XoY7KHwgSU987AppbG5kfcT_cBgO9i-8ny1ZU&usqp=CAU" },
  // Add more product objects as needed
];

const Suggestions = () => {
  return (
    <div className="suggestions">
      <h3>More suggestions</h3>
      <div className="suggestion-grid">
        {products.map(product => (
          <div key={product.id} className="suggestion-item">
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p>Rs. {product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
