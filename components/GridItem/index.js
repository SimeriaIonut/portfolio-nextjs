import { useState } from 'react';
import FullPage from '../FullPage'
import styles from './gridItem.module.scss';

export default function GridItem({ project }) {
  const [showFullPage, setShowFullPage] = useState(false);

  return (
    <>
      <div className={styles.gridItem} onClick={() => setShowFullPage(true)}>
        <img className={styles.gridItemImage} src={project.image} alt="project-image" />
        <div className={styles.seeMoreContainer}>
          <div className={styles.seeMore}>See more</div>
        </div>
      </div>
      {showFullPage && (
        <FullPage closeFullPage={() => setShowFullPage(false)} project={project} />
      )}
    </>
  )
}
