import React from 'react'
import { RangeMinMax } from '@/src/index.jsx'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <RangeMinMax
      color="red"
      minValue={10} maxValue={30}
    />
    <RangeMinMax
      color="brown"
      minValue={15} maxValue={35}
    />
    <RangeMinMax
      color="orange"
      minValue={20} maxValue={40}
    />
    <RangeMinMax
      color="yellow"
      minValue={25} maxValue={45}
    />
    <RangeMinMax
      color="olive"
      minValue={30} maxValue={50}
    />
    <RangeMinMax
      color="green"
      minValue={35} maxValue={55}
    />
    <RangeMinMax
      color="teal"
      minValue={40} maxValue={60}
    />
    <RangeMinMax
      color="blue"
      minValue={45} maxValue={65}
    />
    <RangeMinMax
      color="indigo"
      minValue={50} maxValue={70}
    />
    <RangeMinMax
      color="violet"
      minValue={55} maxValue={75}
    />
    <RangeMinMax
      color="purple"
      minValue={60} maxValue={80}
    />
    <RangeMinMax
      color="pink"
      minValue={65} maxValue={85}
    />
    <RangeMinMax
      color="maroon"
      minValue={70} maxValue={90}
    />
    {/* END */}
  </div>

export default RangeExample