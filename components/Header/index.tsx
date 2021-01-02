import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>
          Stefana Birsan
        </h1>
        <div className={styles.title}>Communication Design</div>
      </div>
    </header>
  )
}
