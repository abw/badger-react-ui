import { RangeMax, useRange, RangeSlider, RangeOutput, Button } from '@/src/index'

/* START */
import React from 'react'
/* PRETEND: import {
  RangeMax, useRange,
  RangeSlider, RangeOutputs,
  Button
} from '@abw/badger-react-ui
*/

const RangeExample = () =>
  <RangeMax value={25}>
    <RangeOutput/>
    <RangeSlider/>
    <div className="flex space small">
      <SetMax value={0}/>
      <SetMax value={25}/>
      <SetMax value={50}/>
      <SetMax value={75}/>
      <SetMax value={100}/>
    </div>
    {
      ({ setMaxValue }) =>
        <div className="flex space small">
          <Button
            text="0"
            onClick={() => setMaxValue(0)}
          />
          <Button
            text="50"
            onClick={() => setMaxValue(50)}
          />
          <Button
            text="100"
            onClick={() => setMaxValue(100)}
          />
        </div>
    }
  </RangeMax>

const SetMax = ({ value }) => {
  const { setMaxValue } = useRange()
  return (
    <Button
      text={value.toString()}
      onClick={() => setMaxValue(value)}
    />
  )
}

export default RangeExample