import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const handleAddToCart = () => {
    axios
      .post("http://localhost:3000/cart", { id, name, price, quantity, url })
      .then(() => {
        alert("Item added to cart");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <img src={url} alt={name} />
        <p className="card-text">{description}</p>
        <p className="card-text">{price} Ft</p>
        <select
          className="form-control"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
