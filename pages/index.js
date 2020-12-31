import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Grid from '../components/Grid'
import Footer from '../components/Footer';
import { getProjects } from './api/projects';

function Home({ projects }) {
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);
  console.log(projects);
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <script src="https://kit.fontawesome.com/28b2ed9a65.js" crossorigin="anonymous"></script>
        <title>My portfolio</title>
      </Head>
      
      <Header />
      <section className={styles.container}>
        <Grid projects={projects} />
      </section>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);
  const projects = getProjects();
  projects.push({ url: process.env.NEXT_PUBLIC_VERCEL_URL })

  return { props: { projects } };
}

export default Home;
