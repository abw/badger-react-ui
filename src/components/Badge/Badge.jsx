import React          from 'react'
import { Themed }     from '@/src/Theme'
import { WithIcons }  from '@/components/Icon/index'
import DefaultPrefix  from './Prefix.jsx'
import DefaultSuffix  from './Suffix.jsx'
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
      <Prefix prefix={prefix} {...props}/>
    }
    <Content
      {...bodyProps}
    />
    { Boolean(suffix) &&
      <Suffix suffix={suffix} {...props}/>
    }
  </div>
}

export default Themed(Badge, 'Badge')
