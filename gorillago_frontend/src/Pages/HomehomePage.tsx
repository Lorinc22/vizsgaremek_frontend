import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Kep2 from '../images/gorillagoicon.png'
import Nav from '../components/Nav/Nav';

interface State {

  id:string;
  name: string[];

}

class HomehomePage extends Component<{}, State>{
     constructor(props: {}){
     super(props);

     this.state = {
       id: '',
       name: [],
      
     }
   }


 loadRestaurants = async () => {
  console.log('cigany')
     const { id, name } = this.state;
    

     const adat = {
       id: id,
       name: name,
     }

     const response = await fetch('http://localhost:3001/restaurants', {
      method: 'GET',
      headers: {
          'Content-type': 'application/json'
      }
  });
    const restaurants = await response.json();
    console.log(restaurants[0].name)
    console.log(restaurants[0].url)
    this.setState({
      name: restaurants
    })
    console.log(this.state.name)
    for (let i = 0; i < this.state.name.length; i++) {
      console.log(this.state.name[i])
    }
   };

  render(){
    return(
      <div>
       <>
       <Nav />
       <div>
        {
          this.state.name.map(restaurant => <p>{restaurant}</p>)
        }
       </div>
       <button onClick={this.loadRestaurants}>Load restaurants</button>
       <footer className='footer'>
       <img className='gorillagoiconfooter' src={Kep2} />
       </footer>
       </>
      </div>
    )
  }
}

export default HomehomePage

