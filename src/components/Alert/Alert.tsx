import AlertControls from './Controls.jsx'
import AlertHeadline from './Headline.jsx'
import AlertContent  from './Content.jsx'
import AlertIcon     from './Icon'
import { Themed }    from '@/src/Theme'
import { useState }  from 'react'
import {
  borderClass, classes, radiusClass, shadowClass
} from '@/src/utils/index'
import {
  AlertContentProps, AlertControlsProps, AlertHeadlineProps,
  AlertIconProps, AlertProps
} from './types.js'

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
  alertClass='alert',
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
}: AlertProps) => {
  const [isRevealed, setRevealed] = useState(revealable ? revealed : true)
  const [dismissed, setDismissed] = useState(false)
  const cname = classes(
    alertClass, type, size, color, className,
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
  const controlProps: AlertControlsProps = {
    dismissable,
    revealable,
    isRevealed,
    dismiss,
    openIcon,
    closedIcon,
    dismissIcon,
  }
  const contentProps: AlertContentProps = {
    title,
    text,
    children
  }
  const iconProps: AlertIconProps = {
    ...contentProps,
    Content,
    // We can afford to narrow this as we have a later assertion to check
    // this is defined before rendering <Icon {...iconProps}/>
    icon: icon as string,
  }
  const headlineProps: AlertHeadlineProps= {
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
  (props: AlertProps) => <Alert {...props} type='info' />,
  'Info'
)
export const Success = Themed(
  (props: AlertProps) => <Alert {...props} type='success' />,
  'Success'
)
export const Warning = Themed(
  (props: AlertProps) => <Alert {...props} type='warning' />,
  'Warning'
)
export const Error = Themed(
  (props: AlertProps) => <Alert {...props} type='error' />,
  'Error'
)

/*
Alert.Info    = Info
Alert.Success = Success
Alert.Warning = Warning
Alert.Error   = Error
*/

export const ThemedAlert = Themed(Alert, 'Alert')
export default ThemedAlert
