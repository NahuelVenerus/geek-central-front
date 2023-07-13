import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { BASE_ROUTE } from "../config";
import "./styles/productDetail.css";

import { FaTruck } from "react-icons/fa";
function ProductDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("PRODUCT DETAIL", data);
        setProduct(data);
      });
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div className="container py-4 custom-image">
      <div className="card-detail">
        <div className="row g-0">
          <div className="col-4">
            <img
              src={product.image}
              className="card-img-top img-fluid rounded-start"
              alt=""
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 class="card-title product-title">{product.title}</h5>
              <hr />
              <h5 class="card-title">Price:</h5>
              <h5 class="card-title">${product.price}</h5>
              <hr />

              <h5 class="card-title">Description:</h5>
              <p class="card-text">{product.description}</p>
              <hr />
              <h5 className="detail-product-shipping">
                Free Shipping <FaTruck />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
