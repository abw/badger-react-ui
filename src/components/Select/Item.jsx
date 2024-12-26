import React            from 'react'
import Context          from './Context.js'
import SelectHeading    from './Heading.jsx'
import SelectOption     from './Option.jsx'
import SelectSeparator  from './Separator.jsx'

const Item = ({
  option,
  Heading=SelectHeading,
  Separator=SelectSeparator,
  Option=SelectOption,
  ...props
}) =>
  option.heading
    ? <Heading option={option} {...props}/>
    : option.separator
      ? <Separator option={option} {...props}/>
      : <Option option={option} {...props}/>

export const SelectItem = Context.Consumer(Item)
export default SelectItem
