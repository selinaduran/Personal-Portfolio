import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <Head>
        <title>Selina Duran - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.hiring}>Interested in hiring me for your team?</h1>
      <h2 className={styles.connect}>
        You can contact me at{" "}
        <em className={styles.email}>selinad177@gmail.com</em>
      </h2>
      <h2 className={styles.connect}>
        You can also connect with me through the following social sites below.
      </h2>
      <div>
        <a href="https://github.com/selinaduran" target="_blank">
          <GitHubIcon className={styles.sitelink} fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/selina-duran/" target="_blank">
          <LinkedInIcon className={styles.sitelink} fontSize="large" />
        </a>
        <a href="https://www.facebook.com/selina.duran.92/" target="_blank">
          <FacebookIcon className={styles.sitelink} fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
