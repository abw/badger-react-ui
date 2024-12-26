import React          from 'react'
import AlertControls  from './Controls.jsx'
import { Themed }     from '@/src/Theme.jsx'
import { Icon }       from '@/components/Icon/index.jsx'

const AlertHeadline = ({
  headline,
  headIcon,
  headicon=headIcon,
  toggle,
  revealable = false,
  controlProps,
  Controls=AlertControls,
}) =>
  <div
    className="headline flex space"
    onClick={revealable ? toggle : null}
  >
    <div>
      { Boolean(headicon) &&
        <Icon
          name={headicon}
          fixedWidth
          className="on-left"
        />
      }
      { headline}
    </div>
    <Controls {...controlProps}/>
  </div>

export default Themed(AlertHeadline, 'AlertHeadline')
