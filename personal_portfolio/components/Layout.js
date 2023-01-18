import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
