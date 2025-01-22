import Context from './Context'
import Icon from '@/components/Icon/Icon'
import SelectInput from '@/components/Select/Select'
import { classes } from '@/src/utils/classes'
import { range } from '@abw/badger-utils'
import { doNothing } from '@abw/badger-utils'
import { RangeInputProps, RangeSelectOption } from './types'

export const RangeSelect = Context.Consumer<
  RangeInputProps
> (
  ({
    inputClass='range-input field mar-b-none',
    stepClass='step',
    inputInputsClass='inputs inline',
    inputPrefixClass='prefix shaded lined',
    inputSuffixClass='suffix shaded lined',
    disabledClass='disabled',
    stepDownIcon='minus',
    stepUpIcon='plus',
    selectOptions={},
    min,
    max,
    stepUp,
    stepDown,
    input,
    setInput,
    options,
    displayValue,
  }) =>
    <div className={inputClass}>
      <div className={inputInputsClass}>
        <div
          className={classes(inputPrefixClass, stepClass, stepDown ? null : disabledClass)}
          onClick={stepDown}
        >
          <Icon name={stepDownIcon}/>
        </div>
        <SelectInput
          {...selectOptions}
          value={input}
          options={
            range(min, max).map(
              value => ({
                value,
                text: displayValue(value, options)
              })
            ) as RangeSelectOption[]
          }
          onSelect={
            (option: RangeSelectOption) => setInput(option?.value || 0)
          }
          onUpdate={doNothing}
        />
        <div
          className={classes(inputSuffixClass, stepClass, stepUp ? null : disabledClass)}
          onClick={stepUp}
        >
          <Icon name={stepUpIcon}/>
        </div>
      </div>
    </div>
)

export default RangeSelect
