import React   from 'react'
import RangeMinMax from '../RangeMinMax/RangeMinMax.jsx'
import DefaultThumbs from './Thumbs.jsx'
import DefaultValues from './Values.jsx'
import { Themed } from '@/src/Theme.jsx'

const RangeMax = ({
  children,
  minNormal=0,
  maxNormal=0.5,
  Thumbs=DefaultThumbs,
  Values=DefaultValues,
  rangeClass='range',
  ...props
}) =>
  <RangeMinMax
    minNormal={minNormal}
    maxNormal={maxNormal}
    Thumbs={Thumbs}
    Values={Values}
    // rangeClass={rangeClass}
    {...props}
  >
    {children}
  </RangeMinMax>

const ThemedRangeMax = Themed(RangeMax, 'RangeMax')
export default ThemedRangeMax
