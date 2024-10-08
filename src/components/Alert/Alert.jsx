import React, { useState }  from 'react'
import AlertControls        from './Controls.jsx'
import AlertHeadline        from './Headline.jsx'
import AlertContent         from './Content.jsx'
import AlertIcon            from './Icon.jsx'
import { Themed }           from '@/src/Theme.jsx'
import {
  borderClass, classes, radiusClass, shadowClass
} from '@/src/utils/index.js'

const Alert = ({
  title,
  headline,
  headicon,
  headIcon=headicon,
  type,
  size,
  color,
  compact,
  stripe,
  border,
  radius,
  shadow,
  className,
  text,
  children,
  onDismiss,
  icon,
  dismissable = false,
  revealable = false,
  revealed = false,
  openIcon,
  closedIcon,
  dismissIcon,
  Headline=AlertHeadline,
  Controls=AlertControls,
  Content=AlertContent,
  Icon=AlertIcon,
}) => {
  const [isRevealed, setRevealed] = useState(revealable ? revealed : true)
  const [dismissed, setDismissed] = useState(false)
  const cname = classes(
    'alert', type, size, color, className,
    {
      compact, revealable, dismissable, stripe
    },
    isRevealed ? 'revealed' : null,
    shadowClass(shadow),
    borderClass(border),
    radiusClass(radius)
  )
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
  const iconProps = {
    ...contentProps,
    icon,
    Content
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
      { isRevealed && (
        icon
          ? <Icon {...iconProps}/>
          : <Content {...contentProps}/>
      )}
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
