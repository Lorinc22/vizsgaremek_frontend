import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Kep from "../Nav/NavbarLogo.png";
import styles from "./Nav.module.css";
import LogoutButton from "../LogoutBtn";

let out = 0

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

  let cart = JSON.parse(localStorage.getItem('cart')!)
  
  useEffect(()=>{
    getCartCount()
  })
  const getCartCount = () => {
    if(!cart){
      setCartCount(0)
      return
    }
    let amount = 0;
    for(let i = 0; i < cart.length; i++){
      amount += cart[i].quantity
    }
    setCartCount(amount)
    
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
          <button className="button1">Fiók</button>
        </Link>
        <LogoutButton />
        <Link to="/CartPage">
          <button className="button1">Kosár ({cartCount})</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
