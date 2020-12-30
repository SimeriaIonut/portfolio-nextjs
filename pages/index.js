import Head from 'next/head'
import styles from '../styles/Home.module.scss'

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
      
      <header>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>Logo Here</div>
        </div>
      </header>
      <section className={styles.container}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <img src="https://blog.tubikstudio.com/wp-content/uploads/2019/03/bugs_store_webdesign_tubik-1-1024x768.png" alt="project-x" />
            <div className={styles.seeMoreContainer}>
              <div className={styles.seeMore}>See more</div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <img src="https://cdn.shopify.com/s/files/1/1095/6418/files/3d_logo_sample_1024x1024.png?v=1588066397" alt="project-x" />
            <div className={styles.seeMoreContainer}>
              <div className={styles.seeMore}>See more</div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <img src="https://blog.tubikstudio.com/wp-content/uploads/2019/03/restaurant_app_sign_up_screen_design_tubik-1024x768.png" alt="project-x" />
            <div className={styles.seeMoreContainer}>
              <div className={styles.seeMore}>See more</div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <img src="https://www.opstltd.com/wp-content/uploads/2020/05/acfl-1024x768.jpg" />
            <div className={styles.seeMoreContainer}>
              <div className={styles.seeMore}>See more</div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <img src="https://blog.tubikstudio.com/wp-content/uploads/2019/01/business_card-design-ai-designer-1024x768.png" alt="project-x" />
            <div className={styles.seeMoreContainer}>
              <div className={styles.seeMore}>See more</div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <img src="https://maxcdn.icons8.com/app/uploads/2019/09/landing-page-illustrations-design-1024x768.jpg" alt="project-x" />
            <div className={styles.seeMoreContainer}>
              <div className={styles.seeMore}>See more</div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <img src="https://ossmium.com/wp-content/uploads/2018/11/SendX-1600x1200-dribbble-1024x768.png" alt="" />
            <div className={styles.seeMoreContainer}>
              <div className={styles.seeMore}>See more</div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <img src="https://bjarkidesign.dk/wp-content/uploads/2020/06/1-1024x768.jpg" alt="" />
            <div className={styles.seeMoreContainer}>
              <div className={styles.seeMore}>See more</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
