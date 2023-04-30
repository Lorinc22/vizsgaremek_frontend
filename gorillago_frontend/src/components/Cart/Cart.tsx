import { useState, useEffect } from "react";
import styles from "./cart.module.css"

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  url: string;
}

function Cart() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [fullPrice, setFullPrice] = useState<number>(0);

  useEffect(() => {
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
      price += cart[i].price * cart[i].quantity;
    }
    setFullPrice(price);
  }, [cart]);

  function clearCart() {
    localStorage.removeItem("cart");
    setCart([]);
  }

  function getCartItems() {
    if (cart.length === 0) {
      return <h1>A kosár üres</h1>;
    }

    return cart.map((item, index) => (
      <div className="" key={index}>
      <div className={styles["MenuItemContainer2"]}>
      <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <h5 className={styles["MenuItemTitle"]}>{item.name} </h5>
      </div>
      <div className={styles["MenuItemContent2"]}>
        <img className={styles["MenuItemImg"]} src={item.url}  />
        <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', overflowX: 'hidden', paddingRight: '5px' }}>
          <p className={styles["MenuItemText"]}>{} </p>
        </div>
        <div className={styles["MenuItemQuantityContainer"]}>
          <p className={styles["MenuItemText"]}>{item.price} Ft</p>
        </div>
      </div>
    </div>
    </div>
    ));
  }

  return (
    <div>
      <h1>Össz ár: {fullPrice}</h1>
      <button onClick={clearCart}>Kosár ürítése</button>
      {getCartItems()}
    </div>
  );
}

export default Cart;