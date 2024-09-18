import React from 'react'
import { Range } from '@/src/index.jsx'

const RangeExample = () => {
  const [min, setMin] = React.useState(0)
  const [max, setMax] = React.useState(5)
  const [changes, setChanges] = React.useState(0)
  const onChange = (min, max) => {
    // console.log(`onChange ${min} - ${max} `, state)
    setMin(min)
    setMax(max)
    setChanges( changes => changes + 1 )
  }
  return (
    <div className="grid-1 gap-2 border pad-a-4 bdr-2 surface-5">
      <h3 className="mar-v-none">onChange</h3>
      <Range
        options={[
          'A', 'B', 'C', 'D', 'E', 'F'
        ]}
        minValue={min}
        maxValue={max}
        showValues
        showInputs
        onChange={onChange}
      />
      <div className="flex gap-2 middle">
        <b className="larger">{changes}</b> <code>onChange</code> events
      </div>
    </div>
  )
}

export default RangeExample