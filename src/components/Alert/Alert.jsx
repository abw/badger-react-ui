import React, { useState } from 'react'
import { Themed } from '@/src/Theme.jsx'
// import { sizes, fasizes, alertTypes } from '../../config/index.js'
import { Icon, classes } from '@/src/index.jsx'
import { isNumber } from '@abw/badger-utils'
import Controls from './Controls.jsx'

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
}) => {
  const [isRevealed, setRevealed] = useState(revealable ? revealed :true)
  const [dismissed, setDismissed] = useState(false)
  const cname = classes(
    'alert', type, size, color, className,
    {
      icon, revealable, dismissable,
      headline, stripe, border
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

  if (dismissed) {
    return null
  }

  return (
    <div className={cname}>
      { Boolean(headline) &&
        <div
          className="headline flex space"
          onClick={revealable ? toggle : null}
        >
          <div>
            { Boolean(headIcon) &&
              <Icon name={headIcon} fixedWidth className="mar-r-2" />
            }
            { headline}
          </div>
          <Controls {...controlProps}/>
        </div>
      }
      { isRevealed &&
        <>
          {/* {icon ? <Icon icon={icon} size={iconSize} className="body-icon"/> : null} */}
          {title && <h3>{title}</h3>}
          {text || children}
        </>
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
