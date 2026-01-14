import { AddressSection } from './Address'
import { PartnersSection } from './Partners'
import styles from './home.module.css'

export const Home = () => {
  return (
    <div className={styles.main}>
      <PartnersSection />
      <AddressSection />
    </div>
  )
}
