import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const WaiterView = () => {

    return (
        <header>
            <p>Escoja tipo de menú</p>
            <Link  to='/breakfastMenu'>
                <Button>Desayuno</Button>
            </Link>
            <Link to='/lunchMenu'>
                <Button>Almuerzos</Button>
            </Link>
        </header>
    );
}

export default WaiterView