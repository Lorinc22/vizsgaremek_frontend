import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kep from '../images/gorillagoicon.png'
import Nav from '../components/Nav/Nav';


export interface HomehomePage {};


const HomehomePage : React.FunctionComponent<HomehomePage> = (props) =>{
    return(
      <>
      <Nav />
     
      </>
    );
  };
  
export default HomehomePage;