import './AppLogo.scss'
import logoUrl from '@/assets/logo.svg'

export default function AppLogo() {
  return (
    <img
      className="app-logo"
      src={logoUrl}
      alt="Equalizer logo"
    />
  )
}
