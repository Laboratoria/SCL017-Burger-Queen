import React from "react";

const OrderList = ({ orderProducts, setOrderProducts }) => {
  return (
    <div>
      {orderProducts.map((orderProduct, index) => (
        <div className="orderList" key={index}>
          <h6>{orderProduct.name}</h6>
          <h6>{orderProduct.price}</h6>
          {/* <h6>{orderProduct.quantity}</h6> */}
        </div>
      ))}
    </div>
  );
};

export default OrderList;
