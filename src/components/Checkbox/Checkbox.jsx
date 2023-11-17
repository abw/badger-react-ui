import React          from 'react'
import CheckboxLabel  from './Label.jsx'
import CheckboxInput  from './Input.jsx'
import { Themed }     from '@/src/Theme.jsx'

const Checkbox = ({
  text,
  className='checkbox',
  ref,
  inputRef,
  checked,
  checkedText=text,
  uncheckedText=text,
  // icon,
  // checkedIcon=icon,
  // uncheckedIcon=icon,
  // iconClass,
  inputClass,
  Label=CheckboxLabel,
  Input=CheckboxInput,
  ...props
}) =>
  <Label className={className} ref={ref} checked={checked}>
    <Input className={inputClass} ref={inputRef} checked={checked} {...props}/>
    {checked ? checkedText : uncheckedText}
  </Label>

export default Themed(Checkbox, 'Checkbox')

