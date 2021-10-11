import './menuOptions.css'
import React from 'react';
import menu from '../../menu.json'
import { Card, CardTitle, CardText, Button, CardImg, CardBody, CardHeader } from 'reactstrap';


const BreakfastMenu = () => {

    return (
        <div className='breakfastMenu'>
            <h1>Opciones Desayuno</h1>
            <div className='menuOptions'>
                {menu.breakfast.map((breakfastMenuItems) => (
                    <Card key={breakfastMenuItems.id}>
                        <CardImg></CardImg>
                        <CardHeader>{breakfastMenuItems.name}</CardHeader>
                        <CardBody>
                            <CardText>Precio: ${breakfastMenuItems.price}</CardText>
                            <Button>Agregar</Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default BreakfastMenu