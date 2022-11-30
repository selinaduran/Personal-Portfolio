import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Selina Duran - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container1}>
          <div className={styles.header}>
            <h1 className={styles.title}>Selina Duran</h1>
            <img className={styles.profilepic} src="/img/ProfilePic.jpeg" alt="profile pic" />
            <h2 className={styles.welcome}>Hi there! I'm Selina. Welcome to my personal website!</h2>
            <p className={styles.sitelinks}>personal site links (github/linkedin) would go here</p>
          </div>
          <div className={styles.links}>
              <a className={styles.link}>About Me</a>
              <a className={styles.link}>Portfolio</a>
              <a className={styles.link}>Resume</a>
              <a className={styles.link}>Contact</a>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.about}>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutSection1}>
                <img className={styles.aboutme} src="/img/AboutMe.jpeg" alt="about me" />
              </div>
              <div className={styles.aboutSection2}>
                <h2 className={styles.aboutName}>Selina Duran</h2>
                <h2 className={styles.aboutTitle}>Full-Stack Software Engineer</h2>
                <p className={styles.aboutInfo}>Hello! I am a former educator and school psychologist who eventually switched over to tech! I am currently a full-stack software engineer who enjoys learning new programming languages, creating optimal user interfaces within frontend applications, and handling databases to produce well-balanced applications. I thrive in environments where there are opportunities for team collaboration, problem-solving and professional growth. I would love to join a team to share my experiences with in order to help achieve their company goals. Feel free to reach out if you think I would be a good fit for your team</p>
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
            <h2>Featured Projects</h2>
            <p>featured projects would go here</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
