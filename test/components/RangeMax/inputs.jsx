import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { RangeMax } from '@/src/index.jsx'

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
    const range = container.querySelector('div.range')
    const inputs = range.querySelectorAll('div.range-inputs div.range-input')
    expect(inputs.length).toBe(1)

    const dec = inputs[0].querySelector('div.prefix')
    const val = inputs[0].querySelector('input')
    const inc = inputs[0].querySelector('div.suffix')

    expect(val).toHaveValue(50)

    // value inc
    await act( () => user.click(inc) )
    expect(val).toHaveValue(60)

    // value dec
    await act( () => user.click(dec) )
    expect(val).toHaveValue(50)

  }
)
