import styles from './fullPageHeader.module.scss';

export default function FullPageHeader({ closeFullPage }) {
  return (
    <header className={styles.fullPageHeader}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          Stefana Birsan
        </div>
      </div>
      <div className={styles.backButton} onClick={closeFullPage}>&lt; Go Back</div>
    </header>
  )
}
