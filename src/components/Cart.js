import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();
const handleClearCart=()=>{
dispatch(clearCart())
}
  console.log(cartItems);
  return (
    <div className="cart-container">
    <h1 className="cart-title">Cart</h1>
    <div className="cart-content">
      <button
        className="clear-cart-button"
       onClick={handleClearCart}>
        Clear Cart
      </button>
      {cartItems?.length === 0 && (
        <h1>Cart is empty. Add Items to the cart!</h1>
      )}
      <ItemList items={cartItems} />
    </div>
  </div>
  );
};

export default Cart;
