import React      from 'react'
import { Icon } from '@abw/badger-icon'
// import Icon       from './Icon.jsx'
import { Themed } from '@/src/Theme.jsx'

const WithIcons = ({
  icon,
  iconClass,
  iconLeft,
  iconLeftClass='on-left',
  iconRight,
  iconRightClass='on-right',
  text,
  children
}) =>
  <>
    { Boolean(icon) &&
      <Icon
        name={icon}
        className={iconClass}
        fixedWidth
      />
    }
    { Boolean(iconLeft) &&
      <Icon
        name={iconLeft}
        className={iconLeftClass}
        fixedWidth
      />
    }
    { text || children }
    { Boolean(iconRight) &&
      <Icon
        name={iconRight}
        className={iconRightClass}
        fixedWidth
      />
    }
  </>

export default Themed(WithIcons, 'WithIcons')
