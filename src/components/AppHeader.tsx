import styles from './AppHeader.module.scss'
import bgPattern1Url from '@/assets/bg-pattern-1.svg'
import AppLogo from '@/components/AppLogo'

export default function AppHeader() {
  return (
    <header className={styles.appHeader}>
      <AppLogo />
      <img
        src={bgPattern1Url}
        alt="Background pattern"
        className={styles.appHeaderPattern}
      />
    </header>
  )
}
