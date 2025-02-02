import Checked  from '@/src/state/Checked'
import Checkbox from './Checkbox'
import { CheckboxProps } from './types.js'

const CheckboxState = ({
  checked=false,
  onChange,
  ...props
}: CheckboxProps) => {
  const { isChecked, setChecked } = Checked({ checked })
  const change = (checked: boolean) => {
    setChecked(checked)
    if (onChange) {
      onChange(checked)
    }
  }
  return (
    <Checkbox
      checked={isChecked}
      onChange={change}
      {...props}
    />
  )
}

export default CheckboxState

