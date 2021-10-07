import { useEffect, useState} from 'react/cjs/react.development';
import Bebidas from '../Components/Bebidas';
import Categories from '../Components/Categories';
import Comida from '../Components/Comida';
import OrderNav from '../Components/InputNames';

import Promo from '../Components/Promo';
import '../Styles/Menu.css' 


function Menu(){

    const [products, setProducts] = useState([]);

   
    const initialUrl = `${process.env.PUBLIC_URL}/db.json`;

    const fetchProducts = (url) => {
    
        fetch(url)
            .then(response => response.json())
            .then(data =>  setProducts(data.productos))
            .catch(error => console.log(error)) 
    };

    useEffect(()=> {
        fetchProducts(initialUrl);
    },)


    return (
        <div className="MenuPage">
           
            <div className="containerProducts">
                  <Categories/>
                  <Comida products={products}/>
                  <Bebidas products={products}/>
                  <Promo products={products}/>
            </div>
            <div className="containerPedidos">
                   <h1>Pedido Actual</h1>
                   <OrderNav/>
                   <p>Resumen Orden</p>
            </div>         
        </div>
            
        );
    }
     export default Menu;

    



