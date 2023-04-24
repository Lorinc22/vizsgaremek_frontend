import React from "react";
import { Link } from "react-router-dom";
import Kep from "../Nav/NavbarLogo.png";
import styles from "./Nav.module.css";
import * as data from "./links.json";
import LogoutButton from "../LogoutBtn";

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

const Nav: React.FC<{}> = () => {
  // Get the number of items in cart from localStorage
  const cartItemsCount = localStorage.getItem("cartItemsCount");

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
          <button className="button1">Cart ({cartItemsCount || 0})</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
