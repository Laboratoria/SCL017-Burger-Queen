
import React from "react"
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap'


export default function Products({products = []}){

return <div>
          {
            products.map((item, index) => (
              
              <Row key={index}  xs={1} md={4} className="g-4">
              {Array.from({ length: 4}).map((_, idx) => (
               <Col key={idx}>
               <Card key={index} style={{ width: '7rem' }}>
                <CardImg top width="100%" src={item.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{item.price}</CardSubtitle> 
                  <Button>Agregar</Button>
                </CardBody>
              </Card>
              </Col>
               ))}
              </Row>
            ))}
         </div>
}