import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src="https://lh3.googleusercontent.com/proxy/Y46gu8eovUh68S4zflXlJAplKraa551c3FPGdzSjpEcQGQo_yuYsHfASoHB0EEMDG4ERYhSNyvv6mKfi16OByPRKBEGkMWHyEWLUpNV42m4BQ9bKyLixo3hc7w" alt="logo" />
        </div>
      </div>
    </header>
  )
}
