import React, { useEffect, useState } from "react";
import Card from "../commons/Card";

const FakeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  console.log("producto", products);
  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FakeProducts;
