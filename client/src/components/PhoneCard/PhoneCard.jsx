import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";


function PhoneCard({ phone }) {
  return (
    <MDBCol md="6" lg="4" className="mb-4">
      <MDBCard key={phone.id}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image rounded hover-zoom"
        >
          <MDBCardImage
                src={`https://res.cloudinary.com/dm6a8aocc/image/upload/v1676570906/${phone.imageFileName}`}
                fluid
                className="w-100"
              />
          <Link to={`/${phone.id}`}>
            <div className="hover-overlay">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </div>
          </Link>
        </MDBRipple>
        <MDBCardBody>
          <a href="#!" className="text-reset">
            <h5 className="card-title mb-3">{phone.name}</h5>
          </a>
          <a href="#!" className="text-reset">
            <p>{phone.manufacturer}</p>
          </a>
          <h6 className="mb-3">
            <strong className="ms-2">{phone.price} €</strong>
          </h6>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default PhoneCard;
