import React      from 'react'
import Icon       from './Icon.js'
import { Themed } from '@/src/Theme'
import { iconProps } from '@/src/utils/icon'

const WithIcons = ({
  icon,
  iconLeft,
  iconRight,
  spanText,
  spanClass,
  text,
  children,
  ...props
}) =>
  <>
    { Boolean(icon) &&
      <Icon
        {...iconProps({ icon, ...props }) }
        fixedWidth
      />
    }
    { Boolean(iconLeft) &&
      <Icon
        { ...iconProps( { iconLeft, ...props }, { side: 'Left' } ) }
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
        {...iconProps({ iconRight, ...props }, { side: 'Right' }) }
        fixedWidth
      />
    }
  </>

export default Themed(WithIcons, 'WithIcons')
