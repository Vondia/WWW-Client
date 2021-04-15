import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectAdmin } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);
  const admin = useSelector(selectAdmin);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const wwwAdmin = admin ? true : false;

  return (
    <Navbar style={{ backgroundColor: "#Aedff7" }} expand="lg">
      <Navbar.Brand as={NavLink} to="/HomePage">
        <img
          src="https://res.cloudinary.com/dv4rmtkov/image/upload/v1618426598/400PngdpiLogo_hcynba.png"
          alt="logo"
          widh="40px"
          height="40px"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/HomePage" linkText="Home" />
          {wwwAdmin ? (
            <NavbarItem path="/admin/users" linkText="View Members" />
          ) : null}
          {wwwAdmin ? (
            <NavbarItem path="/admin/makestory" linkText="Add new story" />
          ) : null}
          {wwwAdmin ? (
            <NavbarItem path="/admin/allstories" linkText="All stories" />
          ) : null}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
