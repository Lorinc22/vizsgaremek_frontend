import { useState, useEffect } from "react";
import styles from "./cart.module.css"
import { Link } from "react-router-dom";


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
      return <h1 className={styles["EmptyCartTitle"]}>A kosár üres</h1>;
    }

    return cart.map((item, index) => (

          <div className={styles["MenuItemContainer2"]}>
            <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
              <h5 className={styles["MenuItemTitle"]}>{item.name} </h5>
            </div>
            <div className={styles["MenuItemContent2"]}>
              <img className={styles["MenuItemImg"]} src={item.url} />
              <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', overflowX: 'hidden', paddingRight: '5px' }}>
                <p className={styles["MenuItemText"]}>{ } </p>
              </div>
              <div className={styles["MenuItemQuantityContainer"]}>
                <p className={styles["MenuItemText"]}>{item.price} Ft</p>
              </div>
            </div>
          </div>
       
    ));
  }

  return (
    <div>
      <div className="row d-flex justify-content-center">
        {getCartItems()}
      </div>
      <h1 className={styles["FullPriceTitle"]}>Fizetendő: {fullPrice} Ft</h1>
      <div className={styles["CenterBtnDiv"]}>
      <button onClick={clearCart} className={styles["button1"]}>Kosár ürítése</button>
      <Link to="/DeliveryInformations">
        <button className="button1">Tovább</button>
      </Link>
      </div>
      
    </div>
  );
}

export default Cart;