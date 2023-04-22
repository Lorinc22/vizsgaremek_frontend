import React from "react";
import "./Cart.css";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

interface Props {
  cartItems: CartItem[];
  onRemoveFromCart: (item: MenuItem) => void;
}

const Cart: React.FC<Props> = ({ cartItems, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((cartItem) => (
              <li key={cartItem.menuItem.id}>
                <div className="cart-item-container">
                  <div className="cart-item-details">
                    <h3>{cartItem.menuItem.name}</h3>
                    <p>{cartItem.menuItem.description}</p>
                  </div>
                  <div className="cart-item-price">
                    <span>Quantity: {cartItem.quantity}</span>
                    <span>Price: {cartItem.menuItem.price * cartItem.quantity} Ft</span>
                  </div>
                  <button onClick={() => onRemoveFromCart(cartItem.menuItem)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-price">Total price: {totalPrice} Ft</p>
        </>
      )}
    </div>
  );
};

export default Cart;
