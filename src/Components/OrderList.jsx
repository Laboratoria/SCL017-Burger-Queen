import React from "react";
import { useState } from "react";
import { Fragment } from "react/cjs/react.development";
import { NavItem } from "reactstrap";

const OrderList = ({ products = [] }) => {
  const [order, setOrder] = useState(products);

  const addProduct = () => {
    console.log("click");
    setOrder([{ products }]);
  };

  return order.map((item, index) => (
    <Fragment>
      <h4>{order.name}</h4>
      <h4>{order.price}</h4>
    </Fragment>
  ));
};

export default OrderList;
