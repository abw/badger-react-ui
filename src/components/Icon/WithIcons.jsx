import React      from 'react'
import { Icon } from '@abw/badger-icon'
import { Themed } from '@/src/Theme.jsx'
import { rotateStyle } from '@/src/utils/styles.js'

const WithIcons = ({
  icon,
  iconClass,
  iconLeft,
  iconLeftClass='on-left',
  iconLeftRotate,
  iconRight,
  iconRightClass='on-right',
  iconRightRotate,
  spanText,
  spanClass,
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
        style={rotateStyle('--icon-rotate', iconLeftRotate)}
        fixedWidth
      />
    }
    { spanText
      ? <span className={spanClass??''}>
          {text || children}
        </span>
      : (text || children)
    }
    { Boolean(iconRight) &&
      <Icon
        name={iconRight}
        className={iconRightClass}
        style={rotateStyle('--icon-rotate', iconRightRotate)}
        fixedWidth
      />
    }
  </>

export default Themed(WithIcons, 'WithIcons')
