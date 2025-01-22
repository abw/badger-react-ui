import React   from 'react'
import Range from '../Range/Range'
import DefaultThumbs from './Thumbs.jsx'
import DefaultValues from './Values.jsx'
import DefaultInputs from './Inputs.jsx'
import { Themed } from '@/src/Theme'
import { rangeMinNormalClick, rangeMinPrepareRenderProps } from './Utils.js'
import { doNothing } from '@abw/badger-utils'

const RangeMin = ({
  children,
  value,
  minNormal=0.5,
  maxNormal=1,
  minRange=0,
  rangeClass='range range-min',
  Thumbs=DefaultThumbs,
  Values=DefaultValues,
  Inputs=DefaultInputs,
  normalClick=rangeMinNormalClick,
  prepareRenderProps=rangeMinPrepareRenderProps,
  onChange=doNothing,
  ...props
}) =>
  <Range
    minValue={value}
    minNormal={minNormal}
    maxNormal={maxNormal}
    minRange={minRange}
    rangeClass={rangeClass}
    normalClick={normalClick}
    prepareRenderProps={prepareRenderProps}
    onChange={(min, _, ...rest) => onChange(min, ...rest)}
    Thumbs={Thumbs}
    Values={Values}
    Inputs={Inputs}
    {...props}
  >
    {children}
  </Range>

const ThemedRangeMin = Themed(RangeMin, 'RangeMin')
export default ThemedRangeMin
