import CheckboxLabel  from './Label'
import CheckboxInput  from './Input'
import { Themed }     from '@/src/Theme'
import { CheckboxProps } from './types'
import { borderClass, classes } from '@/src/utils/classes'

const Checkbox = ({
  size,
  color,
  border,
  inline,
  className='checkbox',
  text,
  labelRef,
  inputRef,
  checked,
  checkedText=text,
  uncheckedText=text,
  disabled=false,
  Label=CheckboxLabel,
  Input=CheckboxInput,
  // icon,
  // checkedIcon=icon,
  // uncheckedIcon=icon,
  // iconClass,
  ...props
}: CheckboxProps) =>
  <Label
    className={
      classes(
        size, color, className,
        borderClass(border),
        { inline }
      )
    }
    disabled={disabled}
    labelRef={labelRef}
    {...props}
  >
    <Input
      checked={checked}
      disabled={disabled}
      inputRef={inputRef}
      {...props}
    />
    {checked ? checkedText : uncheckedText}
  </Label>

export default Themed(Checkbox, 'Checkbox')

