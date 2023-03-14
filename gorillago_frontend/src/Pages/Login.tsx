import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kep from '../images/gorillagoicon.png'

export interface LoginSite {};

const Login : React.FunctionComponent<LoginSite> = props =>{
    return(
      <div id='input' className='container'>
      
      <h3 className='ont-weight-bold text-center text-uppercase text-white my-4'>Bejelentkezés</h3>
        <div >
            <input  type="text"  id="form1Example2" className='form-control' />
            <label className='custom-label'>E-mail</label>
          </div>
          <div >
            <input type="password" id="form1Example3" className='form-control' />
            <label className='custom-label'>Jelszó</label>
          </div>
         
          <div className='div-button'>
          <button className='button1' >Bejelentkezés</button>
          <img className='gorillagoicon' src={Kep} />
          </div>
        </div>       
    );
  };
  
export default Login;