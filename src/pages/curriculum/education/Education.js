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

const Education = () => {
  return (
    <div>
      <h4 className="h5-responsive" style={{ textAlign: "left" }}>
        Education
      </h4>
      <hr />
      <br />
      <MDBCardTitle style={AlignLeft}>Nackademin</MDBCardTitle>
      <div style={{ display: "flex" }}>
        <MDBCardText style={AlignLeft}>
          <strong>Frontend Developer</strong> <br />
          Aug 2017 – May 2019 <br />
          Stockholm, Sweden <br />
          CSS, HTML, JavaScript, PHP. React JS, SASS.
        </MDBCardText>
        <MDBRow style={{ flex: 10 }}>
          <MDBCol style={{ top: "-30%", left: "10%" }}>
            <img
              height="100px"
              width="100px"
              src="https://www.studentkortet.se/wp-content/uploads/2014/12/Logga_NAckademin-370x370.jpg"
              className="rounded mx-auto d-block"
              alt="aligment"
            />
          </MDBCol>
        </MDBRow>
      </div>
      <hr />
      <MDBCardTitle style={AlignLeft}>KTH </MDBCardTitle>
      <div style={{ display: "flex" }}>
        <MDBCardText style={AlignLeft}>
          <strong>Master's in Economics</strong> <br />
          Aug 2015 – June 2017 <br />
          Stockholm, Sweden <br />
          Master's in Economics of Innovation and Growth
        </MDBCardText>
        <MDBRow style={{ flex: 10 }}>
          <MDBCol style={{ top: "-25%", left: "8%" }}>
            <img
              height="100px"
              width="100px"
              src="https://intra.kth.se/polopoly_fs/1.858858.1550153784!/image/KTH_Logotyp_RGB_2013.png"
              className="rounded mx-auto d-block"
              alt="aligment"
            />
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default Education;
