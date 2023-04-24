import React from 'react';
import { createContext, useContext, useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CartItemWithQuantity {
  item: CartItem;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItemWithQuantity[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItem: () => { },
  removeItem: () => { },
});

export const useCart = () => {
  return useContext(CartContext);
}

interface Props {
  home: React.ReactNode;
  register: React.ReactNode;
  logout: React.ReactNode;
  login: React.ReactNode;
  HomehomePage: React.ReactNode;
  account: React.ReactNode;
}

const CartProvider: React.FC<Props> = ({ home, register, logout, login, HomehomePage, account  }) => {
  const [cartItems, setCartItems] = useState<CartItemWithQuantity[]>([]);

  const addItem = (item: CartItem) => {
    const itemExists = cartItems.find(cartItem => cartItem.item.id === item.id);
    if (itemExists) {
      setCartItems(prevCartItems => prevCartItems.map(cartItem => {
        if (cartItem.item.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      }));
    } else {
      setCartItems(prevCartItems => [...prevCartItems, { item: item, quantity: 1 }]);
    }
  };

  const removeItem = (itemId: string) => {
    setCartItems(prevCartItems => prevCartItems.filter(cartItem => cartItem.item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {home}
      {register}
      {logout}
      {login}
      {HomehomePage}
      {account}
    </CartContext.Provider>
  );
};

export default CartProvider;
