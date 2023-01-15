import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

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
