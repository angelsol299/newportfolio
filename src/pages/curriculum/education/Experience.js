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

const AlignLeft = {
  textAlign: "left",
  marginLeft: "45px"
};

const Experience = () => {
  return (
    <div>
      <h4 className="h5-responsive" style={{ textAlign: "left" }}>
        Experience
      </h4>
      <hr />
      <br />
      <MDBCardTitle style={AlignLeft}>Frontend Developer intern</MDBCardTitle>
      <div style={{ display: "flex" }}>
        <MDBCardText style={AlignLeft}>
          <strong>Digital Artist AB</strong> <br />
          March 2019 – Present <br />
          Stockholm, Sweden <br />
          React JS, JSS, Material UI, Next.JS
        </MDBCardText>
        <MDBRow style={{ flex: 10 }}>
          <MDBCol style={{ top: "-30%", left: "15%" }}>
            <img
              height="100px"
              width="100px"
              src="https://media.licdn.com/dms/image/C4E0BAQEOlyiLH85-7w/company-logo_200_200/0?e=2159024400&v=beta&t=b33a9bHMPa9QL9ZcOohB-se8HRkd4PyJvuBh3NUa1mA"
              className="rounded mx-auto d-block"
              alt="aligment"
            />
          </MDBCol>
        </MDBRow>
      </div>
      <hr />
      <MDBCardTitle style={AlignLeft}>Frontend Developer intern</MDBCardTitle>
      <div style={{ display: "flex" }}>
        <MDBCardText style={AlignLeft}>
          <strong>ICA Banken</strong> <br />
          Oct 2018 – Dec 2018 <br />
          Stockholm, Sweden <br />
          React JS, TypeScript, Story Books, Styled Components and CSS.
        </MDBCardText>
        <MDBRow style={{ flex: 10 }}>
          <MDBCol style={{ top: "-25%", left: "-4%" }}>
            <img
              height="100px"
              width="100px"
              src="https://www.rabatterat.se/finans-logos/ica-banken.gif"
              className="rounded mx-auto d-block"
              alt="aligment"
            />
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default Experience;
