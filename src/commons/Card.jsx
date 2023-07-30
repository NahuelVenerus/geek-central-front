import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_ROUTE } from "../config";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import { setProductList } from "../state/productList";
import { getProductEdit } from "../state/editProduct";
import Swal from "sweetalert2";
import "./styles/card.css";
import { FaTruck } from "react-icons/fa";

const Card = () => {
  const { nickname, is_admin } = useSelector((state) => state.user);
  //const products = useSelector((state) => state.productList);
  const [products, setProducts] = useState([]);
  const [refreshDelete, setRefreshDelete] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("IS ADMIN", is_admin);
  console.log("ProductList", products);

  /* const maxTitleLength = 55; */ // Cantidad máxima de caracteres para mostrar en el título

  /*  const truncatedTitle =
    title.length > maxTitleLength
      // ? title.substring(0, maxTitleLength) + " ..."
      : title; */

  // const navigate = useNavigate();

  const getAllProducts = () => {
    axios
      .get(`${BASE_ROUTE}/products/`)
      .then((foundProducts) => {
        console.log("FOUND PRODUCTS", foundProducts.data);

        const allProducts = foundProducts.data.filter(
          (product) => product.is_deleted === false
        );
        console.log("TODOS LOS PRODUCTS", allProducts);
        setProducts(allProducts);
        //dispatch(setProductList(foundProducts.data));
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (product) => {
    dispatch(getProductEdit(product));
    navigate("/editProduct");
  };

  /*   const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_ROUTE}/api/cart-products/add`, {
        id: id,
        nickname: nickname,
      })
      .then(() => {
        Swal.fire({
          text: "Producto agregado al carrito con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          text: "El producto no se pudo agregar al carrito",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        navigate("/");
        console.log(error);
      });
  };*/

  /*   const handleDelete = (id) => {
    axios
      .put(`${BASE_ROUTE}/admin/delete-product/${id}`)
      .then((product) => {
        console.log("ELIMINAR PRODUCTO", product.data);
        setRefreshDelete(!refreshDelete);
        Swal.fire({
          icon: "success",
          title: `Producto eliminado`,
          showConfirmButton: false,
        });
        // dispatch(setProductList(prod));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }; */

  const handleDelete = (id) => {
    axios.put(`${BASE_ROUTE}/admin/delete-product/${id}`);
    Swal.fire({
      icon: "question",
      iconColor: "#fcf300",
      title: "Estas seguro que quieres eliminar este producto?",
      confirmButtonText: "Aceptar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#e63946",
      confirmButtonColor: "#457b9d",
    })
      .then((prod) => {
        if (prod.isConfirmed) {
          console.log("PRODUCTO ELIMINADO", prod);
          setRefreshDelete(!refreshDelete);
          //dispatch(setProductList(prod.data));
          Swal.fire({
            icon: "success",
            title: `Producto eliminado`,
            showConfirmButton: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, [refreshDelete]);

  return (
    <Row xs={1} sm={2} md={3} lg={4}>
      {products.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        products.map((product) => {
          return (
            <div
              className="col d-flex justify-content-center mb-2"
              key={product.id}
            >
              <div
                className="product-card card pink-shadow mb-1 bg-white rounded"
                style={{ width: "20rem" }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/product-detail/${product.id}`}
                >
                  <img
                    style={{ height: "300px" }}
                    src={product.image}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <hr className="card-line" />
                <div className="card-body">
                  <h4 className="card-price">{product.name}</h4>
                  <h2 className="card-price">${product.price}</h2>
                  <h5 className="card-shipping">
                    Free Shipping <FaTruck />
                  </h5>
                  <h6 className="product-card-text card-text">
                    {/* {truncatedTitle} */}
                  </h6>

                  <div className="d-flex" style={{ height: "50px" }}>
                    {is_admin ? (
                      <div>
                        <button
                          onClick={() => {
                            handleDelete(product.id);
                          }}
                          className="btn btn-info button-styles mb-3"
                        >
                          Delete
                        </button>
                        <Link to={`/editProduct/${product.id}`}>
                          <button
                            onClick={() => {
                              handleEdit(product);
                            }}
                            className="btn btn-info button-styles mb-3 "
                          >
                            Edit
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <button
                        className="btn btn-info button-styles" /* onClick={handleAdd} */
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </Row>
  );
};

export default Card;
