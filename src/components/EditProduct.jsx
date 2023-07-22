import React from "react";
import axios from "axios";
import { BASE_ROUTE } from "../config";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductEdit } from "../state/editProduct";
import Swal from "sweetalert2";
import "./styles/editProduct.css";

function EditProduct() {
  const selectEditProduct = useSelector((state) => state.editProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${BASE_ROUTE}/admin/edit-product`,
        { name, price, description, image, id: selectEditProduct.id },
        { withCredentials: true }
      )
      .then((productEdit) => {
        console.log("PRODUCT EDIT", productEdit);
        dispatch(getProductEdit(productEdit.data));
        Swal.fire({
          icon: "success",
          title: `El producto se ha editado exitosamente`,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  useEffect(() => {
    setName(selectEditProduct.name);
    setPrice(selectEditProduct.price);
    setDescription(selectEditProduct.description);
    setImage(selectEditProduct.image);
  }, [selectEditProduct]);

  return (
    <Container fluid>
      <div className="container-editProduct">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={4}>
              <Image
                src={image}
                className=" img-fluid rounded-start image-style-editProduct"
                alt="Product image"
                variant="top"
              />
            </Col>
            <Col xs={12} md={8}>
              <h5 className="edit-title">Edit product</h5>
              <hr />
              <Form.Group className="mb-3 margin-input">
                <Form.Label className="input-edit">Product name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-3 margin-input">
                <Form.Label className="input-edit">Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Image"
                  value={image}
                  onChange={handleImageChange}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-3 margin-input">
                <Form.Label className="input-edit">Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="price"
                  value={price}
                  onChange={handlePriceChange}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-3 margin-input">
                <Form.Label className="input-edit">Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </Form.Group>
              <hr />
              <Col xs={12} md={4}>
                <div className="d-flex justify-content-center justify-content-md-start mb-4">
                  <Button
                    variant="info btn-lg"
                    className="button-style"
                    type="submit"
                  >
                    Accept
                  </Button>
                </div>
              </Col>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default EditProduct;
