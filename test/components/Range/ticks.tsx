import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Range } from '@/src/index.jsx'
import { fail } from '@abw/badger-utils'

const RangeExample = () =>
  <Range
    showTicks
    tickStep={20}
  />


test(
  'range with ticks',
  async () => {
    const { container } = render(
      <RangeExample/>
    )
    const range = container.querySelector('div.range') || fail('no range')
    const ticks = range.querySelectorAll('div.range-ticks div.range-tick')
    expect(ticks.length).toBe(6)
  }
)
