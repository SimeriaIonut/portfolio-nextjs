import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Grid from '../components/Grid'
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

function Home() {
  const [projects, setProjects] = useState([]);
  
  async function fetchProjects() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items;
    console.log(`Error getting Projects. ${entries}`);
  }

  useEffect(() => {
    async function getProjects() {
      const allProjects = await fetchProjects()
      setProjects([...allProjects]);
    }
    getProjects()
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="Stefana Birsan - Communication Design"></meta>
        <link rel="stylesheet" href="../styles/normalize.min.css" />
        <script src="https://kit.fontawesome.com/28b2ed9a65.js" crossOrigin="anonymous"></script>
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

export default Home;
