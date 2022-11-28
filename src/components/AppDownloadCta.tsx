import styles from './AppDownloadCta.module.scss'
import AppDownloadButton from '@/components/AppDownloadButton'
import AppHeading from '@/components/AppHeading'

export default function AppDownloadCta() {
  return (
    <div
      className={styles.appDownloadCta}
      role="application"
    >
      <AppHeading level={2}>Premium EQ</AppHeading>
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
