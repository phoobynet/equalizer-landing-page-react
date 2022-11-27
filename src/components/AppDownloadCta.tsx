import './AppDownloadCta.scss'
import AppDownloadButton from '@/components/AppDownloadButton'
import AppHeading from '@/components/AppHeading'

export default function AppDownloadCta() {
  return (
    <div
      className="app-download-cta"
      role="application"
    >
      <AppHeading level={2}>Premium EQ</AppHeading>
      <p className="content">
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <div className="price-container">
        <div className="price">$4</div>
        <div className="period">/ month</div>
      </div>
      <div className="button-container">
        <AppDownloadButton os="ios" />
        <AppDownloadButton os="android" />
      </div>
    </div>
  )
}
