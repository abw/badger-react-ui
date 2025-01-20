import { SelectOption } from '@/src/utils'
import { isObject } from '@abw/badger-utils'

export const maybeObjectOptionClasses = (
  option: SelectOption,
  classes: { disabled?: string }
) =>
  isObject(option)
    ? [
        option.className,
        option.indent ? `indent-${option.indent}` : null,
        option.disabled ? classes.disabled : null
      ]
    : [ ]
