import React, { useState } from "react";

const CartDashboard = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Product A", price: 20, quantity: 1 },
    { id: 2, name: "Product B", price: 40, quantity: 2 },
    { id: 3, name: "Product C", price: 30, quantity: 1 },
    { id: 3, name: "Product C", price: 30, quantity: 1 },
    
    

  ]);

  const updateQuantity = (id, increment) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-dashboard" >
      {/* <h1>Shopping Cart</h1> */}
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
{/* 
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>
          <strong>Total:</strong> ${calculateTotal().toFixed(2)}
        </p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div> */}
    </div>
  );
};

export default CartDashboard;
