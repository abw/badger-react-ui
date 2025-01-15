import React from 'react'
import { RangeMax } from '@/src/index'

/* START */
const RangeExample = () => {
  const initialValue = 50
  const [value, setValue] = React.useState(initialValue)

  const onChange = (value, state) => {
    console.log(`onChange:`, state)
    setValue(value)
  }

  return (
    <div>
      <RangeMax
        value={initialValue}
        step={10}
        onChange={onChange}
      />
      <div className="text-center mar-t-4">
        Value is {value}
      </div>
    </div>
  )
}
/* END */

export default RangeExample