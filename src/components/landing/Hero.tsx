import './Hero.scss'
import AppDownloadCta from '@/components/AppDownloadCta'
import AppHeading from '@/components/AppHeading'
import HeroIllustrationAppImg from '@/components/landing/HeroIllustrationAppImg'

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-heading">
        <AppHeading level={1}>
          We make your music sound extraordinary.
        </AppHeading>
        <p className="content">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
      <div className="illustrations">
        <div className="background-item"></div>
        <HeroIllustrationAppImg />
        <AppDownloadCta />
      </div>
    </main>
  )
}
