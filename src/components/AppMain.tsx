import styles from './AppMain.module.scss'
import illustrationAppUrl from '@/assets/illustration-app.png'
import AppDownloadCta from '@/components/AppDownloadCta'
import AppHeading from '@/components/AppHeading'

export default function AppMain() {
  return (
    <main className={styles.appMainHero}>
      <div className={styles.appMainHeroHeading}>
        <AppHeading level={1}>
          We make your music sound extraordinary.
        </AppHeading>
        <p className={styles.appMainHeroHeadingContent}>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
      <div className={styles.appMainHeroIllustration}>
        <div className={styles.appMainHeroIllustrationBackgroundItem}></div>
        <img
          className={styles.appMainHeroIllustrationAppImg}
          src={illustrationAppUrl}
          alt="Mobile app illustration"
        />
        <div className={styles.appMainHeroIllustrationCta}>
          <AppDownloadCta />
        </div>
      </div>
    </main>
  )
}
