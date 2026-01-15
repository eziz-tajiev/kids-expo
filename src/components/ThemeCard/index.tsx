import styles from './themeCard.module.css'

interface ThemeCardProps {
  icon: string
  title: string
}

export const ThemeCard = ({ icon, title }: ThemeCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={`/icons/${icon}.svg`} />
      </div>
      <h5>{title}</h5>
    </div>
  )
}
