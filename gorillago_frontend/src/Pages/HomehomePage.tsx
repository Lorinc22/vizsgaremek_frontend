import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Kep from '../images/pizzaking.png'
import Kep2 from '../images/gorillagoicon.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from '../components/Nav/Nav';


export interface HomehomePage {};


const HomehomePage : React.FunctionComponent<HomehomePage> = (props) =>{
    return(
      <>
      <Nav />
      <div className='slider'>
        <h4>1</h4>
        <div className='slide-track'>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>

        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        </div>
      </div>
      <div className='slider'>
        <h4>2</h4>
        <div className='slide-track'>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>

        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        </div>
      </div>
      <div className='slider'>
        <h4>3</h4>
        <div className='slide-track'>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        

        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        <div className='slide'><img className='pizzaking' src={Kep} />
        </div>
        </div>
      </div>
      <footer className='footer'>
      <img className='gorillagoiconfooter' src={Kep2} />
      </footer>
      </>
    );
  };
  
export default HomehomePage;