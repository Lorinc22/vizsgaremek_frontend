import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Kep from "../Nav/NavbarLogo.png";
import styles from "./Nav.module.css";
import * as data from "./links.json";
import LogoutButton from "../LogoutBtn";

let out = 0
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;
type Link = {
  label: string;
  href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className={styles["links-container"]}>
      {links.map((link: Link) => {
        return (
          <div key={link.href} className={styles["link"]}>
            <Link to={link.href}>{link.label}</Link>
          </div>
        );
      })}
    </div>
  );
};


export const Nav: React.FC<{}> = () => {
  // Get the number of items in cart from localStorage
  const [cartCount, setCartCount] = useState(0);

  const cartItemsCount = localStorage.getItem("cartItemsCount");
  const cartsCountString = localStorage.getItem('cart')
  
  
  if(cartsCountString){
    const obj = JSON.parse(cartsCountString)
    out = obj.quantity
  }


  return (
    <nav className={styles.navbar}>
      <div className={styles["logo-container"]}>
        <Link to="/Homehomepage">
          <img className="NavbarLogo" src={Kep} alt="Logo" />
        </Link>
      </div>
      <div>
        <Link to="/Account">
          <button className="button1">Account</button>
        </Link>
        <LogoutButton />
        <Link to="/CartPage">
          <button className="button1">Cart ({out})</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
