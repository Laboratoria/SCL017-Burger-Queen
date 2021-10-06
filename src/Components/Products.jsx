
import React from "react"
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Button, Row, Col, Container} from 'reactstrap'

export default function Products({products = []}){


  const renderCard = (item, index) => {
    return ( 
                 <Card className="box" key={index} style={{ width: "8rem", height: "10rem" }}>
                  <CardImg variante="top" src={item.image} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">$ {item.price}</CardSubtitle> 
                    <Button>Agregar</Button>
                  </CardBody>
                  </Card>
                
  
                )
              }
          return <div className="grid">{products.map(renderCard)}</div>

     }
    
