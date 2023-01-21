import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import CopyRight from "./CopyRight";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div>
        <main>{children}</main>
      </div>
      <CopyRight />
    </>
  );
};

export default Layout;
