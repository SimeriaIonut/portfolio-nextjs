import Header from '../Header';
import styles from './fullPage.module.scss';

export default function FullPage({ project, closeFullPage }) {
  return (
    <div className={styles.fullPageContainer}>
      <div className={styles.closeIcon} onClick={closeFullPage}>X</div>
      <Header />
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
    </div>
  )
}
