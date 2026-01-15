import { AddressSection } from './Address'
import { InfoSection } from './Info'
import { NewsSection } from './News'
import { EventOverview } from './EventOverview'
import { Hero } from './Hero'
import { PartnersSection } from './Partners'
import styles from './home.module.css'
import { ThemeArea } from './ThemeArea'
import { Comments } from './Comments'

export const Home = () => {
  return (
    <div className={styles.main}>
      <Hero />
      <EventOverview />
      <InfoSection />
      <ThemeArea />
      <Comments />
      <NewsSection />
      <PartnersSection />
      <AddressSection />
    </div>
  )
}
