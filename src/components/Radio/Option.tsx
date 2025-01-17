import RadioLabel  from './Label'
import RadioInput  from './Input'
import { classes } from '@/src/utils/classes'
import { RadioOptionType } from './types'

const RadioOption: RadioOptionType = ({
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
  >
    <Input
      name={name}
      option={option}
      checked={checked}
      className={classes(inputClass, option.inputClass)}
      onChange={() => onChange(option.value)}
    />
    { option.text ?? option.label ?? option.name }
  </Label>

export default RadioOption

