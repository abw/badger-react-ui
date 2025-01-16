import Checked  from '@/src/state/Checked'
import Checkbox from './Checkbox'
import { CheckboxType } from './types.js'

const CheckboxState: CheckboxType = ({
  checked=false,
  onChange,
  ...props
}) => {
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

