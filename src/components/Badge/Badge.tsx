import BadgePrefix    from './Prefix'
import BadgeSuffix    from './Suffix'
import { Themed }     from '@/src/Theme'
import { BadgeProps }  from './types'
import { WithIcons, WithIconsProps }  from '@/components/Icon/index'
import { borderClass, classes, radiusClass, shadowClass } from '@/src/utils/classes'

const Badge = ({
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
  Prefix=BadgePrefix,
  Suffix=BadgeSuffix,
  Content=WithIcons,
  ...props
}: BadgeProps) => {
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

const ThemedBadge = Themed(Badge, 'Badge')
export default ThemedBadge