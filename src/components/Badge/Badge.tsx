import DefaultPrefix  from './Prefix'
import DefaultSuffix  from './Suffix'
import { Themed }     from '@/src/Theme'
import { BadgeType }  from './types'
import { WithIcons, WithIconsProps }  from '@/components/Icon/index'
import { borderClass, classes, radiusClass, shadowClass } from '@/src/utils/classes'

const Badge: BadgeType = ({
  size,
  color,
  compact,
  className,
  tag,
  shadow,
  border,
  radius,
  tooltip,
  icon,
  iconClass,
  iconLeft,
  iconLeftClass,
  iconRight,
  iconRightClass,
  label,
  text,
  prefix,
  suffix,
  children,
  Prefix=DefaultPrefix,
  Suffix=DefaultSuffix,
  Content=WithIcons,
  ...props
}) => {
  const cname = classes(
    'badge', size, color, className,
    {
      compact, tag, icon
    },
    shadowClass(shadow),
    borderClass(border),
    radiusClass(radius)
  )
  const bodyProps = {
    icon, iconClass,
    iconLeft, iconLeftClass,
    iconRight, iconRightClass,
    text, children
  }
  return <div
    className={cname}
    data-tooltip={tooltip}
    aria-label={label}
    {...props}
  >
    { Boolean(prefix) &&
      <Prefix prefix={prefix as string} {...props}/>
    }
    <Content
      {...bodyProps as WithIconsProps}
    />
    { Boolean(suffix) &&
      <Suffix suffix={suffix as string} {...props}/>
    }
  </div>
}

export default Themed(Badge, 'Badge')
