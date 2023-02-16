import React from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBIcon,
    MDBBtn,
  } from "mdb-react-ui-kit";

function PhoneDetailsCard({phone}) {
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow>
        <MDBCol md="4" className="mb-4 mb-lg-0">
          <MDBCard className="text-black">
            <MDBCardImage
              src={`https://res.cloudinary.com/dm6a8aocc/image/upload/v1676570906/${phone.imageFileName}`}
              position="top"
              alt="iPhone"
            />
            <MDBCardBody>
              <div className="text-center mt-1">
                <MDBCardTitle className="h4">iPhone X</MDBCardTitle>
                <h6 className="text-primary mb-1 pb-3">Price: {phone.price}€</h6>
              </div>
              <div className="text-center">
                <div
                  className="p-3 mx-n3 mb-4"
                  style={{ backgroundColor: "#eff1f2" }}
                >
                  <h5 className="mb-0">Quick Look</h5>
                </div>

                <div className="d-flex flex-column mb-4">
                  <span className="h1 mt-4 mb-0">Screen</span>
                  <span>{phone.screen}</span>
                </div>

                <div className="d-flex flex-column mb-4">
                  <ul className="list-unstyled mb-0">
                    <li aria-hidden="true">—</li>
                    <li>Color: {phone.color}</li>
                    <li aria-hidden="true">—</li>
                  </ul>
                </div>

                <div className="d-flex flex-column mb-4">
                  <span className="h1 mb-0">2x</span>
                  <span>Optical zoom range</span>
                </div>

                <div
                  className="p-3 mx-n3 mb-4"
                  style={{ backgroundColor: "#eff1f2" }}
                >
                  <h5 className="mb-0">Capacity</h5>
                </div>

                <div className="d-flex flex-column mb-4 lead">
                  <span className="mb-2">Processor: {phone.processor}</span>
                  <span className="mb-2">RAM: {phone.ram}GB</span>
                  <span style={{ color: "transparent" }}>0</span>
                </div>
              </div>

              <div className="d-flex flex-row">
                <MDBBtn color="danger" className="flex-fill ms-2">
                  Buy now
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
  )
}

export default PhoneDetailsCard