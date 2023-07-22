import CartCard from "../commons/CartCard";
import { useSelector } from "react-redux";
import React from "react";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {cart.map((prod) => (
        <CartCard product={prod} />
      ))}
    </>
  );
}
