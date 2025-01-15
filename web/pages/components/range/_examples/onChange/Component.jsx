import React from 'react'
import { Range } from '@/src/index'

/* START */
const RangeExample = () => {
  const minValue = 10
  const maxValue = 90
  const [values, setValues] = React.useState({
    min: minValue,
    max: maxValue
  })
  const [changes, setChanges] = React.useState(0)
  const onChange = (min, max, state) => {
    console.log(`onChange: `, state)
    setValues({ min, max })
    setChanges( changes => changes + 1 )
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
      <div className="flex gap-2 middle">
        <b className="larger">{changes}</b> <code>onChange</code> events fired
      </div>
    </div>
  )
}
/* END */

export default RangeExample