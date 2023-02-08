import React, { Component } from 'react';
import './App.css';

interface State {

  email:string;
  password: string;
  rePassword: string;
}

class App extends Component<{}, State>{

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
    return <div className='Inputs'>
      
      <h2>Regisztráció</h2>
      Email: <input type="text"  value={this.state.email} onChange={e => this.setState({ email: e.currentTarget.value})} /> <br />
      Jelszó: <input type="password"  value={this.state.password} onChange={e => this.setState({ password: e.currentTarget.value})} /> <br />
      Jelszó ismét: <input type="password"  value={this.state.rePassword} onChange={e => this.setState({ rePassword: e.currentTarget.value})} /> <br />
      <button onClick={this.handleRegister}>Regisztráció</button>
     
      
    </div>
  }
}

export default App;
