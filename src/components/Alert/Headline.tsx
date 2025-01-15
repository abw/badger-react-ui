import AlertControls from './Controls.jsx'
import { Icon }      from '@/src/components/Icon/index'
import { Themed }    from '@/src/Theme'
import { doNothing } from '@abw/badger-utils'
import { AlertHeadlineType } from './types'

const AlertHeadline: AlertHeadlineType = ({
  headline,
  headIcon,
  headicon=headIcon,
  toggle=doNothing,
  revealable = false,
  controlProps,
  Controls=AlertControls,
}) =>
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
      { headline}
    </div>
    <Controls {...controlProps}/>
  </div>

const ThemedAlertHeadline: AlertHeadlineType =  Themed(AlertHeadline, 'AlertHeadline')
export default ThemedAlertHeadline

// export default Themed(AlertHeadline, 'AlertHeadline')
