import './Header.scss'
import bgPattern1Url from '@/assets/bg-pattern-1.svg'
import AppLogo from '@/components/AppLogo'

export default function Header() {
  return (
    <header className="landing-header">
      <AppLogo />
      <img
        src={bgPattern1Url}
        alt="Background pattern"
        className="landing-bg-pattern"
      />
    </header>
  )
}
