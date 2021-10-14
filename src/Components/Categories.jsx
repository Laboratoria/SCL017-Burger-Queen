import React from "react";
import { Button, ButtonGroup } from "reactstrap";

export default function Categories({ comida = [] }) {
  return (
    <ButtonGroup>
      <Button>COMIDA</Button>
      <Button>PROMOS</Button>
      <Button>BEBIDAS</Button>
    </ButtonGroup>
  );
  }
  