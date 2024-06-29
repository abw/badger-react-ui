import React from 'react'
import { RangeMin } from '@/src/index.jsx'

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
      <RangeMin
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