import './AppHeading.scss'
import classNames from 'classnames'
import { PropsWithChildren, useMemo } from 'react'

interface Props {
  level: 1 | 2
}

export default function AppHeading({
  children,
  level,
}: PropsWithChildren<Props>) {
  const classes = useMemo(() => {
    return classNames({
      'app-heading': true,
      [`level-${level}`]: true,
    })
  }, [level])

  return (
    <div
      role="heading"
      aria-level={level}
      className={classes}
    >
      {children}
    </div>
  )
}
