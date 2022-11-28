import styles from './HeroIllustrationAppImg.module.scss'
import illustrationAppUrl from '@/assets/illustration-app.png'

export default function HeroIllustrationAppImg() {
  return (
    <img
      className={styles.heroIllustrationAppImg}
      src={illustrationAppUrl}
      alt="Mobile app illustration"
    />
  )
}
