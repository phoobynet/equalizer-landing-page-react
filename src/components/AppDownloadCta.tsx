import styles from './AppDownloadCta.module.css'
import AppDownloadButton from '@/components/AppDownloadButton'
import AppHeading from '@/components/AppHeading'

export default function AppDownloadCta() {
  return (
    <div
      className={styles.container}
      role="application"
    >
      <div className={styles.headingContainer}>
        <AppHeading level={2}>Premium EQ</AppHeading>
      </div>
      <p className={styles.content}>
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <div className={styles.priceContainer}>
        <div className={styles.price}>$4</div>
        <div className={styles.period}>/ month</div>
      </div>
      <div className={styles.buttonContainer}>
        <AppDownloadButton os="ios" />
        <AppDownloadButton os="android" />
      </div>
    </div>
  )
}
