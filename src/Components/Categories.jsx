import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import Comida from "./FoodList";

export default function Categories({ comida = [] }) {
  const renderCard = () => {
    return (
      <div>
        <Comida />
      </div>
    );
  };

  return (
    <ButtonGroup>
      <Button onClick={renderCard}>COMIDA</Button>
      <Button>PROMOS</Button>
      <Button>BEBIDAS</Button>
    </ButtonGroup>
  );
}
