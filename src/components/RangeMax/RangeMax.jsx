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
  // alignInputs='center',
  // rangeClass='range m',
  ...props
}) =>
  <RangeMinMax
    maxValue={value}
    minNormal={minNormal}
    maxNormal={maxNormal}
    // alignInputs={alignInputs}
    // rangeClass={rangeClass}
    Thumbs={Thumbs}
    Values={Values}
    Inputs={Inputs}
    {...props}
  >
    {children}
  </RangeMinMax>

const ThemedRangeMax = Themed(RangeMax, 'RangeMax')
export default ThemedRangeMax
