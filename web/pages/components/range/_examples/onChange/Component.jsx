import React from 'react'
import { Range } from '@/src/index.jsx'

/* START */
const RangeExample = () => {
  const minValue = 10
  const maxValue = 90
  const [values, setValues] = React.useState({
    min: minValue,
    max: maxValue
  })
  const onChange = (min, max, state) => {
    console.log(`onChange: `, state)
    setValues({ min, max })
  }

  return (
    <div>
      <Range
        minValue={minValue}
        maxValue={maxValue}
        step={10}
        onChange={onChange}
      />
      <div className="text-center mar-t-4">
        From {values.min} to {values.max}
      </div>
    </div>
  )
}
/* END */

export default RangeExample