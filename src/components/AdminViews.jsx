import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserList } from "../state/usersList";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { getAllUsers } from "../services/admin/getAllUsers";
import "./styles/AdminViews.css";

const AdminViews = () => {
  const dispatch = useDispatch();

  const handleShowUsers = async () => {
    const usersData = await getAllUsers();
    dispatch(setUserList(usersData));
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row className="justify-content-center">
        <Col
          md={4}
          sm={6}
          xs={12}
          className="mb-4 d-flex justify-content-center"
        >
          <Link to="/admin-products" className="card-link">
            <Card className="admin-cards">
              <Button className="products-button">Productos</Button>
              <Card.Text>
                Aquí puedes ver, editar y eliminar los productos!
              </Card.Text>
            </Card>
          </Link>
        </Col>
        <Col
          md={4}
          sm={6}
          xs={12}
          className="mb-4 d-flex justify-content-center"
        >
          <Link to="/admin-order" className="card-link">
            <Card className="admin-cards">
              <Button className="orders-button">Pedidos</Button>
              <Card.Text>
                Aquí puedes ver los pedidos de todos los usuarios!
              </Card.Text>
            </Card>
          </Link>
        </Col>
        <Col
          md={4}
          sm={6}
          xs={12}
          className="mb-4 d-flex justify-content-center"
        >
          <Link to="/admin/manage-users" className="card-link">
            <Card className="admin-cards">
              <Button className="users-button" onClick={handleShowUsers}>
                Administrar Usuarios
              </Button>
              <Card.Text>
                Aquí puedes ver, editar y eliminar los usuarios!
              </Card.Text>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminViews;
