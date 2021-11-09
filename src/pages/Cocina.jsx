import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ordersListCollectionRef = collection(db, "order");

export default function Cocina() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrderslist = async () => {
      const data = await getDocs(ordersListCollectionRef);
      setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getOrderslist();
  }, []);
  console.log(orders);
  return (
    <div className="home">
      {" "}
      <div
        className="backgroundHome"
        style={{
          backgroundImage: `url(http://imgfz.com/i/17quPTL.png)`,
        }}
      ></div>
      {orders.map((order, index) => {
        return (
          <div key={index}>
            <p>{order.id.name}</p>
          </div>
        );
      })}
    </div>
  );
}
   