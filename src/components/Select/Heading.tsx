import Context from './Context'
import { classes } from '@/src/utils/classes'
import { SelectHeadingProps } from './types'

export const SelectHeading = Context.Consumer<
  SelectHeadingProps
>(
  ({
    option,
    optionClass,
    headingClass,
    displayHeading,
  }) =>
    <div
      className={
        classes(
          optionClass,
          headingClass,
          option.className,
          option.indent ? `indent-${option.indent}` : null,
        )
      }
    >
      { displayHeading(option) }
    </div>
)

export default SelectHeading
