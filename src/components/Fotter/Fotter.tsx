import { FotterSubscribe } from '../FotterSubscribe/FotterSubscribe'
import styles from './fotter.module.css'

export const Footer = () => {
  return (
    <footer>
      <FotterSubscribe />
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.logoIcon}>
            <img src="/images/logo.png" width={259} height={70} alt="logo" />
            <div className={styles.groupIcon}>
              <img className={styles.icon} src="/icons/facebook.svg" />
              <img className={styles.icon} src="/icons/instagram.svg" />
              <img className={styles.icon} src="/icons/linkedIn.svg" />
              <img className={styles.icon} src="/icons/twiter.svg" />
            </div>
          </div>
          <hr className={styles.hr} />
          <p className={styles.right}>©2025 Все права защищены</p>
        </div>
      </div>
    </footer>
  )
}
