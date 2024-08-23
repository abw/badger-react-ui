import React from 'react'
import Context from './Context.js'
import Icon from '../Icon/Icon.jsx'
import SelectInput from '../Select/Select.jsx'
import { classes } from '@/src/utils/classes.js'
import { range } from '@abw/badger-utils'
import { doNothing } from '@abw/badger-utils'

const Select = ({
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
  values,
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
              text: displayValue(value, values)
            })
          )
        }
        onSelect={ option => setInput(option?.value || 0) }
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

export const RangeSelect = Context.Consumer(Select)
export default RangeSelect
