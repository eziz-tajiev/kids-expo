import { ThemeCard } from '../../../components/ThemeCard'
import styles from './themeArea.module.css'

export const ThemeArea = () => {
  return (
    <section>
      <div className="page-max-width">
        <h2 className={styles.header}>Тематические направления выставки</h2>
        <div className={styles.themeCards}>
          {themeCardData.map((themeCard, index) => (
            <ThemeCard icon={themeCard.icon} title={themeCard.title} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const themeCardData = [
  { icon: 'baby', title: 'Товары для новорожденных)' },
  { icon: 'bag', title: 'Товары для школы (канцелярские принадлежности, детская мебель)' },
  { icon: 'education', title: 'Образование и обучение для детей' },
  { icon: 'toys', title: 'Игрушки и развивающие пособия' },
  { icon: 'dance', title: 'Танцы, музыка и искусство в детской жизни' },
  { icon: 'health', title: 'Здоровье и безопасность детей' },
  { icon: 'technology', title: 'Инновационные технологии в детском образовании' },
  { icon: 'reading', title: 'Детская литература и чтение' },
]
