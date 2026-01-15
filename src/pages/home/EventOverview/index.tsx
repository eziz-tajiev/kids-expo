import { FactCard } from '../../../components/FactCard'
import { CustomLink } from '../../../components/ui/CustomLink'
import styles from './eventOverview.module.css'

const navItems = [
  { title: 'План выставки', href: '' },
  { title: 'Забронировать стенд', href: '' },
  { title: 'Список участников', href: '' },
  { title: 'B2B | B2G встречи', href: '' },
]

const factsData = [
  { value: '8,400 m²', label: 'выставочной площади' },
  { value: '10000+', label: 'Посетители посетят выставку' },
  { value: '100+', label: 'Экспоненты из более чем 30 стран' },
  { value: '80%', label: 'Участники принимают участие в принятии решений о закупках' },
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
            <button className={styles.button}>
              <img height={16} width={16} src="icons/downloadPurple.svg" />
              <span>Скачать</span>
            </button>
          </div>

          <div className={styles.videoContainer}>
            <video
              muted
              autoPlay
              loop
              src="https://editor.turkmenexpo.com/storage/app/media/video/asdf.webm"
              width={598}
              controls
            />
          </div>
        </div>
        <div className={styles.facts}>
          {factsData.map((fact, index) => (
            <FactCard value={fact.value} label={fact.label} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
