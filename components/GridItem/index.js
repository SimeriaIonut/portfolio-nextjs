import styles from './gridItem.module.scss';

export default function GridItem({ imageSrc }) {
  return (
    <div className={styles.gridItem}>
      <img src={imageSrc} alt="project-x" />
      <div className={styles.seeMoreContainer}>
        <div className={styles.seeMore}>See more</div>
      </div>
    </div>
  )
}
