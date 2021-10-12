import './menuOptions.css'
import React from 'react';
import Item from './item';

const BreakfastMenu = (props) => {
    const { menu, onAdd } = props
    return (
        <div className='breakfastMenu'>
            <h1>Opciones Desayuno</h1>
            <div className='menuOptions'>
                {menu.breakfast.map((item) => (
                    <Item key={item.id} item={item} onAdd={onAdd} />
                ))}
            </div>
        </div>

    );
}

export default BreakfastMenu
