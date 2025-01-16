import { Themed } from '@/src/Theme'
import { classes } from '@/src/utils/classes'
import { OverlayType } from './types'

export const Overlay: OverlayType = ({
  color,
  className,
  style,
  fixed,
  light,
  dark,
  onClick,
  children
}) =>
  <div
    className={classes('overlay', className, color, { fixed, light, dark })}
    style={style}
    onClick={onClick}
  >
    {children}
  </div>

export default Themed(Overlay, 'Overlay')
