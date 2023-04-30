import React, { useState } from "react";
import styles from "./Searchbar.module.css";
import axios from "axios";

interface Restaurant {
  id: number;
  name: string;
  url: string;
  description: string;
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const handleSearch = async () => {
    const response = await axios.get(
      "http://localhost:3000/restaurants/" + searchTerm
    );
    setRestaurants(response.data);
  };

  const handleCardClick = (id: number) => {
    window.open(`/restaurant/${id}`, "_blank");
  };

  return (
    <div>
      <div className={styles["searchBarContainer"]}>
        <input
          className={styles["form__input"]}
          type="text"
          placeholder="Éttermek Keresése"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles["searchBarButton"]} onClick={handleSearch}>
          Keresés
        </button>
      </div>
      <div className="flex-center">
        <div className="">
          <div className={styles["restaurantList"]}>
            {restaurants.map((restaurant) => (
              <div
                className={styles["restaurantCard"]}
                style={{
                  backgroundColor: "#3c1945",
                  minWidth: "400px",
                  maxWidth: "400px",
                }}
                key={restaurant.id}
              >
                <img
                  className={styles["restaurantUrl"]}
                  onClick={() => handleCardClick(restaurant.id)}
                  src={restaurant.url}
                  alt={restaurant.name}
                />
                <h2 className={styles["restaurantName"]}>{restaurant.name}</h2>
                <p>{restaurant.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
