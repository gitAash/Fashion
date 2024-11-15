import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const products = [
    { name: "Female T-shirt", gender: "Female", age: "22 - 25", price: 299, imgSrc: "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1440,w-1080,cm-pad_resize/catalog/toniq/product/OAW22TIJN88/OAW22TIJN88_1.jpg" },
    { name: "Female T-shirt", gender: "Female", age: "22 - 25", price: 399, imgSrc: "https://images.meesho.com/images/products/388369681/nts8c_512.webp" },
    { name: "Female T-shirt", gender: "Female", age: "22 - 25", price: 499, imgSrc: "https://phenav.com/wp-content/uploads/2024/04/Phv_1006-0-scaled.jpg" },
    { name: "Female T-shirt", gender: "Female", age: "22 - 25", price: 599, imgSrc: "https://vredevogel.com/cdn/shop/files/VV-9219-PURPLE--_6.jpg?v=1692531175&width=1200" },
    { name: "Female T-shirt", gender: "Female", age: "22 - 25", price: 699, imgSrc: "https://img.ltwebstatic.com/images3_pi/2023/07/03/1688363311dc3ff203ec420dd34c04817ab32a3cf6_thumbnail_720x.webp" },
    { name: "Female T-shirt", gender: "Female", age: "22 - 25", price: 799, imgSrc: "https://example.com/tshirt6.jpg" },
    { name: "Female T-shirt", gender: "Female", age: "22 - 25", price: 899, imgSrc: "https://example.com/tshirt7.jpg" },
    { name: "Female T-shirt", gender: "Female", age: "22 - 25", price: 999, imgSrc: "https://example.com/tshirt8.jpg" },
];

const ProductGrid = () => {
    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
