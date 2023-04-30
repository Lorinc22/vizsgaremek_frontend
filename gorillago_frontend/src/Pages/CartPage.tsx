import React, { Component } from "react";
import Cart from "../components/Cart/Cart";
import Nav from "../components/Nav/Nav";
import { Link } from "react-router-dom";
import Kep2 from "../images/gorillagoicon.png";
import "../App.css";

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
        <Nav />
        <Cart />
        <footer className="footer">
          <img className="gorillagoiconfooter" src={Kep2} />
        </footer>
      </div>
    );
  }
}

export default CartPage;
