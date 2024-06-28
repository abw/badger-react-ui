import { Range, useRange, RangeSlider, RangeOutput, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
/* PRETEND: import {
  Range, useRange, RangeSlider, RangeOutput, Button
} from '@abw/badger-react-ui
*/

const RangeExample = () =>
  <Range value={25}>
    <RangeOutput/>
    <RangeSlider/>
    <div className="flex space">
      <SetButton value={0}/>
      <SetButton value={25}/>
      <SetButton value={50}/>
      <SetButton value={75}/>
      <SetButton value={100}/>
    </div>
    {
      ({ setValue }) =>
        <Button
          text="Eleven (one louder)"
          onClick={() => setValue(11)}
        />
    }
  </Range>

const SetButton = ({ value }) => {
  const { setValue } = useRange()
  return (
    <Button
      text={value.toString()}
      onClick={() => setValue(value)}
    />
  )
}

export default RangeExample