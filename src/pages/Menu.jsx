import { render } from '@testing-library/react';
import { useEffect, useState, ReactDOM} from 'react/cjs/react.development';
import Products from '../Components/Products';

function Menu(){
    

    const [products, setProducts] = useState([]);

    const initialUrl = 'http://localhost:3000/productos';
    const fetchProducts = (url) => {
    
    fetch(url)
        .then(response => response.json())
        .then(data =>  setProducts(data))
        .catch(error => console.log(error)) 
    };

        useEffect(()=> {
            fetchProducts(initialUrl);
        }, [])
       

    return (
        <div>
          <Products products={products}/>
        </div>
            
        );
    }
     export default Menu;

    



