import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Range } from '@/src/index.jsx'
import { fail } from '@abw/badger-utils'

const expectScale = [
  '0%', '20%', '40%', '60%', '80%', '100%'
]

const RangeExample = () =>
  <Range
    showTicks
    tickStep={20}
    showScale
    displayValue={ value => `${value}%` }
  />


test(
  'range with ticks',
  async () => {
    const { container } = render(
      <RangeExample/>
    )
    const range = container.querySelector('div.range') || fail('no range')
    const ticks = range.querySelectorAll('div.range-ticks div.range-tick')
    expect(ticks.length).toBe(expectScale.length)
    expectScale.forEach(
      (v, i) => expect(
        ticks[i].querySelector('div.range-scale-value')
      ).toHaveTextContent(
        v
      )
    )
  }
)
