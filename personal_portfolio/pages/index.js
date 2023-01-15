import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Selina Duran - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.title}>Selina Duran</h1>
        <h2 className={styles.title}>Full-Stack Software Engineer</h2>
        <img
          className={styles.profilepic}
          src="/img/ProfilePic.jpeg"
          alt="profile pic"
        />
        <h2 className={styles.welcome}>
          Hi there! I'm Selina. Welcome to my personal website!
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
      <div className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutSection1}>
            <img
              className={styles.aboutme}
              src="/img/AboutMe.jpeg"
              alt="about me"
            />
          </div>
          <div className={styles.aboutSection2}>
            <h2 className={styles.aboutName}>About Me</h2>
            <p className={styles.aboutInfo}>
              Hello! I am a former educator and school psychologist who
              eventually switched over to tech! I am currently a full-stack
              software engineer who enjoys learning new programming languages,
              creating optimal user interfaces within frontend applications, and
              handling databases to produce well-balanced applications. I thrive
              in environments where there are opportunities for team
              collaboration, problem-solving and professional growth. I would
              love to join a team to share my experiences with in order to help
              achieve their company goals. Feel free to reach out if you think I
              would be a good fit for your team
            </p>
            <button className={styles.aboutButton}>View Portfolio</button>
            <button className={styles.aboutButton}>View Resume</button>
          </div>
        </div>
      </div>
      <div className={styles.proficient}>
        <h2 className={styles.techstacks}>Tech Stacks I Am Proficient In:</h2>
        <p>tech stack icons would go here</p>
      </div>
      <div className={styles.experience}>
        <h2>Tech Stacks I Have Experience With:</h2>
        <p>tech stack icons would go here</p>
      </div>
      <div className={styles.featured}>
        <h2>Featured Applications</h2>
        <p>featured projects would go here</p>
      </div>
    </div>
  );
}
