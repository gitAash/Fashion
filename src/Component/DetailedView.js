import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const DetailedView = ({ product, onBack }) => {
  const { cart, addToCart } = useContext(CartContext);

  const isProductInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg m-4 bg-white">
      <button
        onClick={onBack}
        className="mb-4 py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-700"
      >
        Back to Products
      </button>
      <div className="w-full h-auto">
        <img
          className="w-full h-96 object-contain"
          src={product.src}
          alt={product.name}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-lg">Rs. {product.price}</p>
        <p className="text-gray-500 text-base mt-2">{product.category}</p>
        <p className="text-gray-700 mt-4">
          {product.description
            ? product.description
            : "No description available"}
        </p>
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
      </div>
    </div>
  );
};

export default DetailedView;
