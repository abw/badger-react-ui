import Range, { RangeComponentProps } from '../Range/Range'
import DefaultThumbs from './Thumbs'
import DefaultValues from './Values'
import DefaultInputs from './Inputs'
import { Themed } from '@/src/Theme'
import { rangeMaxNormalClick, rangeMaxPrepareRenderProps } from './Utils'
import { doNothing } from '@abw/badger-utils'
import { RangeState } from '../Range/types'

export type RangeMaxComponentProps = RangeComponentProps & {
  onChange?: (
    maxValue: number,
    state: RangeState
  ) => void
}

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
}: RangeMaxComponentProps) =>
  <Range
    maxValue={value as number | undefined}
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
