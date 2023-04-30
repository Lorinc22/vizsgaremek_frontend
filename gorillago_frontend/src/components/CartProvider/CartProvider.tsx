import React, { createContext, useReducer } from "react";

interface State {
  cartItems: CartItem[];
}

interface Action {
  type: string;
  payload?: any;
}

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

interface CartContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const CartContext = createContext<CartContextProps>({
  state: { cartItems: [] },
  dispatch: () => null,
});

const cartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { menuItem, quantity } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.menuItem.id === menuItem.id
      );
      if (itemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[itemIndex].quantity += quantity;
        return { ...state, cartItems: updatedCartItems };
      } else {
        const newCartItem = { menuItem, quantity };
        return { ...state, cartItems: [...state.cartItems, newCartItem] };
      }
    case "REMOVE_FROM_CART":
      const id = action.payload.id;
      const filteredCartItems = state.cartItems.filter(
        (item) => item.menuItem.id !== id
      );
      return { ...state, cartItems: filteredCartItems };
    default:
      return state;
  }
};

const CartProvider: React.FC = ({ }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {}
    </CartContext.Provider>
  );
};

export default CartProvider;
