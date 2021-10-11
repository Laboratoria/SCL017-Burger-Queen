import { useEffect, useState } from "react/cjs/react.development";
import Bebidas from "../Components/Bebidas";
import Categories from "../Components/Categories";
import FoodList from "../Components/FoodList";
import OrderD from "../Components/OrderD";
import OrderNav from "../Components/OrderNav";
import Promo from "../Components/Promo";
import "../Styles/Menu.css";

function Menu() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const initialUrl = `${process.env.PUBLIC_URL}/db.json`;

  const fetchProducts = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data.productos))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts(initialUrl);
  }, [initialUrl]);

  return (
    <div className="MenuPage">
      <div className="containerProducts">
        <Categories />
        <FoodList products={products} order={order} setOrder={setOrder} />
        <Bebidas products={products} />
        <Promo products={products} />
      </div>
      <div className="containerPedidos">
        <h1>Pedido Actual</h1>
        <OrderNav />
        <OrderD order={order} setOrder={setOrder} />
        <p>Resumen orden</p>
      </div>
    </div>
  );
}

export default Menu;
