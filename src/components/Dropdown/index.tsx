import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './dropdown.module.css'

interface DropdownProps {
  label: string
  links: {
    label: string
    href: string
  }[]
}

export const Dropdown = ({ label, links }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={styles.trigger}>
        {label} <img src="/icons/arrowPurple.svg" />
      </button>

      <div className={`${styles.dropdown} ${open ? styles.open : ''}`}>
        {links.map((item, i) => (
          <Link key={i} to={item.href} className={styles.link}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
