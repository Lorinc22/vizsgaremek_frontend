import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./RestaurantPage.module.css";
import axios from "axios";

interface RestaurantPage {
  id: number;
  name: string;
  url: string;
}

function RestaurantPage() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<RestaurantPage | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/restaurant/${id}`);
        setRestaurant(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className={styles["Pageh1"]}>{restaurant.name}</h1>
      <img className={styles["Pageurl"]} src={restaurant.url} alt={restaurant.name} />
    </div>
  );
}

export default RestaurantPage;
