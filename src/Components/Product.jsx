import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const Product = ({ product, orderProducts, setOrderProducts }) => {
  const addProductToOrder = () => {
    setOrderProducts([...orderProducts, product]);
  };

  return (
    <button
      onClick={addProductToOrder}
      style={{ padding: "1px", marginTop: "4px" }}
    >
      <Card className="boxCard" style={{ padding: "5px" }}>
        <CardImg
          className="imgCard"
          src={product.image}
          alt="Card image cap"
          style={{ width: "100px", height: "100px" }}
        />
        <CardBody className="cardBody" style={{ padding: "7px" }}>
          <CardTitle tag="h6">{product.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            $ {product.price}
          </CardSubtitle>
        </CardBody>
      </Card>
    </button>
  );
};
export default Product;
