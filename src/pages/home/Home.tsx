import { AddressSection } from './Address'
import { InfoSection } from './Info'
import { NewsSection } from './News'
import { PartnersSection } from './Partners'
import styles from './home.module.css'

export const Home = () => {
  return (
    <div className={styles.main}>
      <InfoSection />
      <NewsSection />
      <PartnersSection />
      <AddressSection />
    </div>
  )
}
