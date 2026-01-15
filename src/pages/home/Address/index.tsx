import styles from './address.module.css'
import { clsx } from 'clsx'

export const AddressSection = () => {
  return (
    <section className={styles.section}>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.67827952586!2d58.29659607507902!3d37.8912058554459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7003944259cb1d%3A0xafc893357e4b0d2!2z0KLQvtGA0LPQvtCy0L4t0L_RgNC-0LzRi9GI0LvQtdC90L3QsNGPINC_0LDQu9Cw0YLQsCDQotGD0YDQutC80LXQvdC40YHRgtCw0L3QsA!5e0!3m2!1sru!2s!4v1713164734635!5m2!1sru!2s"
            loading="lazy"
            width={600}
            className={styles.iframe}
          />
        </div>
      </div>
    </section>
  )
}
