import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductCard = ({ product, view }) => {
  const { cart, addToCart } = useContext(CartContext);

  const isProductInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <div className="w-full h-40 overflow-hidden rounded-t-lg">
        <img
          className="w-full h-full object-cover"
          src={product.src}
          alt={product.name}
        />
      </div>
      <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">Rs. {product.price}</p>
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
        View
      </button>
    </div>
  );
};

export default ProductCard;
