import './HeroIllustrationAppImg.scss'
import illustrationAppUrl from '@/assets/illustration-app.png'

export default function HeroIllustrationAppImg() {
  return (
    <img
      className="illustration-app-img"
      src={illustrationAppUrl}
      alt="Mobile app illustration"
    />
  )
}
