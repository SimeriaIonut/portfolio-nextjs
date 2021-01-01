import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Grid from '../components/Grid'
import Footer from '../components/Footer';
import { getProjects } from './api/projects';

type ProjectType = {
  id: number,
  image: string,
  title: string,
  description: string,
  subImages: Array<string>
}

function Home({ projects }: { projects: ProjectType }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="Stefana Birsan - Communication Design"></meta>
        <link rel="stylesheet" href="../styles/normalize.min.css" />
        <script async src="https://kit.fontawesome.com/28b2ed9a65.js" crossOrigin="anonymous"></script>
        <title>Stefana Birsan - Communication Design</title>
      </Head>
      
      <Header />
      <section className={styles.container}>
        <Grid projects={projects} />
      </section>
      <Footer />
    </div>
  )
}

export function getStaticProps() {
  const projects = getProjects();

  return { props: { projects } };
}

export default Home;
