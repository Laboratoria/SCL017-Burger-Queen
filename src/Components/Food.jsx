import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from "reactstrap";

const Food = (item, index) => {
  const clickeado = () => {
    console.log(item.name + item.price);
  };

  return (
    <button key={index} onClick={clickeado}>
      <Card className="boxCard" key={index} style={{ padding: "5px" }}>
        <CardImg
          className="imgCard"
          src={item.image}
          alt="Card image cap"
          style={{ width: "100px", height: " onClick={}100px" }}
        />
        <CardBody className="cardBody" style={{ padding: "7px" }}>
          <CardTitle tag="h6">{item.name}</CardTitle>
          <CardSubtitle tag="p" className="mb-2 text-muted">
            $ {item.price}
          </CardSubtitle>
        </CardBody>
      </Card>
    </button>
  );
};

export default Food;
