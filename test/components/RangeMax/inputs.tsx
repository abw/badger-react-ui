import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { RangeMax } from '@/src/index'
import { fail } from '@abw/badger-utils'

const RangeExample = () =>
  <RangeMax
    min={0}
    max={100}
    value={50}
    step={10}
    showInputs
  />


test(
  'range max with inputs',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <RangeExample/>
    )
    const range = container.querySelector('div.range') || fail('no range')
    const inputs = range.querySelectorAll('div.range-inputs div.range-input')
    expect(inputs.length).toBe(1)

    const val = inputs[0].querySelector('input')
    const dec = inputs[0].querySelector('div.prefix') || fail('no dec')
    const inc = inputs[0].querySelector('div.suffix') || fail('no inc')

    expect(val).toHaveValue(50)

    // value inc
    await user.click(inc)
    expect(val).toHaveValue(60)

    // value dec
    await user.click(dec)
    expect(val).toHaveValue(50)
  }
)
