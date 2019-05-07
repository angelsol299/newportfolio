import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow
} from "mdbreact";
import Experience from "./education/Experience";
import Education from "./education/Education";

const AlignLeft = {
  textAlign: "left",
  marginLeft: "45px"
};

const MarginLeft = {
  MarginLeft: "15px"
};

const Charts = () => {
  return (
    <MDBCol
      className="d-flex justify-content-center"
      style={{ marginBottom: "-580px" }}
    >
      <MDBCard style={{ width: "52rem" }}>
        <MDBCardBody>
          <Experience />
          <br />
          <Education />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Charts;
