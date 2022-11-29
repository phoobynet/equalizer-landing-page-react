import styles from './AppHeading.module.scss'
import { PropsWithChildren } from 'react'

interface Props {
  level: 1 | 2
  className?: string
}

export default function AppHeading({
  children,
  className,
  level,
}: PropsWithChildren<Props>) {
  return (
    <div
      role="heading"
      aria-level={level}
      className={`${styles[`appHeading${level}`]} ${className}`}
    >
      {children}
    </div>
  )
}
