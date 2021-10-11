
import React from "react"
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Button } from 'reactstrap'

export default function Products({products = []}){

  const renderCard = (item, index) => {
    return (    <Button style={{padding: "1px", marginTop: '4px'}}>
                 <Card className="boxCard" key={index} style={{padding: '5px'}}>
                  <CardImg className="imgCard" src={item.image} alt="Card image cap" style={{width: "100px", height:"100px"}}/>
                  <CardBody className="cardBody" style={{padding: '7px'}}>
                    <CardTitle tag="h6">{item.name}</CardTitle>
                    <CardSubtitle tag="h7" className="mb-2 text-muted">$ {item.price}</CardSubtitle> 
                  </CardBody>
                  </Card>
                </Button>
  
                )
              }
          return <div className="cards">
                    <p>COMIDA</p>
                    {products.filter(products => products.category==="comida").map(renderCard)}
                    <p>BEBIDA</p>
                    {products.filter(products => products.category==="bebidas").map(renderCard)}
                    <p>PROMOS</p>
                    {products.filter(products => products.category==="promo").map(renderCard)}
                  </div>

     }
    
