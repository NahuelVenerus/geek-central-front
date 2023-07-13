import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/profileStyles.css";
// import { useSelector } from "react-redux";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
} from "mdb-react-ui-kit";

const user = {
  id: 1,
  name: "Nahuel",
  nickname: "Ashneroh",
  lastname: "Venerus",
  address: "Nahue's House",
  img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
  phone: 1136441633,
  zip_code: 1228,
  city: "Ciudad Autónoma de Buenos Aires",
  email: "nahuelvenerus@gmail.com",
  password: "Nahue123",
  is_admin: false,
  is_deleted: false,
};

export default function Profile() {
  const {
    name,
    nickname,
    lastname,
    address,
    img,
    phone,
    zip_code,
    email,
    city,
  } = user;
  // const user = useSelector((state) => state.user);
  return (
    <MDBContainer className="profile-container py-5">
      <MDBRow>
        <MDBCol lg="4">
          <MDBCard className="mb-4 letter-color">
            <MDBCardBody className="text-center">
              <MDBCardImage
                src={img}
                alt="avatar"
                className="profile-picture rounded-circle"
                fluid
              />
              <p className="nickname text-muted mb-4 letter-subtitle">
                {nickname}
              </p>
              <div className="d-flex justify-content-center mb-2">
                <MDBBtn className="letter-subtitle">Editar Perfil</MDBBtn>
                <MDBBtn className="ms-1 btn btn-danger letter-subtitle">
                  Borrar Perfil
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="8">
          <MDBCard className="text-center mb-4 letter-subtitle">
            <MDBCardBody>
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Nombre Completo</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    {name} {lastname}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Email</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{email}</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Numero de Teléfono</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{phone}</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Dirección</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{address}</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Código Postal</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{zip_code}</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Localidad</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{city}</MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
