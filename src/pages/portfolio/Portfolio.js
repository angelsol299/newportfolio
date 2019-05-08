import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ReactFrameworks from "./frameworks/ReactFramework";

const Portfolio = () => {
  return (
    <MDBContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
      <MDBRow>
        <ReactFrameworks />
      </MDBRow>
      <br />
      <MDBRow>
        <ReactFrameworks />
      </MDBRow>
      <br />
      <MDBRow>
        <ReactFrameworks />
      </MDBRow>
    </MDBContainer>
  );
};

export default Portfolio;
