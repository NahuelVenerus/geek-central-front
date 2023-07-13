import React from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
//import { BASE_ROUTE } from "../../config";
import { useSelector } from "react-redux";
//import { setProductList } from "../../state/productList";
//import Swal from "sweetalert2";
import "./styles/card.css";
import { FaTruck } from "react-icons/fa";

const Card = ({ title, price, image, id }) => {
  const { nickname, is_admin } = useSelector((state) => state.user);

  const maxTitleLength = 55; // Cantidad máxima de caracteres para mostrar en el título

  const truncatedTitle =
    title.length > maxTitleLength
      ? title.substring(0, maxTitleLength) + " ..."
      : title;
  /*   const dispatch = useDispatch();
  const navigate = useNavigate(); */

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
  };

  const handleDelete = () => {
    axios
      .delete(`${BASE_ROUTE}/api/admin/delete-product`, {
        data: {
          id: id,
        },
      })
      .then((prod) => {
        Swal.fire({
          text: "Producto eliminado con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        dispatch(setProductList(prod));
        navigate("/admin-products");
      });
  }; */

  return (
    <div className="col d-flex justify-content-center mb-4">
      <div
        className="product-card card pink-shadow mb-1 bg-white rounded"
        style={{ width: "20rem" }}
      >
        <Link style={{ textDecoration: "none" }} to={`/product-detail/${id}`}>
          <img
            style={{ height: "300px" }}
            src={image}
            className="card-img-top"
            alt="..."
          />
        </Link>
        <hr className="card-line" />
        <div className="card-body">
          <h2 className="card-price">${price}</h2>
          <h5 className="card-shipping">
            Free Shipping <FaTruck />
          </h5>
          <h6 className="product-card-text card-text">{truncatedTitle}</h6>

          <div className="d-flex" style={{ height: "50px" }}>
            {is_admin ? (
              <>
                <button /* onClick={handleDelete} */ className="btn btn-danger">
                  Delete
                </button>
                <Link to={`/EditProduct/${id}`}>
                  <button className="btn btn-info button-styles">Edit</button>
                </Link>
              </>
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
};

export default Card;
