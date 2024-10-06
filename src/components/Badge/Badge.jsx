import React          from 'react'
import { Themed }     from '@/src/Theme.jsx'
import { WithIcons }  from '../Icon/index.jsx'
import { borderClass, classes, radiusClass, shadowClass } from '@/src/utils/classes.js'

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
  children,
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
    <Content
      {...bodyProps}
    />
  </div>
}

export default Themed(Badge, 'Badge')
