import AlertControls from './Controls.jsx'
import { Icon }      from '@/src/components/Icon/index'
import { doNothing } from '@abw/badger-utils'
import { AlertHeadlineProps } from './types'

const AlertHeadline = ({
  headline,
  headIcon,
  headicon=headIcon,
  toggle=doNothing,
  revealable = false,
  controlProps,
  Controls=AlertControls,
}: AlertHeadlineProps) =>
  <div
    className="headline flex space"
    onClick={revealable ? toggle : undefined}
  >
    <div>
      { Boolean(headicon) &&
        <Icon
          name={headicon as string}
          fixedWidth
          className="on-left"
        />
      }
      { headline }
    </div>
    <Controls {...controlProps}/>
  </div>

export default AlertHeadline
