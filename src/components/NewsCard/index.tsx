import styles from './newsCard.module.css'

interface NewsCardProps {
  image: string
  date: string
  title: string
  onClick?: () => void
}

export const NewsCard = ({ image, date, title, onClick }: NewsCardProps) => {
  return (
    <article className={styles.card} onClick={onClick}>
      <img src={image} alt={title} />

      <div className={styles.content}>
        <time className={styles.date}>{date}</time>
        <h6 className={styles.title}>{title}</h6>
      </div>
    </article>
  )
}
