import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Kep2 from '../images/gorillagoicon.png'
import Pizzaking from '../images/pizzaking.png'
import Nav from '../components/Nav/Nav';
import SearchBar from '../components/SearchBar/SearchBar';

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
       <SearchBar />
       <div className='container2'>
       <h3 >Ajánlataink:</h3>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>

       </div>
       <div className='container2'>
       <h3 >Ajánlataink:</h3>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
       </div>
       
       <div className='container2'>
       <h3 >Ajánlataink:</h3>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
       </div>
       
       <div className='container2'>
       <h3 >Ajánlataink:</h3>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
        <div className='card' style={{ backgroundColor: '#3c1945' }}> 
          <img className='pizzaKingImg'  src={Pizzaking} /><h4 id='restaurantName'>PizzaKing</h4>
            <button className='button3'>Rendelés</button>
        </div>
       </div>

       <footer className='footer'>
       <img className='gorillagoiconfooter' src={Kep2} />
       </footer>
       </>
      </div>
    )
  }
}

export default HomehomePage

