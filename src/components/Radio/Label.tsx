import { classes } from '@/src/utils/classes'
import { RadioLabelType } from './types'

const RadioLabel: RadioLabelType = ({
  className,
  disabled,
  children,
}) =>
  <label
    className={classes(className, { disabled })}
  >
    {children}
  </label>

export default RadioLabel

