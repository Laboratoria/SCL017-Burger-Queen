
import React from "react"
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Button } from 'reactstrap'

export default function Products({products = []}){


  const renderCard = (item, index) => {
    return ( 
                 <Card className="boxCard" key={index} style={{padding: '5px'}}>
                  <CardImg className="imgCard" src={item.image} alt="Card image cap" style={{width: "100px", height:"100px"}}/>
                  <CardBody className="cardBody" style={{padding: '7px'}}>
                    <CardTitle tag="h6">{item.name}</CardTitle>
                    <CardSubtitle tag="h7" className="mb-2 text-muted">$ {item.price}</CardSubtitle> 
                    <Button style={{padding: "1px", marginTop: '4px'}}>Agregar</Button>
                  </CardBody>
                  </Card>
                
  
                )
              }
          return <div className="cards">{products.map(renderCard)}</div>

     }
    
