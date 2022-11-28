import styles from './AppDownloadButton.module.scss'
import iconAndroid from '@/assets/icon-android.svg'
import iconIOS from '@/assets/icon-apple.svg'
import { useEffect, useState } from 'react'

interface Props {
  os: 'ios' | 'android'
}

interface ButtonState {
  iconUrl: string
  className: string
  text: string
}

export default function AppDownloadButton({ os }: Props) {
  const [buttonState, setButtonStateState] = useState<ButtonState>()

  useEffect(() => {
    switch (os) {
      case 'ios':
        setButtonStateState({
          iconUrl: iconIOS,
          className: styles.btnIos,
          text: 'iOS Download',
        })
        break
      case 'android':
        setButtonStateState({
          iconUrl: iconAndroid,
          className: styles.btnAndroid,
          text: 'Android Download',
        })
        break
    }
  }, [os])

  if (!buttonState) {
    return null
  }

  return (
    <button
      className={buttonState.className}
      type="button"
    >
      <img
        src={buttonState.iconUrl}
        alt="OS icon"
      />
      <span className={styles.btnContent}>{buttonState.text}</span>
    </button>
  )
}
