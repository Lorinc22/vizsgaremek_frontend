import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav/Nav';
import Kep2 from '../images/gorillagoicon.png'


export interface AccountSite {};

const Account : React.FunctionComponent<AccountSite> = (props) =>{
    return(
      <div >
        <>
        <Nav/>
       
        <div id='AccountInput' className='container'>
        <h3>Fiók Adatok:</h3>
        <hr className='hr'/>
        <div className="form__group">
               <input type="text" className="form__input" id="name" placeholder="Email"  />
             <label  className="form__label"> Email</label>
          </div>
          <div className="form__group">
               <input type="text" className="form__input" id="name" placeholder="Keresztnév"  />
             <label  className="form__label"> Keresztnév</label>
          </div>
          <div className="form__group">
               <input type="text" className="form__input" id="name" placeholder="Vezetéknév"  />
             <label  className="form__label"> Vezetéknév</label>
          </div>
          <div className="form__group">
               <input type="Phonenumber" className="form__input" id="name" placeholder="Telefonszám"  />
             <label  className="form__label"> Telefonszám</label>
             <button className='button2'>Mentés</button>
          </div>
          </div>
          <div>
       
          </div>
          <div id='AccountInput' className='container'>
          <h3 >Szállítási Adatok:</h3>
          <hr className='hr'/>
        <div className="form__group">
               <input type="text" className="form__input" id="name" placeholder="Utca"  />
             <label  className="form__label"> Utca</label>
          </div>
          <div className="form__group">
               <input type="text" className="form__input" id="name" placeholder="Házszám"  />
             <label  className="form__label"> Házszám</label>
          </div>
          <div className="form__group">
               <input type="text" className="form__input" id="name" placeholder="Irányítószám"  />
             <label  className="form__label"> Irányítószám</label>
          </div>
          <div className="form__group">
               <input type="Phonenumber" className="form__input" id="name" placeholder="Kaputelefon"  />
             <label  className="form__label"> Kaputelefon</label>
             <button className='button2'>Mentés</button>
          </div>
          
          </div>
        
          <div id='AccountInput' className='container'>
        <h3>Jelszó megváltoztatása:</h3>
        <hr className='hr'/>
        <div className="form__group">
               <input type="password" className="form__input" id="name" placeholder="Jelszó"  />
             <label  className="form__label"> Jelszó</label>
          </div>
          <div className="form__group">
               <input type="password" className="form__input" id="name" placeholder="Jelszó Ujra"  />
             <label  className="form__label"> Jelszó Ujra</label>
          </div>
          <button className='button2'>Mentés</button>
          </div>
          <div>
          </div>
          <footer className='footer'>
       <img className='gorillagoiconfooter' src={Kep2} />
       </footer>
        </>
        </div>    
        
    );
  };
  
export default Account;