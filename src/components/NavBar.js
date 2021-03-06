import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink
} from "mdbreact";

class NavBar extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  render() {
    return (
      <MDBNavbar
        style={{
          backgroundColor: "#f1f1f1",
          background: "rgba(0, 0, 0, 0.45)"
        }}
        dark
        expand="md"
        fixed="top"
        scrolling
      >
        <MDBNavbarBrand
          style={{
            color: "white",
            fontFamily: "Dancing Script",
            fontSize: "23px"
          }}
          href="/"
        >
          Angel Osoria
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("mainNavbarCollapse")} />
        <MDBCollapse
          id="mainNavbarCollapse"
          isOpen={this.state.collapseID}
          navbar
        >
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink
                style={{ color: "white" }}
                exact
                to="/"
                onClick={this.closeCollapse("mainNavbarCollapse")}
              >
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                style={{ color: "white" }}
                onClick={this.closeCollapse("mainNavbarCollapse")}
                to="/curriculum"
              >
                Curriculum
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                style={{ color: "white" }}
                onClick={this.closeCollapse("mainNavbarCollapse")}
                to="/portfolio"
              >
                Portfolio
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavBar;
