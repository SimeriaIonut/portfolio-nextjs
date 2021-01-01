import { useState } from 'react';
import FullPage from '../FullPage'
import styles from './gridItem.module.scss';

export default function GridItem({ project }) {
  const [showFullPage, setShowFullPage] = useState(null);

  const handleGridItemClick = (e) => {
    const gridItem = e.target.getBoundingClientRect();
    
    const centerX = gridItem.x + (gridItem.width / 2);
    const centerY = gridItem.y + (gridItem.height / 2);

    setShowFullPage({ centerX, centerY });
  }

  return (
    <>
      <div className={styles.gridItem} onClick={handleGridItemClick}>
        <img className={styles.gridItemImage} src={project.image} alt="project-image" />
        <div className={styles.seeMoreContainer}>
          <div className={styles.seeMore}>See more</div>
        </div>
      </div>
      <FullPage showFullPage={showFullPage} closeFullPage={() => setShowFullPage(false)} project={project} />
    </>
  )
}
