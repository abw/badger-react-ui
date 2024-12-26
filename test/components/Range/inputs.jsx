import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Range } from '@/src/index.jsx'

const RangeExample = () =>
  <Range
    min={0}
    max={100}
    step={10}
    showInputs
  />


test(
  'range with inputs',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <RangeExample/>
    )
    const range = container.querySelector('div.range')

    // inputs
    const inputs = range.querySelectorAll('div.range-inputs div.range-input')
    expect(inputs.length).toBe(2)

    // min and max
    const minDec = inputs[0].querySelector('div.prefix')
    const minVal = inputs[0].querySelector('input')
    const minInc = inputs[0].querySelector('div.suffix')

    const maxDec = inputs[1].querySelector('div.prefix')
    const maxVal = inputs[1].querySelector('input')
    const maxInc = inputs[1].querySelector('div.suffix')

    // inputs
    expect(minVal).toHaveValue(0)
    expect(maxVal).toHaveValue(100)

    // min value inc
    await act( () => user.click(minInc) )
    expect(minVal).toHaveValue(10)

    // min value dec
    await act( () => user.click(minDec) )
    expect(minVal).toHaveValue(0)

    // max value dec
    await act( () => user.click(maxDec) )
    expect(maxVal).toHaveValue(90)

    // max value inc
    await act( () => user.click(maxInc) )
    expect(maxVal).toHaveValue(100)
  }
)
