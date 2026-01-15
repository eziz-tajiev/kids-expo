import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.main}>
      <div className={styles.upper}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <div className={styles.addressWrap}>
              <img src="/icons/gps.svg" alt="gpsIcon" />
              <span className={styles.address}>Ашхабад, Туркменистан</span>
            </div>
            <nav className={styles.navigation}>
              <a href="#">Путеводитель</a>
              <a href="#">Контакты</a>
              <a href="#">Новости</a>
            </nav>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.phone}>
              <img src="/icons/phone.svg" alt="phoneIcon" height={14} width={14} />
              <span className={styles.phoneNumber}>+993(62) 00-62-00</span>
            </div>
            <div className={styles.changeLanguage}>
              <img src="/images/russianFlag.png" alt="russianFlag" />
              <span>Рус</span>
              <img src="/icons/arrow.svg" alt="arrowIcon" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.lower}>
        <img src="/images/logo.png" />
        <nav className={styles.navigation}>
          <a href="">Выставка</a>
          <a href="">Участникам</a>
          <a href="">Посетителям</a>
        </nav>

        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}
