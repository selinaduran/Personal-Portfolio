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
        <Container className={styles.navContainer}>
          <Navbar.Brand href="#home">
            <img alt="" src="/img/SD.png" width="70" height="70" />
          </Navbar.Brand>
        </Container>
        <div className={styles.linksContainer}>
          <Nav.Link href="/" className={styles.navlink}>
            Home
          </Nav.Link>
          <Nav.Link className={styles.navlink}>Portfolio</Nav.Link>
          <Nav.Link className={styles.navlink}>Resume</Nav.Link>
          <Nav.Link className={styles.navlink}>Contact</Nav.Link>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
