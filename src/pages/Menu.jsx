import { useEffect, useState} from 'react/cjs/react.development';
import Products from '../Components/Products';


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
        <div>
          <Products products={products}/>
        </div>
            
        );
    }
     export default Menu;

    



