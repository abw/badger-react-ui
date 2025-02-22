import Range, { RangeComponentProps } from '../Range/Range'
import DefaultThumbs from './Thumbs'
import DefaultValues from './Values'
import DefaultInputs from './Inputs'
import { Themed } from '@/src/Theme'
import { rangeMinNormalClick, rangeMinPrepareRenderProps } from './Utils'
import { doNothing } from '@abw/badger-utils'
import { RangeState } from '../Range/types'

export type RangeMinComponentProps = Omit<RangeComponentProps, 'onChange'> & {
  onChange?: (
    maxValue: number,
    state: RangeState
  ) => void
}

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
}: RangeMinComponentProps) =>
  <Range
    minValue={value as number | undefined}
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
