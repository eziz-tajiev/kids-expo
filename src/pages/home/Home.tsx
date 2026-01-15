import { AddressSection } from './Address'
import { InfoSection } from './Info'
import { NewsSection } from './News'
import { EventOverview } from './EventOverview'
import { Hero } from './Hero'
import { PartnersSection } from './Partners'
import styles from './home.module.css'

export const Home = () => {
  return (
    <div className={styles.main}>
      <InfoSection />
      <NewsSection />
      <Hero />
      <EventOverview />
      <PartnersSection />
      <AddressSection />
    </div>
  )
}
