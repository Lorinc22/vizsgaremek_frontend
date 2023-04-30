import React, { Component, useState } from "react";
import jwt_decode from 'jwt-decode'
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Kep from "../images/gorillagoicon.png";
import { Link } from "react-router-dom";
import Nav from "../components/Nav/Nav";


function DeliveryInformation(){
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [postalCode, setPostalCode] = useState<number | null>(null);



  async function submitDeliveryInforation(){
      let price = 0;
      let cart;
      if(!localStorage.getItem('cart')){
        alert("Üres kosár")
        return
      }

      cart = JSON.parse(localStorage.getItem('cart')!)
      for(let i = 0; i < cart.length; i++){
        price += cart[i].price * cart[i].quantity;
      }
      if(city === "" || street === "" || houseNumber === "" || postalCode === 0 || postalCode === null){
        alert("Mindent kötelező kitölteni")
        return
      }


      const token = localStorage.getItem('token')
      const userdata : any = jwt_decode(token!)

      const requestBody = {
        city: city,
        street: street,
        houseNumber: houseNumber,
        postalCode: postalCode,
        firstName: userdata.firstName,
        lastName: userdata.lastName,
        price: price
      }


       const response = await fetch(`http://localhost:3000/order/`, {
         method: 'POST',
         headers: {
           'Content-type': 'application/json'
         },
         body: JSON.stringify(requestBody)
       })
       const responseBody = await response.json()
       console.log(responseBody)

  }

  return (
    <div >
        <Nav/>
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={{ backgroundColor: "#3c1945" , borderRadius: "20px"  }}>
              <div
                className="card-body"
                style={{ backgroundColor: "#3c1945"  }}
              >
                <h4 className="card-title mb-4" style={{ textAlign: "center" }}>
                  Szállítási Adatok
                </h4>
                  <div className="form-group">
                    
                    <label style={{ color: "white" }}>Település </label>
                    <input
                      className="form__inputAccount"
                      onChange={(e)=>{setCity(e.target.value)}}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ color: "white" }}>Utca</label>
                    <input
                      type="text"
                      className="form__inputAccount"
                      onChange={(e)=>{setStreet(e.target.value)}}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ color: "white" }}>Házszám</label>
                    <input
                      type="text"
                      className="form__inputAccount"
                      onChange={(e)=>{setHouseNumber(e.target.value)}}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ color: "white" }}>Irányítószám</label>
                    <input
                      type="tel"
                      className="form__inputAccount"
                      onChange={(e)=>{setPostalCode(parseInt(e.target.value))}}
                    />
                  </div>
                  <button className="AccountButtons" onClick={submitDeliveryInforation}>
                    Rendelés 
                  </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default DeliveryInformation;
