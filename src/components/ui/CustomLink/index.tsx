import type { CSSProperties } from 'react'
import styles from './customLink.module.css'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  style?: CSSProperties
  href: string
}

export const CustomLink = ({ title, style, href }: Props) => {
  return (
    <Link to={href} className={styles.customLink} style={style}>
      {title}
    </Link>
  )
}
