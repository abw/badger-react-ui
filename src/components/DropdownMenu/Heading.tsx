import Context from './Context'
import { classes } from '@/src/utils/classes'
import { DropdownMenuHeadingProps } from './types'

export const DropdownMenuHeading = Context.Consumer<
  DropdownMenuHeadingProps
>(
  ({
    option,
    optionClass='item no-hover',
    headingClass='heading',
  }) =>
    <h4 className={classes(headingClass, optionClass, option.className)}>
      {option.heading}
    </h4>
)

export default DropdownMenuHeading