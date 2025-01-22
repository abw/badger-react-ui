import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Range } from '@/src/index'
import { fail } from '@abw/badger-utils'

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
    const range = container.querySelector('div.range') || fail('no range')

    // inputs
    const inputs = range.querySelectorAll('div.range-inputs div.range-input')
    expect(inputs.length).toBe(2)

    // min and max
    const minDec = inputs[0].querySelector('div.prefix') || fail('no minDec')
    const minVal = inputs[0].querySelector('input')
    const minInc = inputs[0].querySelector('div.suffix') || fail('no minInc')

    const maxDec = inputs[1].querySelector('div.prefix') || fail('no maxDec')
    const maxVal = inputs[1].querySelector('input')
    const maxInc = inputs[1].querySelector('div.suffix') || fail('no maxInc')

    // inputs
    expect(minVal).toHaveValue(0)
    expect(maxVal).toHaveValue(100)

    // min value inc
    await user.click(minInc)
    expect(minVal).toHaveValue(10)

    // min value dec
    await user.click(minDec)
    expect(minVal).toHaveValue(0)

    // max value dec
    await user.click(maxDec)
    expect(maxVal).toHaveValue(90)

    // max value inc
    await user.click(maxInc)
    expect(maxVal).toHaveValue(100)
  }
)
