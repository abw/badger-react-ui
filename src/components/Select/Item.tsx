import Context from './Context'
import SelectOption from './Option'
import SelectHeading from './Heading'
import SelectSeparator from './Separator'
import { SelectItemProps } from './types'
import { selectOptionAsObject } from '@/src/utils'

export const SelectItem = Context.Consumer<
  SelectItemProps
>(
  ({
    option,
    Heading=SelectHeading,
    Separator=SelectSeparator,
    Option=SelectOption,
    ...props
  }) => {
    const optionObject = selectOptionAsObject(option)
    return (
      optionObject.heading
        // ? <Heading option={optionObject} {...props}/>
        ? <Heading option={optionObject}/>
        : optionObject.separator
          // ? <Separator option={optionObject} {...props}/>
          ? <Separator option={optionObject}/>
          : <Option
              option={option}
              optionObject={optionObject}
              {...props}
            />
    )
  }
)

export default SelectItem
