import Context from './Context'
import { classes } from '@/src/utils/classes'
import { SelectSeparatorProps } from './types'

export const SelectSeparator = Context.Consumer<
  SelectSeparatorProps
>(
  ({
    option,
    separatorClass='separator',
  }) =>
    <div
      className={
        classes(
          separatorClass,
          option.className
        )
      }
    ></div>
)

export default SelectSeparator
