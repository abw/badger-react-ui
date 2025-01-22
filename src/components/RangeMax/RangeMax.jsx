import React   from 'react'
import Range from '../Range/Range'
import DefaultThumbs from './Thumbs.jsx'
import DefaultValues from './Values.jsx'
import DefaultInputs from './Inputs.jsx'
import { Themed } from '@/src/Theme'
import { rangeMaxNormalClick, rangeMaxPrepareRenderProps } from './Utils.js'
import { doNothing } from '@abw/badger-utils'

const RangeMax = ({
  children,
  value,
  minNormal=0,
  maxNormal=0.5,
  minRange=0,
  rangeClass='range range-max',
  Thumbs=DefaultThumbs,
  Values=DefaultValues,
  Inputs=DefaultInputs,
  normalClick=rangeMaxNormalClick,
  prepareRenderProps=rangeMaxPrepareRenderProps,
  onChange=doNothing,
  ...props
}) =>
  <Range
    maxValue={value}
    minNormal={minNormal}
    maxNormal={maxNormal}
    minRange={minRange}
    rangeClass={rangeClass}
    normalClick={normalClick}
    prepareRenderProps={prepareRenderProps}
    onChange={( _ , max, ...rest) => onChange(max, ...rest)}
    Thumbs={Thumbs}
    Values={Values}
    Inputs={Inputs}
    {...props}
  >
    {children}
  </Range>

const ThemedRangeMax = Themed(RangeMax, 'RangeMax')
export default ThemedRangeMax
