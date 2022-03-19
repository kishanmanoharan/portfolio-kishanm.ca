import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const KNavbar = () => (
  <Navbar variant="dark" sticky="top" className="blur grey" expand="sm">
    <Navbar.Brand>Kishan M</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav variant="pills" className="me-auto" defaultActiveKey="/">
        <NavLink
          exact
          to="/"
          href="/"
          className="nav-link"
          activeClassName="active"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          href="/about"
          className="nav-link"
          activeClassName="active"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          href="/projects"
          className="nav-link"
          activeClassName="active"
        >
          Projects
        </NavLink>
        <NavLink
          to="/capstone"
          href="/capstone"
          className="nav-link"
          activeClassName="active"
        >
          Capstone
        </NavLink>
        <NavLink
          to="/contact"
          href="/contact"
          className="nav-link"
          activeClassName="active"
        >
          Contact
        </NavLink>
        <NavLink
          to="/resume"
          href="/resume"
          className="nav-link"
          activeClassName="active"
        >
          Resume
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
