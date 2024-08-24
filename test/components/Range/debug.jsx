import React from 'react'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Range } from '@/src/index.jsx'
import { range } from '@abw/badger-utils'

const RangeExample = () =>
  <Range
    min={0}
    max={100}
    minValue={20}
    maxValue={80}
    step={10}
    debug
  />


test(
  'range with debug',
  async () => {
    const { container } = render(
      <RangeExample/>
    )
    const table = container.querySelector('table')

    // inputs
    const ths = table.querySelectorAll('tr th')
    const tds = table.querySelectorAll('tr td')
    expect(ths.length).toBe(10)
    expect(tds.length).toBe(10)

    const values = range(0, ths.length - 1).reduce(
      (values, n) => {
        values[ths[n].textContent] = tds[n].textContent
        return values
      },
      { }
    )
    // console.log(`values: `, values)

    // minValue and maxValue
    expect(values.min).toBe('0')
    expect(values.max).toBe('100')
    expect(values.minValue).toBe('20')
    expect(values.maxValue).toBe('80')
  }
)
