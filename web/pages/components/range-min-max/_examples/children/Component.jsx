import { RangeMinMax, useRangeMinMax, RangeMinMaxSlider, RangeMinMaxOutput, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
/* PRETEND: import {
  RangeMinMax, useRangeMinMax,
  RangeMinMaxSlider, RangeMinMaxOutputs,
  Button
} from '@abw/badger-react-ui
*/

const RangeExample = () =>
  <RangeMinMax minValue={25} maxValue={75}>
    <RangeMinMaxOutput/>
    <RangeMinMaxSlider/>
    <div className="flex space">
      <div className="flex gap-2 small">
        <SetMin value={0}/>
        <SetMin value={10}/>
        <SetMin value={20}/>
      </div>
      <div className="flex gap-2 small">
        <SetMax value={80}/>
        <SetMax value={90}/>
        <SetMax value={100}/>
      </div>
    </div>
    {
      ({ setValues }) =>
        <div className="flex space small">
          <Button
            text="0-25"
            onClick={() => setValues(0,25)}
          />
          <Button
            text="25-50"
            onClick={() => setValues(25,50)}
          />
          <Button
            text="50-75"
            onClick={() => setValues(50,75)}
          />
          <Button
            text="75-100"
            onClick={() => setValues(75,100)}
          />
        </div>
    }
  </RangeMinMax>

const SetMin = ({ value }) => {
  const { setMinValue } = useRangeMinMax()
  return (
    <Button
      text={value.toString()}
      onClick={() => setMinValue(value)}
    />
  )
}

const SetMax = ({ value }) => {
  const { setMaxValue } = useRangeMinMax()
  return (
    <Button
      text={value.toString()}
      onClick={() => setMaxValue(value)}
    />
  )
}

export default RangeExample