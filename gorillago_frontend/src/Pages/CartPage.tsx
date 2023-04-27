import React, { Component } from "react";
import Cart from "../components/Cart/Cart";
import Nav from "../components/Nav/Nav";

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

interface Props {}

interface State {
  cartItems: CartItem[];
}

class CartPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cartItems: [],
    };

    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart(item: MenuItem) {
    const updatedCartItems = this.state.cartItems.filter(
      (cartItem) => cartItem.menuItem.id !== item.id
    );
    this.setState({ cartItems: updatedCartItems });
  }

  render() {
    const { cartItems } = this.state;

    return (
      <div>
        <Nav/>
        <h1>Cart Page</h1>
        <Cart cartItems={cartItems} onRemoveFromCart={this.removeFromCart} />
      </div>
    );
  }
}

export default CartPage;
