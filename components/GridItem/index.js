import { useState } from 'react';
import Image from 'next/image';
import FullPage from '../FullPage'
import styles from './gridItem.module.scss';

export default function GridItem({ project }) {
  const [showFullPage, setShowFullPage] = useState(false);

  return (
    <>
      <div className={styles.gridItem} onClick={() => setShowFullPage(true)}>
        <Image
          className={styles.gridItemImage}
          src={`/images/${project.image}`}
          alt={`Project ${project.id}`}
          layout="responsive"
          width={1024}
          height={768}
        />
        <div className={styles.seeMoreContainer}>
          <div className={styles.seeMore}>See more</div>
        </div>
      </div>
      { showFullPage && (
        <FullPage closeFullPage={() => setShowFullPage(false)} project={project} />
      )}
    </>
  )
}
