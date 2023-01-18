import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Selina Duran - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Interested in hiring me for your team? You can contact me at
        selinad177@gmail.com
      </div>
      <div>
        You can also connect with me through the following social sites below.
      </div>
      <div>(social sites would be listed here)</div>
    </div>
  );
};

export default Contact;
