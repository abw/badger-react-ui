import React          from 'react'
import { Themed }     from '@/src/Theme.jsx'
import { WithIcons }  from '../Icon/index.jsx'
import { borderClass, classes, radiusClass, shadowClass } from '@/src/utils/classes.js'

const Button = ({
  type='button',
  size,
  color,
  className,
  disabled,
  bright,
  dark,
  outline,
  bare,
  shaded,
  shadow,
  border,
  radius,
  label,
  tooltip,
  tabIndex=0,
  icon,
  iconClass,
  iconLeft,
  iconLeftClass,
  iconRight,
  iconRightClass,
  text,
  children,
  Content=WithIcons,
  ...props
}) => {
  // const content = text || children
  const cname = classes(
    size, color, className,
    {
      bright, dark, outline, bare, shaded,
      icon
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
  return <button
    className={cname}
    aria-label={label}
    tabIndex={tabIndex}
    type={type}
    disabled={disabled}
    aria-disabled={disabled}
    data-tooltip={tooltip}
    {...props}
  >
    <Content
      {...bodyProps}
    />
  </button>
}

export default Themed(Button, 'Button')
