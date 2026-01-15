import styles from './hero.module.css'

export const Hero = () => {
  return (
    <section>
      <img className={styles.heroImage} src="/images/heroImage.png" />
    </section>
  )
}
