import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

const AlignLeft = {
  textAlign: "left",
  marginLeft: "45px"
};

const MarginLeft = {
  MarginLeft: "15px"
};

const Charts = () => {
  return (
    <MDBCol className="d-flex justify-content-center">
      <MDBCard style={{ width: "52rem" }}>
        <MDBCardBody>
          <h4 className="h5-responsive" style={{ textAlign: "left" }}>
            Experience
          </h4>
          <hr />
          <br />
          <MDBCardTitle style={AlignLeft}>
            Frontend Developer intern
          </MDBCardTitle>
          <MDBCardText style={AlignLeft}>
            <strong>Digital Artist AB</strong> <br />
            March 2019 – Present <br />
            Stockholm, Sweden <br />
            React JS, JSS, Material UI, Next.JS
          </MDBCardText>
          <hr />
          <MDBCardTitle style={AlignLeft}>
            Frontend Developer intern
          </MDBCardTitle>
          <MDBCardText style={AlignLeft}>
            <strong>ICA Banken</strong> <br />
            Oct 2018 – Dec 2018 <br />
            Stockholm, Sweden <br />
            React JS, TypeScript, Story Books, Styled Components and CSS.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Charts;
