import React, { useRef } from 'react';
import './Category.css';

const Category = () => {
    // Array of category data
    const categories = [
        { name: "Jewellery", imgSrc: "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1440,w-1080,cm-pad_resize/catalog/toniq/product/OAW22TIJN88/OAW22TIJN88_1.jpg" },
        { name: "Formal's", imgSrc: "https://images.meesho.com/images/products/388369681/nts8c_512.webp" },
        { name: "Ethnic", imgSrc: "https://vredevogel.com/cdn/shop/files/VV-9219-PURPLE--_6.jpg?v=1692531175&width=1200" },
        { name: "Western", imgSrc: "https://phenav.com/wp-content/uploads/2024/04/Phv_1006-0-scaled.jpg" },
        { name: "Slipper's", imgSrc: "https://img.ltwebstatic.com/images3_pi/2023/07/03/1688363311dc3ff203ec420dd34c04817ab32a3cf6_thumbnail_720x.webp" }
    ];

    // Reference for the scrollable container
    const scrollRef = useRef(null);

    // Scroll function for left and right arrows
    const scroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
    };

    return (
        <div className="category-container">
            <h2>Category</h2>
            <div className="scroll-container">
                <button className="scroll-btn left" onClick={() => scroll(-200)}>&lt;</button>
                <div className="category-grid" ref={scrollRef}>
                    {categories.map((category, index) => (
                        <div className="category-item" key={index}>
                            <img src={category.imgSrc} alt={category.name} />
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
                <button className="scroll-btn right" onClick={() => scroll(200)}>&gt;</button>
            </div>
        </div>
    );
};

export default Category;
