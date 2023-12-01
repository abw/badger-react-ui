import React      from 'react'
import { Themed } from '@/src/Theme.jsx'
import { Icon }   from '@/components/Icon/index.jsx'

const AlertControls = ({
  dismissable,
  dismiss,
  revealable,
  isRevealed,
  openIcon = 'angle-down',
  closedIcon = 'angle-left',
  dismissIcon = 'circle',
}) =>
  <div className="on-right">
    { Boolean(dismissable) &&
      <Icon
        name={dismissIcon}
        fixedWidth
        className="dismiss"
        onClick={() => dismiss(true)}
      />
    }
    { Boolean(revealable) &&
      <Icon
        name={isRevealed ? openIcon : closedIcon}
        fixedWidth
        className="reveal"
      />
    }
  </div>

export default Themed(AlertControls, 'AlertControls')
