import React from "react";
import Product from "./Product";

export default function Products({
  products,
  orderProducts,
  setOrderProducts,
}) {
  console.log(products);
  return (
    <div className="cards">
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            orderProducts={orderProducts}
            setOrderProducts={setOrderProducts}
          />
        ))}
      </div>
    </div>
  );
}
