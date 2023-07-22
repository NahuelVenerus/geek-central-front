import { editCartProductQuantity } from "../services/cartProduct/editCartProductQuantity";
import { deleteCartProduct } from "../services/cartProduct/deleteCartProduct";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";

export default function CartCard({
  product,
  setDeletedProduct,
  total,
  setTotal,
  editado,
  setEditado,
}) {
  const [quantity, setQuantity] = useState(product.quantity);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const setCartProductQuantity = async () => {
    try {
      await editCartProductQuantity(product.id, quantity);
      setEditado(!editado);
    } catch (error) {
      console.log("setCartProductQuantity error", error);
    }
  };

  const handlerAdd = () => {
    setQuantity(quantity + 1);
  };

  const handlerRemove = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleEdit = () => {
    if (isEditing) {
      setIsEditing(false);
      setCartProductQuantity();
    } else setIsEditing(true);
    console.log("quantity", quantity);
  };

  const handleDelete = async () => {
    try {
      const deletedProduct = await deleteCartProduct(product.id);
      console.log("deleted Cart Product", deletedProduct);
      Swal.fire({
        text: "Producto eliminado con éxito",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      setDeletedProduct(product.product.id);
    } catch (error) {
      console.log("handleDelete error", error);
    }
  };

  useEffect(() => {}, [total]);

  return (
    <div>
      <div>
        <Card>
          <Card.Img src={product.product?.image} />
          <Card.Body>
            <Button onClick={handleDelete}>Delete</Button>
            <Card.Title>{product.product?.name}</Card.Title>
            <Card.Text>Valor: ${product.product?.price}</Card.Text>
            <Card.Text>Total: ${product.product?.price * quantity}</Card.Text>
            {isEditing ? (
              <div>
                <Card.Text>
                  <Button onClick={handlerRemove}>-</Button> {quantity}
                  <Button onClick={handlerAdd}>+</Button>
                </Card.Text>
                <Button onClick={handleEdit}>Guardar</Button>
              </div>
            ) : (
              <div>
                <Button onClick={handleEdit}>Edit</Button>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
