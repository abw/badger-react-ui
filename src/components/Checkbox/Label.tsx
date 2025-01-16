import { classes } from '@/src/utils/classes'
import { forwardRef } from 'react'
import { CheckboxLabelProps } from './types'

const CheckboxLabel = forwardRef<
  HTMLLabelElement,
  CheckboxLabelProps
>(
  (
    {
      className,
      disabled,
      children,
    },
    ref
  ) =>
    <label
      className={classes(className, { disabled })}
      ref={ref}
    >
      {children}
    </label>
)

export default CheckboxLabel

