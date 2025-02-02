import { Icon } from '@/src/components/Icon/index'
import { doNothing } from '@abw/badger-utils'
import { AlertControlsProps } from './types'

const AlertControls = ({
  dismissable,
  revealable,
  isRevealed,
  dismiss=doNothing,
  openIcon = 'angle-down',
  closedIcon = 'angle-left',
  dismissIcon = 'cross',
}: AlertControlsProps) =>
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

export default AlertControls
