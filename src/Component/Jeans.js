import React, { useState } from "react";
import { FilterContext } from "./FilterContext";
import ProductCard from "./ProductCard";
import DetailedView from "./DetailedView";
import { useContext } from "react";
import { CartContext } from "./CartContext";
const Jeans = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [productView, setProductView] = useState(null);
  const products = [
    {
      id: 1,
      name: "Skinny Jeans",
      price: 999,
      category: "Jeans",
      src: "https://i.pinimg.com/originals/de/7d/94/de7d94b0d137696d93215e39192c8a2f.jpg",
      description:
        "Skinny Jeans with a snug fit and modern design, offering a sleek silhouette and versatile style for casual or dressy occasions.",
      age: "22 - 25",
    },
    {
      id: 2,
      name: "Straight-Leg Jeans",
      price: 1199,
      category: "Jeans",
      src: "https://i.pinimg.com/originals/de/7d/94/de7d94b0d137696d93215e39192c8a2f.jpg",
      description:
        "Classic straight-leg jeans with a relaxed fit, perfect for achieving a timeless and comfortable everyday look.",
      age: "22 - 25",
    },
    {
      id: 3,
      name: "Bootcut Jeans",
      price: 1099,
      category: "Jeans",
      src: "https://i.pinimg.com/originals/de/7d/94/de7d94b0d137696d93215e39192c8a2f.jpg",
      description:
        "Bootcut jeans featuring a slight flare at the hem, ideal for pairing with boots or heels for a stylish look.",
      age: "22 - 25",
    },
    {
      id: 4,
      name: "High-Waisted Jeans",
      price: 1299,
      category: "Jeans",
      src: "https://i.pinimg.com/originals/de/7d/94/de7d94b0d137696d93215e39192c8a2f.jpg",
      description:
        "High-waisted jeans that enhance your silhouette and provide a chic, vintage-inspired style.",
      age: "22 - 25",
    },
    {
      id: 5,
      name: "Flared Jeans",
      price: 1399,
      category: "Jeans",
      src: "https://i.pinimg.com/originals/de/7d/94/de7d94b0d137696d93215e39192c8a2f.jpg",
      description:
        "Retro flared jeans with a wide leg opening, perfect for creating a bold fashion statement.",
      age: "22 - 25",
    },
    {
      id: 6,
      name: "Boyfriend Jeans",
      price: 1099,
      category: "Jeans",
      src: "https://i.pinimg.com/originals/de/7d/94/de7d94b0d137696d93215e39192c8a2f.jpg",
      description:
        "Boyfriend jeans with a relaxed, laid-back fit for an effortlessly cool and casual style.",
      age: "22 - 25",
    },
    {
      id: 7,
      name: "Wide-Leg Jeans",
      price: 1299,
      category: "Jeans",
      src: "https://i.pinimg.com/originals/de/7d/94/de7d94b0d137696d93215e39192c8a2f.jpg",
      description:
        "Wide-leg jeans with a contemporary design, offering a bold and trendy look for fashion enthusiasts.",
      age: "22 - 25",
    },
    {
      id: 8,
      name: "Cropped Jeans",
      price: 1199,
      category: "Jeans",
      src: "https://www.pinclipart.com/picdir/big/555-5551518_skinny-jeans-png-legs-with-pants-png-clipart.png",
      description:
        "Cropped jeans with a modern fit, perfect for warmer weather and showcasing your favorite footwear.",
      age: "22 - 25",
    },
  ];

  const filters = useContext(FilterContext) || {
    category: [],
    price: { min: 0, max: Infinity },
  };

  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      filters.category.length === 0 ||
      filters.category.includes(product.category);
    const matchesPrice =
      product.price >= filters.price.min && product.price <= filters.price.max;
    return matchesCategory && matchesPrice;
  });

  const viewProduct = (product) => {
    setProductView(product);
  };

  const handleBack = () => {
    setProductView(null);
  };

  return (
    <section style={{ padding: "16px" }}>
      {productView ? (
        <DetailedView product={productView} onBack={handleBack} />
      ) : (
        <>
          <h2
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "24px",
            }}
          >
            Jeans
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                view={() => viewProduct(product)} // To view the product details
                addToCart={() => addToCart(product)} // Add to Cart
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Jeans;
