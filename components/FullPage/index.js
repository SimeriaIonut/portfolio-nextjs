import FullPageHeader from './FullPageHeader';
import Footer from '../Footer';
import styles from './fullPage.module.scss';
import { useRef, useEffect } from 'react';

export default function FullPage({ showFullPage, project, closeFullPage }) {
  const fullPageContainer = useRef();

  useEffect(() => {
    if (showFullPage) {
      console.log(showFullPage);
      fullPageContainer.current.style.transformOrigin = `${showFullPage.centerX}px ${showFullPage.centerY}px`;
      fullPageContainer.current.style.transform = 'scale(1)';
      console.log(fullPageContainer.current.style.transformOrigin);
    } else {
      fullPageContainer.current.style.transform = 'scale(0)';
    }
  }, [showFullPage]);

  return (
    <div ref={fullPageContainer} className={styles.fullPageContainer}>
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
