import React   from 'react'
import Range from '../Range/Range.jsx'
import DefaultThumbs from './Thumbs.jsx'
import DefaultValues from './Values.jsx'
import DefaultInputs from './Inputs.jsx'
import { Themed } from '@/src/Theme.jsx'
import { rangeMaxNormalClick } from './Utils.js'

const RangeMax = ({
  children,
  value,
  minNormal=0,
  maxNormal=0.5,
  Thumbs=DefaultThumbs,
  Values=DefaultValues,
  Inputs=DefaultInputs,
  normalClick=rangeMaxNormalClick,
  ...props
}) =>
  <Range
    maxValue={value}
    minNormal={minNormal}
    maxNormal={maxNormal}
    normalClick={normalClick}
    Thumbs={Thumbs}
    Values={Values}
    Inputs={Inputs}
    {...props}
  >
    {children}
  </Range>

const ThemedRangeMax = Themed(RangeMax, 'RangeMax')
export default ThemedRangeMax
