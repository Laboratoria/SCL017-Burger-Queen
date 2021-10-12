import React from 'react'
import { Card, CardImg, CardHeader, CardText, CardBody, Button } from 'reactstrap'

const Item = (props) => {
    const { item, onAdd } = props
    return (
        <div>
            <Card>
                <CardImg></CardImg>
                <CardHeader>{item.name}</CardHeader>
                <CardBody>
                    <CardText>precio: ${item.price}</CardText>
                    <Button onClick={() => onAdd(item)}>Agregar</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Item;
