import React from "react";
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
            <a href={link.href}>{link.label}</a>
          </div>
        );
      })}
    </div>
  );
};

const Nav: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["logo-container"]}>
        <a href="/Homehomepage"><img className="NavbarLogo" src={Kep} /></a>
      </div>
      <div>
        <a href="/Account"><button className="button1">Account</button></a>
      <LogoutButton />
      </div>
    </nav>
  );
};

export default Nav;
