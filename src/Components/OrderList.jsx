import React from "react";

const OrderList = ({ orderProducts, setOrderProducts }) => {
  return (
    <div>
      {orderProducts.map((orderProduct) => (
        <div>
          <h2>{orderProduct.name}</h2>,<h2>{orderProduct.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
