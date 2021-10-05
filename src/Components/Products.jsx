
import React from "react"
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap'


export default function Products({products = []}){

return <div>
          {
            products.map((item, index) => (
              
              <Row key={index}  xs={10} md={3} className="g-4">
              {Array.from({ length: 3}).map((_, idx) => (
               <Col key={idx}>
               <Card key={index} style={{ width: '6rem', height: '8rem' }}>
                <CardImg top width="0%" src={item.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h10">{item.name}</CardTitle>
                  <CardSubtitle tag="h8" className="mb-2 text-muted">{item.price}</CardSubtitle> 
                  <Button>Agregar</Button>
                </CardBody>
              </Card>
              </Col>
               ))}
              </Row>
            ))}
         </div>
}