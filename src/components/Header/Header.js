import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

class HeaderComponent extends Component {
  render() {
    let mainnav = null;
    if (this.props.token !== null) {
      mainnav = (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              to="/home"
              className="NavLink"
              exact
              activeClassName="activeclass"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/cart"
              className="NavLink"
              activeClassName="activeclass"
            >
              Cart
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/logout"
              className="NavLink"
              activeClassName="activeclass"
            >
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      );
    } else {
      mainnav = (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              to="/home"
              className="NavLink"
              exact
              activeClassName="activeclass"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/login"
              className="NavLink"
              activeClassName="activeclass"
            >
              Login
            </NavLink>
          </NavItem>
        </Nav>
      );
    }

    return (
      <div>
        <Navbar expand="md" className="Navbar">
          <div className="container">
            <NavbarBrand href="/home">
              <img src={Logo} width="150px" alt="Logo" />
            </NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>{mainnav}</Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default connect(mapStateToProps)(HeaderComponent);
