import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Searcher from "../commons/Searcher";
import geekLogo from "../assets/geekLogo.png";
import "./styles/navbar.css";

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleUserClick = () => {
    if (!user.nickname) {
      navigate("/login");
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .get(`${BASE_ROUTE}/api/users/logout`, { withCredentials: true })
      .then((resp) => {
        dispatch(setUser(resp.data));
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Navbar
        className="navbar-father"
        bg="black"
        variant="dark"
        expand="md"
        fixed="top"
      >
        <Navbar.Brand as={Link} to="/">
          <img
            src={geekLogo}
            alt="Geek Central Logo"
            width="300vh"
            height="60vh"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <div className="d-flex mx-auto">
            <Searcher />
          </div>
          <Nav style={{ marginRight: "2vw" }}>
            <Dropdown align={{ lg: "start" }}>
              <Dropdown.Toggle
                as={CustomToggle}
                id="user-dropdown"
                onClick={handleUserClick}
              >
                <FaUser size={30} />
              </Dropdown.Toggle>
              <Dropdown.Menu
                align={{ lg: "start" }}
                className="dropdown-menu-right"
              >
                <Dropdown.Item as={Link} to="/profile">
                  Perfil
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav style={{ marginRight: "2vw" }}>
            <Nav.Link
              as={Link}
              to={user.nickname ? `/cart/:${user.nickname}` : "/login"}
            >
              <FaShoppingCart size={40} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

// Componente personalizado para el toggle del Dropdown
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="/"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="nav-link"
  >
    {children}
  </a>
));

export default CustomNavbar;
