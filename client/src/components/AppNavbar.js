import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";

import RegisterModal from "./auth/registermodal";
import Logout from "./auth/Logout";
import LoginModal from "./auth/Login";
import PLoginModal from "./auth/PLogin";
import PLogout from "./auth/PLogout";

function AppNavbar({ auth, pauth }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { employee } = auth;
  const { isAuthenticated, supplier } = pauth;

  const authLinks = (
    <Fragment className="nav-item">
      <NavItem>
        <span className="navbar-text mr-4">
          <strong>{employee ? `Welcome    ${employee.role}---${employee.name}` : null}</strong>
        </span>
      </NavItem>
      <NavItem>
        <span className="navbar-text mr-4">
          <strong>{supplier ? `Welcome  Supplier ${supplier.name}` : null}</strong>
        </span>
      </NavItem>
      {employee ? (
        <NavItem className="navbar-item mr-4">
          <Logout />
        </NavItem>
      ) : null}
      {supplier ? (
        <NavItem>
          <PLogout />
        </NavItem>
      ) : null}
      {employee ? (
        <NavItem>
          <RegisterModal />
        </NavItem>
      ) : null}
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <LoginModal />
      </NavItem>

      <NavItem>
        <PLoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div className="navbar">
      <Navbar color="dark" dark expand="sm">
        <Container>
          <NavbarBrand href="/">INVENTORY MANAGEMENT SYSTEM</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

AppNavbar.propTypes = {
  auth: PropTypes.object.isRequired,
  pauth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    pauth: state.pauth,
    auth: state.auth,
  });

export default connect(mapStateToProps, null)(AppNavbar);
