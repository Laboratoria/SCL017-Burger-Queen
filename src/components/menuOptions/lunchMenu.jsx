import './menuOptions.css'
import React from 'react';
import { Card, CardText, Button, CardImg, CardBody, CardHeader } from 'reactstrap';


const LunchMenu = (props) => {
    const { menu } = props;
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


