import './order.css'
/* import { collection, addDoc } from '@firebase/firestore'; */
import React /* , { useEffect } */ from 'react';
/* import { useLocation } from 'react-router'; */
/* import db from '../../firebase'; */
/* import nextId from "react-id-generator" */
/* import { Button } from 'reactstrap'; */


const Order = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    return (
        <aside>
            <h1>Detalle de la Orden</h1>
            <div>{cartItems.length === 0 && <div>Orden Vacia</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className='rows'>
                    <div>{item.name}</div>
                    <div>
                        <button onClick={() => onRemove(item)} >-</button> 
                        <button onClick={() => onAdd(item)} >+</button>
                    </div>
                    <div>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>

            ))}
        </aside>
    );
}

export default Order