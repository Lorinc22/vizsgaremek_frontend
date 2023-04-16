import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaKingHome from "../images/PizzaKingHome.png";
import Nav from "../components/Nav/Nav";

export interface HomeSite {}

const PizzaKing: React.FunctionComponent<HomeSite> = (props) => {
  return (
    
    <div>
        <Nav />
    <div>
      <img className="PizzaKingHomeImg" src={PizzaKingHome} />
    </div>
    <div className="container">      
                <h5 className="MenuH5">Akciós - Margaréta pizza 32cm</h5>
                <img className="MenuImg" src="https://cdn.discordapp.com/attachments/355709434166640640/1097181487876542615/image.png"  />
                <p>Item desciption</p>
                <p>price</p>
                <button className="MenuBtn">Kosárba rakás</button>             
        </div>
        <div className="container" >       
                <h5 className="MenuH5">Akciós - Margaréta pizza 32cm</h5>
                <img className="MenuImg" src="https://cdn.discordapp.com/attachments/355709434166640640/1097181487876542615/image.png"  />
                <p>Item desciption</p>
                <p>price</p>
                <button className="MenuBtn">Kosárba rakás</button>                
        </div>
    </div>
  );
};

export default PizzaKing;
