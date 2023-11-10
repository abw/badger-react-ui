import React, { useState } from 'react'
import { Themed } from '@/src/Theme.jsx'
// import { sizes, fasizes, alertTypes } from '../../config/index.js'
import { Icon, classes } from '@/src/index.jsx'
import { isNumber } from '@abw/badger-utils'
import AlertControls from './Controls.jsx'
import AlertHeadline from './Headline.jsx'
import AlertContent from './Content.jsx'

const Alert = ({
  title,
  headline,
  headIcon,
  type,
  size,
  color,
  stripe,
  border,
  radius,
  shadow,
  className,
  icon,
  text,
  children,
  onDismiss,
  iconSize = '2x',
  dismissable = false,
  revealable = false,
  revealed = false,
  openIcon,
  closedIcon,
  dismissIcon,
  Headline=AlertHeadline,
  Controls=AlertControls,
  Content=AlertContent
}) => {
  const [isRevealed, setRevealed] = useState(revealable ? revealed :true)
  const [dismissed, setDismissed] = useState(false)
  const cname = classes(
    'alert', type, size, color, className,
    {
      revealable, dismissable, stripe
    },
    isRevealed ? 'revealed' : null,
    shadow ? `shadow-${shadow === true ? 1 : shadow}` : null,
    border ? `border ${isNumber(border) ? `bdw-${border}` : ''}` : null,
    radius ? `bdr-${radius}` : null,
  )
  const open = () => setRevealed(true)
  const close = () => setRevealed(false)
  const toggle = () => setRevealed( isRevealed => ! isRevealed )
  const dismiss = () => {
    setDismissed(true)
    if (onDismiss) {
      onDismiss()
    }
  }
  const controlProps = {
    dismissable,
    revealable,
    isRevealed,
    open,
    close,
    dismiss,
    openIcon,
    closedIcon,
    dismissIcon,
  }
  const contentProps = {
    title,
    text,
    children
  }
  const headlineProps = {
    headline,
    headIcon,
    toggle,
    revealable,
    controlProps,
    Controls,
  }

  if (dismissed) {
    return null
  }

  return (
    <div className={cname}>
      { Boolean(headline) &&
        <Headline {...headlineProps }/>
      }
      { isRevealed &&
        <Content {...contentProps}/>
      }
    </div>
  )
}

export const Info = Themed(
  props => <Alert {...props} type='info' />,
  'Info'
)
export const Success = Themed(
  props => <Alert {...props} type='success' />,
  'Success'
)
export const Warning = Themed(
  props => <Alert {...props} type='warning' />,
  'Warning'
)
export const Error = Themed(
  props => <Alert {...props} type='error' />,
  'Error'
)

Alert.Info    = Info
Alert.Success = Success
Alert.Warning = Warning
Alert.Error   = Error

export default Themed(Alert, 'Alert')
