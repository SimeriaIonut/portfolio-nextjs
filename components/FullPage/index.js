import FullPageHeader from './FullPageHeader';
import Footer from '../Footer';
import styles from './fullPage.module.scss';

export default function FullPage({ project, closeFullPage }) {
  return (
    <div className={styles.fullPageContainer}>
      <FullPageHeader closeFullPage={closeFullPage} />
      <div className={styles.content}>
        <div className={styles.title}>{project.title}</div>
        <div className={styles.description}>{project.description}</div>
        <div className={styles.subImagesContainer}>
          {project.subImages.map(imgSrc => (
            <div className={styles.subImage}>
              <img src={imgSrc} alt="sub-image" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
