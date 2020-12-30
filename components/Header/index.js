import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>Logo Here</div>
      </div>
    </header>
  )
}
