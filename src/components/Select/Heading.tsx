import Context from './Context'
import { classes } from '@/src/utils/classes'
import { SelectHeadingProps } from './types'
import { SELECT_HEADING_CLASS, SELECT_OPTION_CLASS } from './Constants'

export const SelectHeading = Context.Consumer<
  SelectHeadingProps
>(
  ({
    option,
    optionClass = SELECT_OPTION_CLASS,
    headingClass = SELECT_HEADING_CLASS,
    displayHeading,
  }) =>
    <div
      className={
        classes(
          optionClass,
          headingClass,
          option.indent ? `indent-${option.indent}` : null,
        )
      }
    >
      {displayHeading(option)}
    </div>
)

export default SelectHeading
