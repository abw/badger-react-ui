import React    from 'react'
import Checked  from '@/state/Checked.jsx'
import Checkbox from './Checkbox.jsx'

const CheckboxState = ({
  checked=false,
  onChange,
  ...props
}) => {
  const { isChecked, setChecked } = Checked({ checked })
  const change = checked => {
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

