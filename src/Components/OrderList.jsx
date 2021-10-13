import React from "react";

const OrderList = ({ orderProducts, setOrderProducts, quantity }) => {
  return (
    <div>
      {orderProducts.map((orderProduct) => (
        <div>
          <h5>{orderProduct.name}</h5>
          <h6>{orderProduct.price}</h6>
          <h6>{orderProduct.quantity}</h6>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
