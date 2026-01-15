import { ContactCard } from '../../../components/ContactCard'
import { DateCard } from '../../../components/DateCard'
import { CustomLink } from '../../../components/ui/CustomLink'
import styles from './comments.module.css'

export const Comments = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className="page-max-width">
          <h2 className={styles.header}>Время выставки</h2>
          <div className={styles.contacts}>
            <div className={styles.dateCards}>
              <DateCard />
              <DateCard />
              <DateCard />
            </div>
            <div className={styles.contactCards}>
              <ContactCard />
              <ContactCard />
              <ContactCard />
            </div>
            <div className={styles.link}>
              <CustomLink title="Забронируйте стенд" href="" style={{ width: 202 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
