import React   from 'react'
import RangeMinMax from '../RangeMinMax/RangeMinMax.jsx'
import DefaultThumbs from './Thumbs.jsx'
import DefaultValues from './Values.jsx'
import DefaultInputs from './Inputs.jsx'
import { Themed } from '@/src/Theme.jsx'

const RangeMax = ({
  children,
  value,
  minNormal=0,
  maxNormal=0.5,
  Thumbs=DefaultThumbs,
  Values=DefaultValues,
  Inputs=DefaultInputs,
  rangeClass='range min-max max',
  ...props
}) =>
  <RangeMinMax
    maxValue={value}
    minNormal={minNormal}
    maxNormal={maxNormal}
    Thumbs={Thumbs}
    Values={Values}
    Inputs={Inputs}
    rangeClass={rangeClass}
    {...props}
  >
    {children}
  </RangeMinMax>

const ThemedRangeMax = Themed(RangeMax, 'RangeMax')
export default ThemedRangeMax
