import styles from './secondHeader.module.css'

export const SecondHeader = () => {
  return (
    <div className={styles.container}>
      <img src="/images/logo.png" />
      <nav className={styles.navigation}>
        <a href="">Выставка</a>
        <a href="">Участникам</a>
        <a href="">Посетителям</a>
      </nav>
    </div>
  )
}
