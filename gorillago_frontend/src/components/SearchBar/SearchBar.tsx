import React, { useState } from 'react';
import styles from './Searchbar.module.css';
import axios from 'axios';

interface Restaurant {
  id: number;
  name: string;
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const handleSearch = async () => {
    const response = await axios.get('http://localhost:3000/restaurants/' + searchTerm);
    setRestaurants(response.data);
  };

  return (
    <div>
      <input
      className={styles["form__input"]}
        type="text"
        placeholder="Search restaurants"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {restaurants.map((restaurant) => (
          <li className={styles['searchBarLi']} key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;



