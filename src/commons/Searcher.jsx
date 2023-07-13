import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { setProducts } from "../state/products";
import "./styles/searcherStyles.css";

export default function Searcher() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const filterProducts = () => {
    const filteredProducts = products.filter((product) =>
      product.name.includes(query)
    );
    return filteredProducts;
  };

  useEffect(() => {
    dispatch(setProducts(filterProducts()));
  }, [query, dispatch]);

  const handleQueryChange = (event) => {
    const text = event.target.value;
    setQuery(text);
  };

  const handleButtonClick = () => {
    // Realiza las acciones necesarias al hacer clic en el botón
  };

  return (
    <div className="searchContainer">
      <input
        value={query}
        type="text"
        onChange={handleQueryChange}
        className="searchInput"
      />
      <button className="searchButton" onClick={handleButtonClick}>
        <SearchOutlined />
      </button>
    </div>
  );
}
