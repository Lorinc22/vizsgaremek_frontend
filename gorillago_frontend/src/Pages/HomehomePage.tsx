import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Kep2 from "../images/gorillagoicon.png";
import Pizzaking from "../images/pizzaking.png";
import PizzaHut from "../images/pizzahut.png"
import Nav from "../components/Nav/Nav";
import SearchBar from "../components/SearchBar/SearchBar";
import { useMediaQuery } from 'react-responsive'
import { isMobile } from "react-device-detect";

interface State {
  id: string;
  name: string[];
  loadedRestaurants: any;
  loadedRestauratsHTML: any;
}

class HomehomePage extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      id: "",
      name: [],
      loadedRestaurants: {},
      loadedRestauratsHTML: []
    };
  }
  loadRestaurants2 = () => {
    console.log('ok')
  }
  componentDidMount(): void {
    this.loadRestaurants()
  }
  loadRestaurants = async () => {
    const response = await fetch("http://localhost:3000/getAllRestaurants", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }
    });
    const restaurants = await response.json();
    this.setState({loadedRestaurants: restaurants})
    console.log(this.state.loadedRestaurants)

    let elements = []
    for(let i = 0; i < this.state.loadedRestaurants.length; i++){
      console.log(this.state.loadedRestaurants[i])
      elements.push(
          <div className="card" key={this.state.loadedRestaurants[i].id} style={{ backgroundColor: "#3c1945"  }}>
              <img className="pizzaKingImg" src={this.state.loadedRestaurants[i].url} />
              <h4 id="restaurantName">{this.state.loadedRestaurants[i].name}</h4>
          </div>
      )
    }
    this.setState({loadedRestauratsHTML: elements})
  };



  render() {
    return (
      <div>
        <>
          <Nav />
          <SearchBar />
            <div className="container2">
            {/* <h3>Ajánlataink:</h3> */}
            {this.state.loadedRestauratsHTML}
          </div>
          <div className="container2">
            
            {/* <Link to="/pizzaking">
              <div className="card" style={{ backgroundColor: "#3c1945" }}>
                <img className="pizzaKingImg" src={Pizzaking} />
                <h4 id="restaurantName">PizzaKing</h4>
              </div>
              </Link> */}
              {/*
            <Link to="/pizzahut">
              <div className="card" style={{ backgroundColor: "#3c1945" }}>
                <img className="pizzaKingImg" src={Pizzaking} />
                <h4 id="restaurantName">PizzaHut</h4>
              </div>
            </Link>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945"  }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
          </div>
          <div className="container2">
            <h3>Ajánlataink:</h3>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
          </div>

          <div className="container2">
            <h3>Ajánlataink:</h3>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
             
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
          </div>

          <div className="container2">
            <h3>Ajánlataink:</h3>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div>
            <div className="card" style={{ backgroundColor: "#3c1945" }}>
              <img className="pizzaKingImg" src={Pizzaking} />
              <h4 id="restaurantName">PizzaKing</h4>
              
            </div> */}
          </div>
          

          <footer className="footer">
            <img className="gorillagoiconfooter" src={Kep2} />
          </footer>
        </>
      </div>
    );
  }
}

export default HomehomePage;
