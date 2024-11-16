import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { FilterContext } from "./FilterContext";
import { useState } from "react";
import DetailedView from "./DetailedView";
import { CartContext } from "./CartContext";

const Jumpsuit = () => {
  const products = [
    {
      id: 1,
      name: "Classic Black Jumpsuit",
      price: 1999,
      category: "Jumpsuits",
      src: "https://cdnd.lystit.com/photos/7e62-2015/12/17/black-halo-black-jordan-jumpsuit-product-2-767948269-normal.jpeg",
      description:
        "A timeless black jumpsuit with a sleek design, perfect for both casual and formal occasions. Made from high-quality materials for comfort and durability.",
    },
    {
      id: 2,
      name: "Floral Print Jumpsuit",
      price: 1799,
      category: "Jumpsuits",
      src: "https://cdnd.lystit.com/photos/7e62-2015/12/17/black-halo-black-jordan-jumpsuit-product-2-767948269-normal.jpeg",
      description:
        "A vibrant floral print jumpsuit that brings a touch of summer to your wardrobe. Lightweight and breathable, ideal for warm days.",
    },
    {
      id: 3,
      name: "Denim Jumpsuit",
      price: 2199,
      category: "Jumpsuits",
      src: "https://cdnd.lystit.com/photos/7e62-2015/12/17/black-halo-black-jordan-jumpsuit-product-2-767948269-normal.jpeg",
      description:
        "A stylish denim jumpsuit with a relaxed fit, featuring a button-up front and pockets. Perfect for a chic, casual look.",
    },
    {
      id: 4,
      name: "Striped Jumpsuit",
      price: 1699,
      category: "Jumpsuits",
      src: "https://cdnd.lystit.com/photos/7e62-2015/12/17/black-halo-black-jordan-jumpsuit-product-2-767948269-normal.jpeg",
      description:
        "A trendy striped jumpsuit with a flattering waist tie and wide legs. Versatile and easy to dress up or down.",
    },
    {
      id: 5,
      name: "Elegant White Jumpsuit",
      price: 2499,
      category: "Jumpsuits",
      src: "https://cdnd.lystit.com/photos/7e62-2015/12/17/black-halo-black-jordan-jumpsuit-product-2-767948269-normal.jpeg",
      description:
        "An elegant white jumpsuit with a tailored fit and sleek design. Perfect for special occasions or a sophisticated evening out.",
    },
    {
      id: 6,
      name: "Boho Style Jumpsuit",
      price: 1599,
      category: "Jumpsuits",
      src: "https://cdnd.lystit.com/photos/7e62-2015/12/17/black-halo-black-jordan-jumpsuit-product-2-767948269-normal.jpeg",
      description:
        "A bohemian-inspired jumpsuit with intricate patterns and a relaxed fit. Great for festivals and casual outings.",
    },
    {
      id: 7,
      name: "Off-Shoulder Jumpsuit",
      price: 1899,
      category: "Jumpsuits",
      src: "https://cdnd.lystit.com/photos/7e62-2015/12/17/black-halo-black-jordan-jumpsuit-product-2-767948269-normal.jpeg",
      description:
        "An off-shoulder jumpsuit that combines style and comfort. Features a cinched waist and flowing legs for a flattering look.",
    },
    {
      id: 8,
      name: "Utility Jumpsuit",
      price: 2099,
      category: "Jumpsuits",
      src: "https://cdnd.lystit.com/photos/7e62-2015/12/17/black-halo-black-jordan-jumpsuit-product-2-767948269-normal.jpeg",
      description:
        "A utility-inspired jumpsuit with multiple pockets and a durable fabric. Ideal for a practical yet stylish outfit.",
    },
    {
      id: 9,
      name: "Velvet Jumpsuit",
      price: 2999,
      category: "Jumpsuits",
      src: "https://cdnd.lystit.com/photos/7e62-2015/12/17/black-halo-black-jordan-jumpsuit-product-2-767948269-normal.jpeg",
      description:
        "A luxurious velvet jumpsuit that exudes elegance and class. Perfect for evening wear and special occasions.",
    },
    {
      id: 10,
      name: "Polka Dot Jumpsuit",
      price: 1799,
      category: "Jumpsuits",
      src: "https://cdnd.lystit.com/photos/7e62-2015/12/17/black-halo-black-jordan-jumpsuit-product-2-767948269-normal.jpeg",
      description:
        "A playful polka dot jumpsuit with a vintage flair. Comfortable and stylish, great for day-to-night transitions.",
    },
  ];

  const filters = useContext(FilterContext) || {
    category: [],
    price: { min: 0, max: Infinity },
  };

  const { addToCart } = useContext(CartContext);

  const [productView, setProductView] = useState(null);

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
    <section className="p-5">
      {productView ? (
        <DetailedView product={productView} onBack={handleBack} />
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Jumpsuits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                view={() => viewProduct(product)}
                addToCart={() => addToCart(product)} // Add to Cart
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Jumpsuit;
