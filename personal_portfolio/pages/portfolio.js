import React, { useState, useEffect } from "react";
import styles from "../styles/Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.projectContainer}>
        <h2>Duguid Construction</h2>
        <div>Application Snippet goes here</div>
        <p>
          Duguid Construction is a full-stack application that I created
          alongside five other software engineers. This particular web
          application allows various types of users (clients or employees) to
          access a construction company website. I was responsible for
          engineering the company's "Home-Page" and "Reviews" components using
          Next.js and React, focusing on ease of use and accessibility for both
          clients and employees of the company. I was also assigned as Product
          Manager for this particular team and oversaw ticket/git workflow while
          consulting with the client-company for project specifications.
        </p>
      </div>
      <div className={styles.projectContainer}>
        <h2>Animal Crossing Memory Match!</h2>
        <div>Application Snippet goes here</div>
        <p>
          This is a MVP (Minimum Viable Product) project I completed as a
          student at Hack Reactor. We had less than 24 hours to make a
          full-stack application of our choosing. This particular application
          allows users to play with a shuffled memory-match board that consists
          of randomly selected Animal Crossing villager cards (characters are
          specifically from Nintendo's "New Horizons" video game). While users
          select cards to match, the application includes a counter to keep
          track of players' number of attempts. Extended features to the game
          were also recently added to allow users to see character profiles for
          each matched villager in order to learn more about their personal
          traits and characteristics. React was utilized for creating frontend
          features while PostgreSQL was implemented for managing/storing scores
          users can submit upon completing a game round. Villager cards and
          profile information were obtained and sourced from an external API
          (http://acnhapi.com/).
        </p>
      </div>
      <div className={styles.projectContainer}>
        <h2>Front End Capstone (Royale)</h2>
        <div>Application Snippet goes here</div>
        <p>
          Royale is an eCommerce application where my team and I focused on
          increasing user-interactivity with updated website and accessibility
          features. I was in charge of architecting the React front-end service
          of 'Questions & Answers' for the website in which I was able to
          support it with a RESTful API backend. For the Q&A widget, I added
          user interface features (i.e., a navigation search-bar, loader
          buttons, modal forms for adding Q&A responses, and reporting or
          marking responses as helpful) for optimizing user digital experiences.
          Component styling and positioning were completed using standard CSS,
          flex, and component libraries.
        </p>
      </div>
      <div className={styles.projectContainer}>
        <h2>System Design Capstone</h2>
        <div>Application Snippet goes here</div>
        <p>
          System Design Capstone is an application where the backend was
          entirely rebuilt with a new database and server. I was in charge of
          adding backend extensions for an eCommerce website's Q&A widget and
          utilized PostgreSQL to restructure client data. In order to optimize
          user traffic flow for the website, I employed stress testing using
          Loader.io to decrease execution times within database queries by 100%
          and modified average response times to less than 30 ms (based on 1000
          clients per 60 seconds).
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
