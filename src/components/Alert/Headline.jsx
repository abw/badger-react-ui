import React from 'react'
import { Themed } from '@/src/Theme.jsx'
import { Icon } from '@/src/index.jsx'
import AlertControls from './Controls.jsx'

const AlertHeadline = ({
  headline,
  headIcon,
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
      { Boolean(headIcon) &&
        <Icon name={headIcon} fixedWidth className="mar-r-2" />
      }
      { headline}
    </div>
    <Controls {...controlProps}/>
  </div>

export default Themed(AlertHeadline, 'AlertHeadline')
