import React from 'react'
import { Range } from '@/src/index'

const RangeExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Range
      color="red"
      minValue={10} maxValue={30}
    />
    <Range
      color="brown"
      minValue={15} maxValue={35}
    />
    <Range
      color="orange"
      minValue={20} maxValue={40}
    />
    <Range
      color="yellow"
      minValue={25} maxValue={45}
    />
    <Range
      color="olive"
      minValue={30} maxValue={50}
    />
    <Range
      color="green"
      minValue={35} maxValue={55}
    />
    <Range
      color="teal"
      minValue={40} maxValue={60}
    />
    <Range
      color="blue"
      minValue={45} maxValue={65}
    />
    <Range
      color="indigo"
      minValue={50} maxValue={70}
    />
    <Range
      color="violet"
      minValue={55} maxValue={75}
    />
    <Range
      color="purple"
      minValue={60} maxValue={80}
    />
    <Range
      color="pink"
      minValue={65} maxValue={85}
    />
    <Range
      color="maroon"
      minValue={70} maxValue={90}
    />
    {/* END */}
  </div>

export default RangeExample