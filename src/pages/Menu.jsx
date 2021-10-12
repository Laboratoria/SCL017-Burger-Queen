import { useEffect, useState } from "react/cjs/react.development";
import Categories from "../Components/Categories";
import OrderList from "../Components/OrderList";
import OrderNav from "../Components/OrderNav";
import Products from "../Components/Products";
import "../Styles/Menu.css";

function Menu() {
  // const [products, setProducts] = useState([]);
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [promo, setPromo] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const initialUrl = `${process.env.PUBLIC_URL}/db.json`;

  const fetchProducts = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // setProducts(data.productos)
        setFood(
          data.productos.filter((products) => products.category === "comida")
        );
        setDrink(
          data.productos.filter((products) => products.category === "bebidas")
        );
        setPromo(
          data.productos.filter((products) => products.category === "promo")
        );
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts(initialUrl);
  }, [initialUrl]);

  return (
    <div className="MenuPage">
      <div className="containerProducts">
        <Categories />
        <div>
          <p>COMIDA</p>
          <Products
            products={food}
            orderProducts={orderProducts}
            setOrderProducts={setOrderProducts}
          />
        </div>
        <div>
          <p>BEBIDAS</p>
          <Products
            products={drink}
            orderProducts={orderProducts}
            setOrderProducts={setOrderProducts}
          />
        </div>
        <div>
          <p>PROMOS</p>
          <Products
            products={promo}
            orderProducts={orderProducts}
            setOrderProducts={setOrderProducts}
          />
        </div>
      </div>
      <div className="containerPedidos">
        <h1>Pedido Actual</h1>
        <OrderNav />
        <OrderList
          orderProducts={orderProducts}
          setOrderProducts={setOrderProducts}
        />
        <p>Resumen orden</p>
      </div>
    </div>
  );
}

export default Menu;
