import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Grid from '../components/Grid'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <title>My portfolio</title>
      </Head>
      
      <Header />
      <section className={styles.container}>
        <Grid />
      </section>
    </div>
  )
}
