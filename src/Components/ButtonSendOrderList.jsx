import React from "react";
import { sendOrderList } from "../firebase";
import { Button } from "reactstrap";

const ButtonSendOrderList = ({ orderProducts, setOrderProducts }) => {
  return (
    <Button onClick={() => sendOrderList(...orderProducts)}>
      Enviar pedido
    </Button>
  );
};

export default ButtonSendOrderList;
