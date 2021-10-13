import './order.css'
import { collection, addDoc } from '@firebase/firestore';
import React/* , { useEffect }  */ from 'react';
/* import { useLocation } from 'react-router'; */
import db from '../../firebase';
/*import nextId from "react-id-generator"; */
import { Button } from 'reactstrap';


const Order = (props) => {
    const { cartItems, onAdd, onRemove, removeAllItems } = props;
    const orderPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0); /* a=acumulator c=currentItem  */

    const getTimeAndDate = () => {
        const today = new Date();
        const date = `${today.getDate()} - ${(today.getMonth() + 1)} - ${today.getFullYear()}`;
        const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        const timeAndDate = `${time} ${date}`;
        return timeAndDate;
    }

    const saveInFirestore = async () => {
        const docRef = await addDoc(collection(db, 'orders'), {
            /*  orderId: nextId('order-'), */
            total: orderPrice,
            time: getTimeAndDate(),
            order: cartItems,
        });
    };


    return (
        <aside>
            <h1>Detalle de la Orden</h1>
            <div>{cartItems.length === 0 && <div>Orden Vacia</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className='rows'>
                    <div>{item.name}</div>
                    <div className='buttonsDiv'>
                        <Button onClick={() => onRemove(item)} >-</Button>
                        <Button onClick={() => onAdd(item)} >+</Button>
                    </div>
                    <div>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <div>
                    <hr></hr>
                    <div className='rows'>
                        <strong>Total</strong>
                        <strong>${orderPrice.toFixed(2)}</strong>
                    </div>
                    <hr></hr>
                    <div className='buttonsDiv'>
                        <Button onClick={() => removeAllItems()} >Borrar pedido</Button>
                        <Button onClick={() => saveInFirestore()}>Guardar Pedido</Button>
                    </div>
                </div>
            )}
        </aside>
    );
}

export default Order