import './menuOptions.css'
import React from 'react';
import menu from '../../menu.json'
import { Card, CardTitle, CardText, Button, CardImg, CardBody, CardHeader } from 'reactstrap';


const LunchMenu = () => {

    return (
        <div className='lunchMenu'>
            <h1>Opciones Almuerzo</h1>
            <div className='menuOptions'>
                {menu.lunch.map((lunchMenuItems) => (
                    <Card key={lunchMenuItems.id}>
                        <CardImg></CardImg>
                        <CardHeader>{lunchMenuItems.name}</CardHeader>
                        <CardBody>
                            <CardText>precio: ${lunchMenuItems.price}</CardText>
                            <Button>Agregar</Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default LunchMenu