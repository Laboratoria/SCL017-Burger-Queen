import { useEffect, useState} from 'react/cjs/react.development';
import { Col, Row, Container} from 'reactstrap';
import Categories from '../Components/Categories';
import OrderNav from '../Components/InputNames';
import Products from '../Components/Products';
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
                  <Products products={products}/>
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

    



