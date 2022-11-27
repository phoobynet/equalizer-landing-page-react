import './AppDownloadButton.scss'
import iconAndroid from '@/assets/icon-android.svg'
import iconIOS from '@/assets/icon-apple.svg'
import classNames from 'classnames'
import { useMemo } from 'react'

interface Props {
  os: 'ios' | 'android'
}

export default function AppDownloadButton({ os }: Props) {
  const buttonText = useMemo(
    () => (os === 'ios' ? 'iOS Download' : 'Android Download'),
    [os],
  )

  const iconUrl = useMemo(() => (os === 'ios' ? iconIOS : iconAndroid), [os])

  const classes = useMemo(() => {
    return classNames({
      'app-download-button': true,
      [os]: true,
    })
  }, [os])

  return (
    <button
      className={classes}
      type="button"
    >
      <img
        src={iconUrl}
        alt="OS icon"
      />
      <span>{buttonText}</span>
    </button>
  )
}
