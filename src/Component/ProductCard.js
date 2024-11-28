import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductCard = ({ product, view }) => {
  const { cart, addToCart } = useContext(CartContext);

  const isProductInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      {/* Image Container */}
      <div className="w-full h-48">
        <img
          className="w-full h-full object-contain"
          src={product.src}
          alt={product.name}
        />
      </div>
      {/* Product Details */}
      <h3 className="mt-4 text-lg font-bold text-center">{product.name}</h3>
      <p className="text-gray-700 text-center">Rs. {product.price}</p>
      {/* Buttons */}
      {isProductInCart ? (
        <button className="mt-4 py-2 px-4 bg-gray-500 text-white rounded-md cursor-not-allowed">
          Already Added
        </button>
      ) : (
        <button
          className="mt-4 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-700"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
      <button
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        onClick={view}
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
