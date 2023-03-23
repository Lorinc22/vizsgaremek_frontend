import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Kep from '../images/gorillagoicon.png'
import {Link } from 'react-router-dom';

interface State {

  email:string;
  password: string;
  rePassword: string;
}

class Register extends Component<{}, State>{

  constructor(props: {}){
    super(props);

    this.state = {
      email: '',
      password: '',
      rePassword: '',
      
    }
  }

  handleRegister = async () => {
    const { email, password, rePassword } = this.state;
    if(email.trim() === '' || password!== rePassword){
      // this.setState()- tel hibaüzenet megjelenítése
      return;
    }

    const adat = {
      email: email,
      password: password,
      rePassword: rePassword
    }

    let response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(adat),
    });

    this.setState({ 
      email: '',
      password: '',
      rePassword: '',
    })

    console.log(adat);

  };

  render(){
    return <div id='input' className='container'>
      
        <h3 className='ont-weight-bold text-center text-uppercase text-white my-4'>Regisztráció</h3>
          <div >
              <input  type="text" value={this.state.email} onChange={e => this.setState({ email: e.currentTarget.value})} id="form1Example2" className='form-control' />
              <label className='custom-label'>E-mail</label>
            </div>
            <div >
              <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.currentTarget.value})} id="form1Example3" className='form-control' />
              <label className='custom-label'>Jelszó</label>
            </div>
            <div >
              <input type="password"  value={this.state.rePassword} onChange={e => this.setState({ rePassword: e.currentTarget.value})} id="form1Example4" className='form-control' />
              <label className='custom-label'> Jelszó ismét</label>
            </div>
            <div className='div-button'>
            <Link aria-current="page" to="/HomehomePage" style={{textDecoration:'none'}} onClick={this.handleRegister} ><button className='button1'  >Regisztráció</button></Link> 
            <img className='gorillagoicon' src={Kep} />
            </div>
          </div>        
  }
}

export default Register;
