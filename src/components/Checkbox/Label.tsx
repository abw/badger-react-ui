import { classes } from '@/src/utils/classes'
import { CheckboxLabelProps } from './types'

const CheckboxLabel = ({
  className,
  disabled,
  children,
  labelRef
}: CheckboxLabelProps) =>
  <label
    className={classes(className, { disabled })}
    ref={labelRef}
  >
    {children}
  </label>

export default CheckboxLabel

