import Context from './Context'
import { classes } from '@/src/utils/classes'
import { DropdownMenuSeparatorProps } from './types'

export const DropdownMenuSeparator = Context.Consumer<
  DropdownMenuSeparatorProps
>(
  ({
    option,
    separatorClass='separator',
  }) =>
    <div className={classes(separatorClass, option.className)}>
    </div>
)

export default DropdownMenuSeparator