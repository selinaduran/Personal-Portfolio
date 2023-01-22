import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import DescriptionIcon from "@mui/icons-material/Description";
import Tooltip from "@mui/material/Tooltip";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Selina Duran - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.titleName}>Selina Duran</h1>
        <h2 className={styles.titleRole}>Full-Stack Software Engineer</h2>
        <img
          className={styles.profilepic}
          src="/img/ProfilePic.jpeg"
          alt="profile pic"
        />
        <h2 className={styles.welcome}>
          Hi there! 🙋🏻‍♀️ I'm Selina. Welcome to my personal website!
        </h2>
        <div className={styles.sitelinks}>
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
      <div className={styles.aboutContainer}>
        <div className={styles.aboutSection1}>
          <img
            className={styles.aboutme}
            src="/img/AboutMe.jpeg"
            alt="about me"
          />
        </div>
        <div className={styles.aboutSection2}>
          <h2 className={styles.aboutName}>
            <u className={styles.textEffect}>About Me</u> 👩🏻‍💻
          </h2>
          <p className={styles.aboutInfo}>
            Hello! I am a former educator and school psychologist who eventually
            switched over to tech! I am currently a full-stack software engineer
            who enjoys learning new programming languages, creating optimal user
            interfaces within frontend applications, and handling databases to
            produce well-balanced applications. I thrive in environments where
            there are opportunities for team collaboration, problem-solving and
            professional growth. I would love to join a team to share my
            experiences with in order to help achieve their company goals. Feel
            free to reach out if you think I would be a good fit for your team
          </p>
          <Button
            className={styles.aboutButton}
            variant="contained"
            startIcon={<ArrowCircleRightIcon />}
            href="/portfolio"
          >
            View Portfolio
          </Button>
          <Button
            className={styles.aboutButton}
            variant="contained"
            startIcon={<DescriptionIcon />}
            href="https://drive.google.com/file/d/1DzduEO64GIniYePo-nc0ntHqmrKEO4K9/view?usp=sharing"
            target="_blank"
          >
            View Resume
          </Button>
        </div>
      </div>
      <div className={styles.proficient}>
        <h2 className={styles.techstacks}>
          <u className={styles.textEffect}>Technologies I Am Proficient In</u>{" "}
          👌🏻
        </h2>
        <div className={styles.techContainer}>
          <Tooltip title="JavaScript">
            <img
              className={styles.techicon}
              src="/img/JavaScript.png"
              alt="js icon"
            />
          </Tooltip>
          <Tooltip title="React.js">
            <img
              className={styles.techicon}
              src="/img/Reactjs.png"
              alt="react icon"
            />
          </Tooltip>
          <Tooltip title="HTML5">
            <img
              className={styles.techicon}
              src="/img/Html5.png"
              alt="html icon"
            />
          </Tooltip>
          <Tooltip title="CSS3">
            <img
              className={styles.techicon}
              src="/img/Css.png"
              alt="css icon"
            />
          </Tooltip>
          <Tooltip title="Node.js">
            <img
              className={styles.techicon}
              src="/img/Nodejs.png"
              alt="nodejs icon"
            />
          </Tooltip>
          <Tooltip title="Next.js">
            <img
              className={styles.techicon}
              src="/img/Nextjs.png"
              alt="nextjs icon"
            />
          </Tooltip>
          <Tooltip title="PostgreSQL">
            <img
              className={styles.techicon}
              src="/img/Postgres.png"
              alt="postgres icon"
            />
          </Tooltip>
          <Tooltip title="MySQL">
            <img
              className={styles.techicon}
              src="/img/MySQL.png"
              alt="mysql icon"
            />
          </Tooltip>
        </div>
      </div>
      <div className={styles.experience}>
        <h2 className={styles.techstacks}>
          <u className={styles.textEffect}>
            Technologies I Have Experience With
          </u>{" "}
          👍🏻
        </h2>
        <div className={styles.techContainer}>
          <Tooltip title="jQuery">
            <img
              className={styles.techicon}
              src="/img/JQuery.png"
              alt="jquery icon"
            />
          </Tooltip>
          <Tooltip title="MongoDB">
            <img
              className={styles.techicon}
              src="/img/MongoDB.png"
              alt="mongodb icon"
            />
          </Tooltip>
          <Tooltip title="GraphQL">
            <img
              className={styles.techicon}
              src="/img/Graphql.png"
              alt="graphql icon"
            />
          </Tooltip>
          <Tooltip title="Jest">
            <img
              className={styles.techicon}
              src="/img/Jest.png"
              alt="jest icon"
            />
          </Tooltip>
          <Tooltip title="Mocha">
            <img
              className={styles.techicon}
              src="/img/Mochajs.png"
              alt="mochajs icon"
            />
          </Tooltip>
          <Tooltip title="AWS">
            <img
              className={styles.techicon}
              src="/img/Aws.png"
              alt="aws icon"
            />
          </Tooltip>
          <Tooltip title="Git">
            <img
              className={styles.techicon}
              src="/img/Git.png"
              alt="git icon"
            />
          </Tooltip>
          <Tooltip title="Figma">
            <img
              className={styles.techicon}
              src="/img/Figma.png"
              alt="figma icon"
            />
          </Tooltip>
        </div>
      </div>
      <div className={styles.featured}>
        <h2 className={styles.featuredApps}>
          <u className={styles.textEffect}>Featured Applications</u> 🌟
        </h2>
        <div className={styles.appContainer}>
          <div className={styles.showCaseApp}>
            <img
              src="/img/AnimalCrossingDemo2.gif"
              className={styles.gifVideo}
            />
          </div>
          <div className={styles.infoApp}>
            <div className={styles.titleContainer}>
              <h3 className={styles.appTitle}>Animal Crossing Memory Match!</h3>
              <a
                href="https://github.com/selinaduran/MVP-Project"
                target="_blank"
              >
                <GitHubIcon className={styles.githubLink} fontSize="large" />
              </a>
            </div>
            <p className={styles.appInformation}>
              Animal Crossing Memory Match! allows users to play with a shuffled
              memory-match board that consists of randomly selected Animal
              Crossing villager cards (characters are specifically from
              Nintendo's "New Horizons" video game). While users select cards to
              match, the application includes a counter to keep track of
              players' number of attempts. Extended features to the game were
              also recently added to allow users to see character profiles for
              each matched villager in order to learn more about their personal
              traits and characteristics. React was utilized for creating
              frontend features while PostgreSQL was implemented for
              managing/storing scores users can submit upon completing a game
              round. Villager cards and profile information were obtained and
              sourced from an external API (http://acnhapi.com/).
            </p>
          </div>
        </div>
        <div className={styles.appContainer}>
          <div className={styles.showCaseApp}>
            <img src="/img/DuguidDemo.gif" className={styles.gifVideo} />
          </div>
          <div className={styles.infoApp}>
            <div className={styles.titleContainer}>
              <h3 className={styles.appTitle}>Duguid Construction</h3>
              <a
                href="https://github.com/RFC2207-Khazad-Dum/DuguidConstruction"
                target="_blank"
              >
                <GitHubIcon className={styles.githubLink} fontSize="large" />
              </a>
            </div>
            <p className={styles.appInformation}>
              Duguid Construction is a full-stack application that I created
              alongside five other software engineers. This particular web
              application allows various types of users (clients or employees)
              to access a construction company website. I was responsible for
              the majority of the website's front-end where I engineered the
              company's "Home-Page" and "Reviews" components using Next.js and
              React, focusing on ease of use and accessibility for both clients
              and employees of the company. I also worked as Product Manager for
              this particular team and oversaw ticket/git workflow while
              consulting with the client-company for application specifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
