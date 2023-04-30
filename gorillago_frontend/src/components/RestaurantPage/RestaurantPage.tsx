import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./RestaurantPage.module.css";
import axios from "axios";
import MenuItem from "../MenuItem/MenuItem";
import Nav from "../Nav/Nav";

interface RestaurantPage {
  id: number;
  name: string;
  url: string;
}

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  url:string;
}

function RestaurantPage() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<RestaurantPage | null>(null);
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/restaurant/${id}`);
        setRestaurant(response.data);
        
        const menus = await axios.get(`http://localhost:3000/restaurants/${id}/menus`);
        console.log(menus.data)
        setMenu(menus.data || []);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    axios.get(`http://localhost:3000/restaurants/${id}/menus`).then((response) => {
      setMenu(response.data);
      console.log("menu list: " + menu)
    });
  }, [id]);
  
  
  return (
    <div>
      <Nav/>
      <h1 className={styles["Pageh1"]}>{restaurant?.name}</h1> 
      <img className={styles["Pageurl"]} src={restaurant?.url} alt={restaurant?.name} style={{objectFit: 'cover'}}/> 

     <div className="row" style={{margin: '0'}}>
  {menu.map((menu) => (
    <div key={menu.id} className="col-sm-12 col-md-6 col-lg-4" style={{margin: '0'}}>
      <MenuItem
        id={menu.id}
        name={menu.name}
        description={menu.description}
        price={menu.price}
        url={menu.url}
      />
    </div>
  ))}
    </div>
    </div>
  );
}

export default RestaurantPage;
