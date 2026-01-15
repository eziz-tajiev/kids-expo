import clsx from 'clsx'
import styles from './dateCard.module.css'

export const DateCard = () => {
  return (
    <div className={styles.card}>
      <h5 className={styles.header}>Монтаж выставки</h5>
      <p className={clsx('bold', styles.dateTime)}>12 мая – 10 июня 2025 года</p>
    </div>
  )
}
