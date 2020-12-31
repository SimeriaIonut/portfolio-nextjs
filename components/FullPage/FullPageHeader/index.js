import styles from './fullPageHeader.module.scss';

export default function FullPageHeader({ closeFullPage }) {
  return (
    <header className={styles.fullPageHeader}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          Stefana Birsan
        </div>
        <div className={styles.title}>Communication Design</div>
      </div>
      <div className={styles.backButton} onClick={closeFullPage}>
        <span className={styles.chevron}>&lt;</span>
        Back
      </div>
    </header>
  )
}
