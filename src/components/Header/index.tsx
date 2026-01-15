import clsx from 'clsx'
import styles from './header.module.css'
import { Dropdown } from '../Dropdown'

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
            <nav className={clsx('bold', styles.navigationUp)}>
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
        <nav className={clsx('bold', styles.navigationLow)}>
          <Dropdown label="Выставка" links={exhibitionLinks} />

          <Dropdown label="Участникам" links={participantsLinks} />

          <Dropdown label="Посетителям" links={visitorsLinks} />
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

const exhibitionLinks = [
  { label: 'О выставке', href: '/about' },
  { label: 'Место проведения', href: '/location' },
  { label: 'Медиа', href: '/media' },
  { label: 'Новости', href: '/news' },
  { label: 'FAQ', href: '/faq' },
]

const participantsLinks = [
  { label: 'Информация', href: '/participants/info' },
  { label: 'Преимущества', href: '/participants/benefits' },
]

const visitorsLinks = [
  { label: 'Зачем посещать', href: '/visit/why' },
  { label: 'Программа', href: '/visit/program' },
]
