import React, { Component } from 'react';
import '../App.css';
import RedirectButton from '../components/RedirectButton/RedirectButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Toaster } from 'react-hot-toast';


export interface LoginSite {};


const Login : React.FunctionComponent<LoginSite> = props =>{
    return(
      <div id='input' className='container'>
      <h3 className='ont-weight-bold text-center text-uppercase text-white my-4'>Bejelentkezés</h3>
      <div className="form__group">
               <input type="text" className="form__input" id="name" placeholder="Email"  />
             <label  className="form__label"> Email</label>
          </div>
          <div className="form__group">
               <input type="password" className="form__input" id="name" placeholder="Password"  />
             <label  className="form__label"> Password</label>
          </div>
          <div className='div-button'>
         <RedirectButton link="/HomehomePage"/>
         <Toaster  />
          </div>
        </div>       
    );
  };
  
export default Login;