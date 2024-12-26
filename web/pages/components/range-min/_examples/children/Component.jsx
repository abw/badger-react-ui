import { RangeMin, useRange, RangeSlider, RangeOutput, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
/* PRETEND: import {
  RangeMin, useRange,
  RangeSlider, RangeOutputs,
  Button
} from '@abw/badger-react-ui
*/

const RangeExample = () =>
  <RangeMin value={25}>
    <RangeOutput/>
    <RangeSlider/>
    <div className="flex space small">
      <SetMin value={0}/>
      <SetMin value={25}/>
      <SetMin value={50}/>
      <SetMin value={75}/>
      <SetMin value={100}/>
    </div>
    {
      ({ setMinValue }) =>
        <div className="flex space small">
          <Button
            text="0"
            onClick={() => setMinValue(0)}
          />
          <Button
            text="50"
            onClick={() => setMinValue(50)}
          />
          <Button
            text="100"
            onClick={() => setMinValue(100)}
          />
        </div>
    }
  </RangeMin>

const SetMin = ({ value }) => {
  const { setMinValue } = useRange()
  return (
    <Button
      text={value.toString()}
      onClick={() => setMinValue(value)}
    />
  )
}

export default RangeExample