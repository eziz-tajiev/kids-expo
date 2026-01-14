import { FotterSubscribe } from '../FotterSubscribe/FotterSubscribe'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer>
      <FotterSubscribe />
      <div className={styles.section}>
        <div className={styles.container}>
          <div>
            <img src="/images/logo.png" width={259} height={70} alt="logo" />
            <div>
              <img />
              <img />
              <img />
              <img />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
