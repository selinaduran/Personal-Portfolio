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
        <div>
          <h1 className={styles.title}>
            Hi there! I'm Selina. Welcome to my tech corner!
          </h1>
        </div>
        <div className={styles.grid}>
          <h2>Selina Duran</h2>
          <h2>Full-Stack Software Engineer</h2>
          <p>Hello! I am a former educator and school psychologist who eventually switched over to tech! I am currently a full-stack software engineer who enjoys learning new programming languages, creating optimal user interfaces within frontend applications, and handling databases to produce well-balanced applications. I thrive in environments where there are opportunities for team collaboration, problem-solving and professional growth. I would love to join a team to share my experiences with in order to help achieve their company goals. Feel free to reach out if you think I would be a good fit for your team</p>
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
