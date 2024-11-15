import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.imgSrc} alt={product.name} />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p>Gen: {product.gender} | Age: {product.age}</p>
                <p>Rs. {product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
