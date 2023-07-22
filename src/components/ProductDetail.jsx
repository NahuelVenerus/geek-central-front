import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { BASE_ROUTE } from "../config";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./styles/productDetail.css";

import { FaTruck } from "react-icons/fa";
function ProductDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProducts = (id) => {
    axios
      .get(`${BASE_ROUTE}/products/${id}`)
      .then((fetchedProduct) => {
        setProduct(fetchedProduct.data);
        console.log("FETCH PRODUCT", fetchedProduct);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts(id);
  }, []);

  return (
    <Container fluid className="py-4 custom-image">
      <div className="product-detail">
        <Row>
          <Col xs={12} md={4}>
            <Image
              src={product.image}
              className="img-fluid rounded-start image-style-detail"
              alt="product image"
            />
          </Col>
          <Col xs={12} md={8}>
            <div className="product-detail-body">
              <h5 className="product-detail-title product-title">
                {product.name}
              </h5>
              <hr />
              <h5 className="product-detail-title">Price: ${product.price}</h5>
              <hr />

              <h5 className="product-detail-title">Description:</h5>
              <p className="product-detail-text">{product.description}</p>
              <hr />

              <h5>
                Free Shipping <FaTruck />
              </h5>
              <hr />

              <Col xs={12} md={4}>
                <div className="d-flex justify-content-center justify-content-md-start mt-3">
                  <Button variant="info btn-lg" className="button-style">
                    Add to Cart
                  </Button>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ProductDetail;
