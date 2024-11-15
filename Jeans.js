import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Skinny Jeans', price: 999, category: 'Jeans', age: '22 - 25', image: 'https://tse1.mm.bing.net/th?id=OIP.5l1vP5br-8pEhHq83CVt6gHaJ4&pid=Api&P=0&h=180' },
  { id: 2, name: 'Straight-Leg Jeans', price: 1199, category: 'Jeans', age: '22 - 25', image: 'https://tse1.mm.bing.net/th?id=OIP.5l1vP5br-8pEhHq83CVt6gHaJ4&pid=Api&P=0&h=180' },
  { id: 3, name: 'Bootcut Jeans', price: 1099, category: 'Jeans', age: '22 - 25', image: 'https://tse1.mm.bing.net/th?id=OIP.5l1vP5br-8pEhHq83CVt6gHaJ4&pid=Api&P=0&h=180' },
  { id: 4, name: 'High-Waisted Jeans', price: 1299, category: 'Jeans', age: '22 - 25', image: 'https://tse1.mm.bing.net/th?id=OIP.5l1vP5br-8pEhHq83CVt6gHaJ4&pid=Api&P=0&h=180' },
  { id: 5, name: 'Flared Jeans', price: 1399, category: 'Jeans', age: '22 - 25', image: 'https://tse1.mm.bing.net/th?id=OIP.5l1vP5br-8pEhHq83CVt6gHaJ4&pid=Api&P=0&h=180' },
  { id: 6, name: 'Boyfriend Jeans', price: 1099, category: 'Jeans', age: '22 - 25', image: 'https://tse1.mm.bing.net/th?id=OIP.5l1vP5br-8pEhHq83CVt6gHaJ4&pid=Api&P=0&h=180' },
  { id: 7, name: 'Wide-Leg Jeans', price: 1299, category: 'Jeans', age: '22 - 25', image: 'https://tse1.mm.bing.net/th?id=OIP.5l1vP5br-8pEhHq83CVt6gHaJ4&pid=Api&P=0&h=180' },
  { id: 8, name: 'Cropped Jeans', price: 1199, category: 'Jeans', age: '22 - 25', image: 'https://tse1.mm.bing.net/th?id=OIP.5l1vP5br-8pEhHq83CVt6gHaJ4&pid=Api&P=0&h=180' },
];

const Jeans = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const filteredProducts = products.filter(
    product => product.price >= minPrice && product.price <= maxPrice
  );

  return (
    <div className="app">
      <header>
        <h1>Products</h1>
      </header>
      <div className="container">
        <aside className="sidebar">
          <h2>Filter</h2>
          <div className="category">
            <h3>Category</h3>
            <label>
              <input type="checkbox" checked readOnly /> Jeans
            </label>
          </div>
          <div className="price">
            <h3>Price</h3>
            <label>Min</label>
            <input
              type="number"
              value={minPrice}
              onChange={e => setMinPrice(Math.max(0, Number(e.target.value)))}
            />
            <label>Max</label>
            <input
              type="number"
              value={maxPrice}
              onChange={e => setMaxPrice(Math.min(2000, Number(e.target.value)))}
            />
          </div>
        </aside>
        <main className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Gender: Female</p>
              <p>Age: {product.age}</p>
              <p>Rs. {product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </main>
      </div>
      <footer>
        <div className="footer-section">
          <h3>Sign Up and Save</h3>
          <p>Subscribe to get special offers and discounts</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="footer-section">
          <h3>Location</h3>
          <p>007, James Bond Street, London, England</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About</li>
            <li>FAQ</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Jeans;
