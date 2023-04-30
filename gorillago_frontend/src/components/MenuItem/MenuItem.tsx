import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./MenuItem.module.css";

interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  url: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, name, description, price, url }) => {
  const [quantity, setQuantity] = useState(1);
  const [, setUrl] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/menu/${id}`)
      .then((response) => setUrl(response.data.url))
      .catch((error) => console.log(error));
  }, [id]);

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const handleAddToCart = async () => {
    const requestBody = {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
      url: url,
    };
    try {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const responseBody = await response.json();


      const newCart = []
      if(!localStorage.getItem('cart')){
        newCart.push(requestBody)
        console.log("First item in cart: "+ JSON.stringify(newCart))
        localStorage.setItem('cart', JSON.stringify(newCart))
      }
      else{
        const existingCart = JSON.parse(localStorage.getItem('cart')!)
        console.log("existing cart length: " + existingCart.length)
        for(let i = 0; i < existingCart.length; i++){
          console.log(existingCart[i])
          newCart.push(existingCart[i])
        }
        newCart.push(requestBody)
        localStorage.setItem('cart', JSON.stringify(newCart))
        console.log(localStorage.getItem('cart'))

        window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={styles["MenuItemContainer2"]}>
        <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <h5 className={styles["MenuItemTitle"]}>{name} {id}</h5>
        </div>
        <div className={styles["MenuItemContent2"]}>
          <img className={styles["MenuItemImg"]} src={url} alt={name} />
          <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', overflowX: 'hidden', paddingRight: '5px' }}>
            <p className={styles["MenuItemText"]}>{description} </p>
          </div>
          <div className={styles["MenuItemQuantityContainer"]}>
            <button className={styles["MenuItemQuantityButton"]} onClick={handleQuantityDecrement}>
              -
            </button>
            <span className={styles["MenuItemQuantity"]}>{quantity}</span>
            <button className={styles["MenuItemQuantityButton"]} onClick={handleQuantityIncrement}>
              +
            </button>
            <p className={styles["MenuItemText"]}>{price} Ft</p>
          </div>
        </div>
        <button className={styles["MenuItemButton"]} onClick={handleAddToCart}>
          Kosárba
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
