import React from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBNavLink
} from "mdbreact";
import "./HomePage.css";
import VideoBackground from "./VideoBackground";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <h1
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                backgroundColor: "#f1f1f1",
                color: "rgba(0, 0, 0, 0.45)",
                padding: "10px 25px"
              }}
            >
              Junior Frontend Developer
            </h1>
            <VideoBackground />
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default HomePage;
