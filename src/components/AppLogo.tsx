import styles from './AppLogo.module.scss'
import logoUrl from '@/assets/logo.svg'

export default function AppLogo() {
  return (
    <img
      className={styles.appLogo}
      src={logoUrl}
      alt="Equalizer logo"
    />
  )
}
