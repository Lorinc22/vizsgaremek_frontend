import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./RestaurantPage.module.css";
import axios from "axios";
import MenuItem from "../MenuItem/MenuItem";

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
        setMenu(response.data.menu_items || []); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    axios.get(`http://localhost:3000/restaurants/${id}/menus`).then((response) => {
      setMenu(response.data);
    });
  }, [id]);
  
  
  return (
    <div>
      <h1 className={styles["Pageh1"]}>{restaurant?.name}</h1> 
      <img className={styles["Pageurl"]} src={restaurant?.url} alt={restaurant?.name} /> 

     <div className="row">
  {menu.map((menu) => (
    <div key={menu.id} className="col-md-6">
      <MenuItem
        id={menu.id}
        name={menu.name}
        description={menu.description}
        price={menu.price}
      />
    </div>
  ))}
    </div>
    </div>
  );
}

export default RestaurantPage;
