import Icon from './Icon'
import { Themed } from '@/src/Theme'
import { iconProps } from '@/src/utils/icon'
import { WithIconsProps } from './types'

export default Themed<WithIconsProps>(
  ({
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
    </>,
  'WithIcons'
)

