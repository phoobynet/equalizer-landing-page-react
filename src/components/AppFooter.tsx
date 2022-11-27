import './AppFooter.scss'
import facebookUrl from '@/assets/icon-facebook.svg'
import instagramUrl from '@/assets/icon-instagram.svg'
import twitterUrl from '@/assets/icon-twitter.svg'
import AppLogo from '@/components/AppLogo'

export default function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="logo-container">
        <AppLogo />
      </div>
      <p className="content">All rights reserved © Equalizer 2021</p>
      <p className="content">
        Have any problems? Contact us via social media or email us at{' '}
        <strong>equalizer@example.com</strong>
      </p>
      <div className="social">
        <img
          src={facebookUrl}
          alt="Facebook"
        />
        <img
          src={instagramUrl}
          alt="Instagram"
        />
        <img
          src={twitterUrl}
          alt="Twitter"
        />
      </div>
    </footer>
  )
}
