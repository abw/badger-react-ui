import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

/* START */
const RangeExample = () => {
  const minValue = 10
  const maxValue = 90
  const [values, setValues] = React.useState({
    min: minValue,
    max: maxValue
  })
  const onChange = (min, max) =>
    setValues({ min, max })

  return (
    <div>
      <RangeMinMax
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