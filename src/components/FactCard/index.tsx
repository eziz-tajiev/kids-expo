import styles from './factCard.module.css'

type FactCardProps = {
  value: string
  label: string
}

export const FactCard = ({ value, label }: FactCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.value}>{value}</div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  )
}
