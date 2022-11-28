import styles from './AppHeading.module.scss'
import { PropsWithChildren } from 'react'

interface Props {
  level: 1 | 2
}

export default function AppHeading({
  children,
  level,
}: PropsWithChildren<Props>) {
  return (
    <div
      role="heading"
      aria-level={level}
      className={styles[`headingLevel${level}`]}
    >
      {children}
    </div>
  )
}
