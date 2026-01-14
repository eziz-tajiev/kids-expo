import { AddressSection } from './Address'
import { NewsSection } from './News'
import { PartnersSection } from './Partners'
import styles from './home.module.css'

export const Home = () => {
  return (
    <div className={styles.main}>
      <NewsSection />
      <PartnersSection />
      <AddressSection />
    </div>
  )
}
