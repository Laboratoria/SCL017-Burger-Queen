import React from "react";
import Food from "./Food";

export default function FoodList({ products = [] }) {
  return (
    <div className="cards">
      <p>COMIDA</p>
      {products.filter((products) => products.category === "comida").map(Food)}
    </div>
  );
}
