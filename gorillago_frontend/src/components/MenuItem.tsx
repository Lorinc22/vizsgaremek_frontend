import React, { useState } from "react";
import axios from "axios";

type MenuItemProps = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const MenuItem: React.FC<MenuItemProps> = ({ id, name, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    axios
      .post("http://localhost:3000/cart", { id, name, price, quantity })
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
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
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
