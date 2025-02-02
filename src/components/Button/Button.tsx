import { Themed } from '@/src/Theme'
import { WithIcons } from '@/components/Icon/index'
import { ButtonProps } from './types'
import { borderClass, classes, radiusClass, shadowClass } from '@/src/utils/classes'

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
}: ButtonProps) => {
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
  return (
    <button
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
  )
}

/**
 * Render a button.
 *
 * Example:
 * ```tsx
 * <Button
 *    text="A Red Button"
 *    color="red"
 *    onClick={ () => console.log('button clicked') }
 *  />
 * ```
 */
const ThemedButton = Themed(Button, 'Button')
export default ThemedButton
