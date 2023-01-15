import React, { useState, useEffect } from "react";
import styles from "../styles/Navigation.module.css";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <>
      <Navbar sticky="top" className={styles.coloredNav}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Logo Goes Here
          </Navbar.Brand>
          <Nav.Link>About Me</Nav.Link>
          <Nav.Link>Portfolio</Nav.Link>
          <Nav.Link>Resume</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
