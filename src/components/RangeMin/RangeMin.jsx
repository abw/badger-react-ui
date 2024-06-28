import React   from 'react'
import Range from '../Range/Range.jsx'
import DefaultThumbs from './Thumbs.jsx'
import DefaultValues from './Values.jsx'
import DefaultInputs from './Inputs.jsx'
import { Themed } from '@/src/Theme.jsx'

const RangeMin = ({
  children,
  value,
  minNormal=0.5,
  maxNormal=1,
  Thumbs=DefaultThumbs,
  Values=DefaultValues,
  Inputs=DefaultInputs,
  normalClick='min',
  ...props
}) =>
  <Range
    minValue={value}
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

const ThemedRangeMin = Themed(RangeMin, 'RangeMin')
export default ThemedRangeMin
