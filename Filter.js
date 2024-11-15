// src/components/Filter.js
import React from 'react';
import './Filter.css';

const Filter = () => {
    return (
        <div className="filter-container">
            <h3>Filter</h3>
            <div className="category-filter">
                <h4>Category</h4>
                <label><input type="checkbox" /> Jeans</label>
                <label><input type="checkbox" /> Tops</label>
                <label><input type="checkbox" /> T-Shirts</label>
            </div>
            <div className="price-filter">
                <h4>Price</h4>
                <label>Min</label>
                <input type="number" placeholder="Min" />
                <label>Max</label>
                <input type="number" placeholder="Max" />
            </div>
        </div>
    );
};

export default Filter;
