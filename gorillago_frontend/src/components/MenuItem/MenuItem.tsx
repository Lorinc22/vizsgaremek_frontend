import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./MenuItem.module.css";
import Nav from "../Nav/Nav";

interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  url:string;
}



const MenuItem: React.FC<MenuItemProps> = ({ id, name, description, price, url }) => {
  const [quantity, setQuantity] = useState(1);
  const [, setUrl] = useState('');
  
  

  useEffect(() => {
    axios.get(`http://localhost:3000/menu/${id}`)
      .then(response => setUrl(response.data.url))
      .catch(error => console.log(error));
  }, [id]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(event.target.value));
    
  };

  const handleAddToCart = async () => {
      const requestBody = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        url: url
      }
      try{
        const response = await fetch('http://localhost:3000/cart', {
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(requestBody)
      });

      const responseBody = await response.json();
      localStorage.setItem('cart', JSON.stringify(responseBody))
      console.log(JSON.stringify(responseBody))
      window.location.reload();
      }
      catch(error){
        console.log(error)
      }
  };

  return (
    <div className={styles["MenuItemCard"]}>
      
        <h5 className={styles["MenuItemTitle"]}>{name}</h5>
        <img className={styles["MenuItemImg"]} src={url} alt={name} />
        <p className={styles["MenuItemText"]}>{description}</p>
        <p className={styles["MenuItemText"]}>{price} Ft</p>
        <select
          className="form-control"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <option className={styles["MenuItemQuantity"]} key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        <button className={styles["MenuItemButton"]} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    
  );
};

export default MenuItem;
