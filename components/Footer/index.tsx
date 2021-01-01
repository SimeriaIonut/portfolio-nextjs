import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.heading}>Contact</div>
      <div className={styles.socialMediaContainer}>
        <a rel="noreferrer" href="https://www.linkedin.com/in/stefanabirsan/" target="_blank"><i aria-hidden className="fab fa-linkedin"></i></a>
        <a rel="noreferrer" href="https://www.instagram.com/stefbirsan/" target="_blank"><i aria-hidden  className="fab fa-instagram"></i></a>
      </div>
    </footer>
  )
}
