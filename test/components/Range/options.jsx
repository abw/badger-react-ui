import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Range } from '@/src/index.jsx'

const RangeExample = () => {
  const options = [
    10, 25, 50, 75, 100, 250, 500, 1000
  ]
  return (
    <>
      <Range
        options={options}
        showValues
        showInputs
        showLimits
        showTicks
      />
    </>
  )
}


test(
  'range with values',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <RangeExample/>
    )
    const range = container.querySelector('div.range')

    // limits
    const limits = range.querySelectorAll('div.range-limits div.range-scale-value')
    expect(limits.length).toBe(2)
    expect(limits[0]).toHaveTextContent('0')
    expect(limits[1]).toHaveTextContent('1000')

    // values
    const values = range.querySelector('div.range-values')
    const min = values.querySelector('div.min')
    const max = values.querySelector('div.max')
    expect(min).toHaveTextContent('10')
    expect(max).toHaveTextContent('1000')

    // inputs
    const inputs = range.querySelectorAll('div.range-inputs div.range-input')
    expect(inputs.length).toBe(2)

    // min value select...
    const minInputs = inputs[0].querySelector('div.select div.inputs')
    await act( () => user.click(minInputs) )

    // ...should have 7 items...
    const minItems = inputs[0].querySelectorAll('div.menu div.item')
    expect(minItems.length).toBe(7)
    expect(minItems[0]).toHaveTextContent('10')
    expect(minItems[6]).toHaveTextContent('500')

    // ...click on the second to set minValue to 25
    await act( () => user.click(minItems[1]) )
    expect(values.querySelector('div.min')).toHaveTextContent('25')

    // max value select...
    const maxInputs = inputs[1].querySelector('div.select div.inputs')
    await act( () => user.click(maxInputs) )

    // ...should have 6 items...
    const maxItems = inputs[1].querySelectorAll('div.menu div.item')
    expect(maxItems.length).toBe(6)
    expect(maxItems[0]).toHaveTextContent('50')
    expect(maxItems[5]).toHaveTextContent('1000')

    // ...click on second to last to set maxValue to 500
    await act( () => user.click(maxItems[4]) )
    expect(values.querySelector('div.max')).toHaveTextContent('500')
  }
)
