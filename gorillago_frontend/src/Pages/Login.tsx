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
        <div >
            <input  type="text"  id="form1Example2" className='form-control' />
            <label className='custom-label'>E-mail</label>
          </div>
          <div >
            <input type="password" id="form1Example3" className='form-control' />
            <label className='custom-label'>Jelszó</label>
          </div>
         
          <div className='div-button'>
         <RedirectButton link="http://localhost:3000/HomehomePage"/>
         <Toaster  />
          
          </div>
        </div>       
    );
  };
  
export default Login;