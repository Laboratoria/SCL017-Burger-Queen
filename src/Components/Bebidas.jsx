
import React from "react"
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Button } from 'reactstrap'

export default function Bebidas({products = []}){


  const renderCard = (item, index) => {
    return ( 
                 <Card className="boxCard" key={index}>
                  <CardImg className="imgCard" src={item.image} alt="Card image cap" style={{width: "100px", height:"100px"}}/>
                  <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">$ {item.price}</CardSubtitle> 
                    <Button>Agregar</Button>
                  </CardBody>
                  </Card>
                
  
                )
              }
          return <div className="cards">
                    <p>BEBIDA</p>
                    {products.filter(products => products.category==="bebidas").map(renderCard)}
                  </div>

     }