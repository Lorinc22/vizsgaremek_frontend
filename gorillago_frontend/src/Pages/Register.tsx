import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RedirectButton2 from '../components/RedirectButton/RedirectButton2';
import  { Toaster } from 'react-hot-toast';

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

    let response = await fetch('http://localhost:3001/register', {
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
        <div className="form__group">
               <input type="text" className="form__input" id="name" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.currentTarget.value})} />
             <label  className="form__label"> Email</label>
             <input type="password" className="form__input" id="name" placeholder="Jelszó"  value={this.state.password} onChange={e => this.setState({ password: e.currentTarget.value})}/>
             <label  className="form__label"> Jelszó</label>
             <input type="password" className="form__input" id="name" placeholder="jelszó ujra" value={this.state.rePassword} onChange={e => this.setState({ rePassword: e.currentTarget.value})} />
             <label  className="form__label"> jelszó ujra</label>
          </div>
            <div className='div-button'>
            <RedirectButton2  link="/login"/>
            <Toaster  />
            </div>
          </div>        
  }
}

export default Register;
