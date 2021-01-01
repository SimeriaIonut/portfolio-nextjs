import FullPageHeader from './FullPageHeader';
import Footer from '../Footer';
import styles from './fullPage.module.scss';

const BROKEN_IMG_PATH = '/images/broken-image.jpg';

export default function FullPage({ project, closeFullPage }) {
  return (
    <div className={styles.fullPageContainer}>
      <FullPageHeader closeFullPage={closeFullPage} />
      <div className={styles.content}>
        <div className={styles.title}>{project.fields.title}</div>
        <div className={styles.description}>{project.fields.description}</div>
        <div className={styles.subImagesContainer}>
          {project.fields.subImages.map((subImage: any) => (
            <div className={styles.subImage}>
              <img src={subImage.fields?.file.url || BROKEN_IMG_PATH} alt="sub-image" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
