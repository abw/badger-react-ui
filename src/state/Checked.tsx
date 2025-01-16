import { useState } from 'react'

export const CheckedState = ({
  checked=false,
} = { }) => {
  const [isChecked, setChecked] = useState(checked)
  const check   = () => setChecked(true)
  const uncheck = () => setChecked(false)
  return {
    isChecked,
    setChecked,
    check,
    uncheck
  }
}

export default CheckedState