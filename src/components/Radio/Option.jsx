import React       from 'react'
import RadioLabel  from './Label.jsx'
import RadioInput  from './Input.jsx'
import { Themed }  from '@/src/Theme'
import { classes } from '@/src/utils/classes'


const Option = ({
  name,
  option,
  checked,
  inline,
  border,
  labelClass='radio',
  inputClass,
  Label=RadioLabel,
  Input=RadioInput,
  onChange,
}) =>
  <Label
    className={classes(labelClass, option.labelClass, { inline, border })}
    disabled={option.disabled}
    option={option}
  >
    <Input
      name={name}
      option={option}
      checked={checked}
      className={classes(inputClass, option.inputClass)}
      onChange={() => onChange(option.value)}
    />
    {option.text ?? option.label ?? option.name}
  </Label>

export default Themed(Option, 'RadioOption')

