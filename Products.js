// src/Products.js
import React from 'react';
import Filter from './Filter';
import ProductGrid from './ProductGrid';
import Footer from './Footer';
import './App.css';

const Products = () => {
    return (
        <div className="products-page">
            <header>
                <h1>Products</h1>
            </header>
            <div className="main-content">
                <Filter />
                <ProductGrid />
            </div>
            <Footer />
        </div>
    );
};

export default Products;
