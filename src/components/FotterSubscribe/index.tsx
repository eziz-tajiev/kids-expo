import styles from './fotterSubscribe.module.css'

export const FotterSubscribe = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <span>Подпишитесь на новости:</span>
        <input className={styles.input} placeholder="Placeholder" />
        <button className={styles.button}>Подписаться</button>
      </div>
    </div>
  )
}
