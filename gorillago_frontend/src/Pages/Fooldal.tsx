import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Kep from "../images/gorillagoicon.png";
import { Link } from "react-router-dom";

export interface HomeSite {}

const Home: React.FunctionComponent<HomeSite> = (props) => {
  return (
    <div id="input" className="container">
      <img className="gorillagoicon" src={Kep} />
      <div className="div-button">
        <Link
          aria-current="page"
          to="/Register"
          style={{ textDecoration: "none" }}
        >
          <button className="button1">Regisztráció</button>
        </Link>
        <Link
          aria-current="page"
          to="/Login"
          style={{ textDecoration: "none" }}
        >
          <button className="button1"> Bejelentkezés</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
