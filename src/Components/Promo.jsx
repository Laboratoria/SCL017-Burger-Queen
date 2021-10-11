
import React from "react"
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Button } from 'reactstrap'

export default function Promo({products = []}){


  const renderCard = (item, index) => {
    return ( 
              <button key={index}>
              <Card className="boxCard" key={index} style={{padding: '5px'}}>
              <CardImg className="imgCard" src={item.image} alt="Card image cap" style={{width: "100px", height:"100px"}}/>
              <CardBody className="cardBody" style={{padding: '7px'}}>
                <CardTitle tag="h6">{item.name}</CardTitle>
                <CardSubtitle tag="p" className="mb-2 text-muted">$ {item.price}</CardSubtitle> 
              </CardBody>
              </Card>
              </button>
  
                )
    }
          return <div className="cards">
                    <p>PROMOS</p>
                    {products.filter(products => products.category==="promo").map(renderCard)}
                  </div>

     }