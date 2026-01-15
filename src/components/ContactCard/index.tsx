import styles from './contactCard.module.css'

export const ContactCard = () => {
  return (
    <div className={styles.card}>
      <img src="/icons/email.svg" />
      <div className={styles.text}>
        <span className={styles.label}>Адрес электронной почты</span>
        <span className={styles.contact}>contact@turkmenexpo.com</span>
      </div>
    </div>
  )
}
