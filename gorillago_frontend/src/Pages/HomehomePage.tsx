  import React, { Component } from "react";
  import { Link } from 'react-router-dom';
  import ReactDOM from "react-dom";
  import "../App.css";
  import "bootstrap/dist/css/bootstrap.min.css";
  import Kep2 from "../images/gorillagoicon.png";
  import Nav from "../components/Nav/Nav";
  import SearchBar from "../components/SearchBar/SearchBar";

  interface State {
    id: string;
    name: string[];
    loadedRestaurants: any;
    loadedRestaurants1: any;
    loadedRestaurants2: any;
    loadedRestauratsHTML: any;
    loadedRestauratsHTML1: JSX.Element[];
    loadedRestauratsHTML2: JSX.Element[];
  }
  interface StateExtended extends State {
    loadedRestaurants1: any;
    loadedRestaurants2: any;
    loadedRestauratsHTML1: JSX.Element[];
    loadedRestauratsHTML2: JSX.Element[];
  }


  class HomehomePage extends Component<{}, StateExtended> {
    constructor(props: {}) {
      super(props);

      this.state = {
        id: "",
        name: [],
        loadedRestaurants: {},
        loadedRestauratsHTML: [],
        loadedRestaurants1: {},
        loadedRestaurants2: {},
        loadedRestauratsHTML1: [],
        loadedRestauratsHTML2: []
      };
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
      const loadedRestaurants1 = restaurants.slice(0, 4);
      const loadedRestaurants2 = restaurants.slice(4, 9);
    
      let elements1 = [];
      for (let i = 0; i < loadedRestaurants1.length; i++) {
        elements1.push(    
            <div className="HomePageCard" style={{ backgroundColor: "#3c1945", minWidth: '500px', maxWidth:'500px'}}>
              <img className="pizzaKingImg" src={loadedRestaurants1[i].url} key={i} onClick={() => this.handleCardClick(this.state.loadedRestaurants1[i].id)}/>
              <h6 id="restaurantName">{loadedRestaurants1[i].name}</h6>
            </div>
        );
      }
    
      let elements2 = [];
      for (let i = 0; i < loadedRestaurants2.length; i++) {
        elements2.push(
          <div className="HomePageCard" key={loadedRestaurants2[i].id} style={{ backgroundColor: "#3c1945" }}>
            <img className="pizzaKingImg" src={loadedRestaurants2[i].url} key={i+4} onClick={() => this.handleCardClick(this.state.loadedRestaurants2[i].id)} />
            <h6 id="restaurantName">{loadedRestaurants2[i].name}</h6>
          </div>
        )
      }
    
      this.setState({
        loadedRestaurants: restaurants,
        loadedRestaurants1: loadedRestaurants1,
        loadedRestaurants2: loadedRestaurants2,
        loadedRestauratsHTML1: elements1,
        loadedRestauratsHTML2: elements2,
      });
    };
    handleCardClick = (id: string) => {
      window.open(`/restaurant/${id}`, '_blank');
    }


    render() {
      return (
        <div>
          <>
            <Nav />
            <SearchBar />
            
            <div className="flex-center">
              <div className="scrollbarContainer">
                {this.state.loadedRestauratsHTML1}
                {this.state.loadedRestauratsHTML1}
                {this.state.loadedRestauratsHTML1}
                {this.state.loadedRestauratsHTML1}
              </div>
            </div>
            <div className="flex-center">
              <div className="scrollbarContainer">
                {this.state.loadedRestauratsHTML2}
                {this.state.loadedRestauratsHTML2}
              </div>
            </div>
            
            <footer className="footer">
              <img className="gorillagoiconfooter" src={Kep2} />
            </footer>
          </>
        </div>
      );
    }
  }

  export default (HomehomePage);
