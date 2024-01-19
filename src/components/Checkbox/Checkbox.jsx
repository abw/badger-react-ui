import React          from 'react'
import CheckboxLabel  from './Label.jsx'
import CheckboxInput  from './Input.jsx'
import { Themed }     from '@/src/Theme.jsx'
import { borderClass, classes } from '@/src/utils/classes.js'

const Checkbox = ({
  size,
  color,
  border,
  inline,
  className='checkbox',
  text,
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
  <Label
    className={
      classes(
        size, color, className,
        borderClass(border),
        { inline }
      )
    }
    ref={ref}
    checked={checked}
    {...props}
  >
    <Input className={inputClass} ref={inputRef} checked={checked} {...props}/>
    {checked ? checkedText : uncheckedText}
  </Label>

export default Themed(Checkbox, 'Checkbox')

