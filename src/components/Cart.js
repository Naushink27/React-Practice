import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";


const Cart = () => {
    const cartItems=useSelector((store)=>{store.cart.items})
    console.log("item"+cartItems)
  return (
    <div className="cart-container">
      <header className="cart-header">
        <h2>Your Cart</h2>
      </header>
      <div className="cart-content">
        <div className="cart-items">
         <ItemList items={cartItems}/>
        </div>
        <div className="cart-summary">
          <p className="summary-text">Total Items: <span className="summary-value">0</span></p>
          <p className="summary-text">Total Price: <span className="summary-value">$0.00</span></p>
        </div>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default Cart;
