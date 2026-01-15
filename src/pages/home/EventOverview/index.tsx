import { CustomLink } from '../../../components/ui/CustomLink'
import styles from './eventOverview.module.css'

const navItems = [
  { title: 'План выставки', href: '' },
  { title: 'Забронировать стенд', href: '' },
  { title: 'Список участников', href: '' },
  { title: 'B2B | B2G встречи', href: '' },
]

export const EventOverview = () => {
  return (
    <section>
      <div className="page-max-width">
        <div className={styles.links}>
          {navItems.map((link, index) => (
            <CustomLink title={link.title} href={link.href} key={index} style={{ flex: 1 }} />
          ))}
        </div>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h3>Изучите отчет Kids Expo 2024!</h3>
            <p className={styles.description}>
              Отчет Kids Expo 2024 – одного из крупнейшего мероприятия для индустрии детских товаров
              иразвлечений. В нем представлен анализ посещаемости, данные о странах-участниках,
              оценка удовлетворенности гостей, а также ключевые тренды, аналитика рынка, инсайты
              отэкспертов, которые формируют будущее детской индустрии.
            </p>
          </div>

          <div className={styles.videoContainer}>
            <video
              muted
              autoPlay
              src="https://editor.turkmenexpo.com/storage/app/media/video/asdf.webm"
              width={598}
              className={styles.iframe}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
