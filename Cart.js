import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const decreaseQuantity = (product) => {
    if (product.quantity > 1) {
      removeFromCart(product.id);
      addToCart({ ...product, quantity: product.quantity - 1 });
    } else {
      removeFromCart(product.id); // Remove the item if quantity becomes 0
    }
  };

  const styles = {
    container: {
      padding: "24px",
      backgroundColor: "#f7fafc",
      minHeight: "100vh",
    },
    title: {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "24px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      margin: "0 auto",
      backgroundColor: "#fff",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    th: {
      border: "1px solid #e2e8f0",
      padding: "12px",
      textAlign: "left",
      backgroundColor: "#edf2f7",
      fontWeight: "bold",
    },
    td: {
      border: "1px solid #e2e8f0",
      padding: "12px",
      textAlign: "left",
    },
    image: {
      width: "50px",
      height: "50px",
      objectFit: "cover",
      borderRadius: "8px",
    },
    button: {
      padding: "8px 12px",
      marginRight: "8px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
    },
    increaseButton: {
      backgroundColor: "#3182ce",
      color: "#fff",
    },
    decreaseButton: {
      backgroundColor: "#e53e3e",
      color: "#fff",
    },
    emptyMessage: {
      textAlign: "center",
      fontSize: "18px",
      color: "#718096",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Cart</h2>
      {cart.length === 0 ? (
        <p style={styles.emptyMessage}>Your cart is empty!</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Product</th>
              <th style={styles.th}>Image</th>
              <th style={styles.th}>Price</th>
              <th style={styles.th}>Quantity</th>
              <th style={styles.th}>Total</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td style={styles.td}>{item.name}</td>
                <td style={styles.td}>
                  <img src={item.src} alt={item.name} style={styles.image} />
                </td>
                <td style={styles.td}>₹{item.price}</td>
                <td style={styles.td}>{item.quantity}</td>
                <td style={styles.td}>₹{item.price * item.quantity}</td>
                <td style={styles.td}>
                  <button
                    style={{ ...styles.button, ...styles.increaseButton }}
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <button
                    style={{ ...styles.button, ...styles.decreaseButton }}
                    onClick={() => decreaseQuantity(item)}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
