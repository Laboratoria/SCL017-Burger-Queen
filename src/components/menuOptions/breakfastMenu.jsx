import './menuOptions.css'
import React from 'react';
import menuOptions from '../../menu.json'
import { Card, CardText, Button, CardImg, CardBody, CardHeader } from 'reactstrap';


const BreakfastMenu = (props) => {
    return (
        <div className='breakfastMenu'>
            <h1>Opciones Desayuno</h1>
            <div className='menuOptions'>
                {menuOptions.breakfast.map((breakfastMenuItems) => (
                    <Card key={breakfastMenuItems.id}>
                        <CardImg></CardImg>
                        <CardHeader>{breakfastMenuItems.name}</CardHeader>
                        <CardBody>
                            <CardText>Precio: ${breakfastMenuItems.price}</CardText>
                            <Button>Agregar</Button>
                        </CardBody>
                    </Card>
                ))}
              {/*   {menuOptions.breakfast.map((breakfastMenuItems) => (
                    <Card key={breakfastMenuItems.id}>
                        <CardImg></CardImg>
                        <CardHeader>{breakfastMenuItems.name}</CardHeader>
                        <CardBody>
                            <CardText>Precio: ${breakfastMenuItems.price}</CardText>
                            <Button>Agregar</Button>
                        </CardBody>
                    </Card>
                ))} */}
            </div>
        </div>
        
    );
}

export default BreakfastMenu