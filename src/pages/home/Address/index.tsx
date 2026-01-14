import styles from './address.module.css'
import { clsx } from 'clsx'

export const AddressSection = () => {
  return (
    <div className={styles.section}>
      <div className={clsx('page-max-width', styles.wrapper)}>
        <div className={styles.content}>
          <h3>Адрес ТПП Туркменистана</h3>
          <p className={styles.description}>
            Отчет Kids Expo 2024 – одного из крупнейшего мероприятия для индустрии детских товаров
            развлечений. В нем представлен анализ посещаемости, данные о странах-участниках, оценка
            удовлетворенности гостей, а также ключевые тренды, аналитика рынка, инсайты от
            экспертов, которые формируют будущее детской индустрии.
          </p>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.7075789823778!2d58.397173746109154!3d37.904691359193436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd0a86e0266b%3A0xc1c899dc12e6c322!2z0JbQuNC70L7QuSDQtNC-0LwsINCc0LjRgCAzLzIsIMOddWJpbGXDvW5hw71hIGvDtsOnZXNpIDE4LCBBxZ9nYWJhdCwgVHVya21lbmlzdGFu!5e0!3m2!1sen!2s!4v1768379216592!5m2!1sen!2s"
            loading="lazy"
            width={600}
            className={styles.iframe}
          />
        </div>
      </div>
    </div>
  )
}
