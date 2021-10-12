import './menuOptions.css'
import React from 'react';
import Item from './item';

const LunchMenu = (props) => {
    const { menu, onAdd } = props;
    return (
        <div className='lunchMenu'>
            <h1>Opciones Almuerzo</h1>
            <div className='menuOptions'>
                {menu.lunch.map((item) => (
                    <Item key={item.id} item={item} onAdd={onAdd} />
                ))};
            </div>
        </div>
    );
}

export default LunchMenu


