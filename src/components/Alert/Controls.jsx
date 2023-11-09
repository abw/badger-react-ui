import React from 'react'
import { Themed } from '@/src/Theme.jsx'
import { Icon } from '@/src/index.jsx'

const AlertControls = ({
  dismissable,
  dismiss,
  revealable,
  isRevealed,
  open,
  close,
  openIcon = 'angle-down',
  closedIcon = 'angle-left',
  dismissIcon = 'circle-cross',
}) =>
  <div>
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
        onClick={isRevealed ? close : open}
      />
    }
  </div>

export default Themed(AlertControls, 'AlertControls')
