import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Select, Icon } from '@/src/index.jsx'

const addresses = [
  {
    id:       10,
    line1:    '10 St. Hubbins Road',
    town:     'Squatney',
    postcode: 'SQ1 10T',
  },
  {
    id:       11,
    line1:    '11 Tufnel Way',
    town:     'Squatney',
    postcode: 'SQ1 11T',
  },
  {
    id:       12,
    line1:    '12 Smalls Avenue',
    town:     'Squatney',
    postcode: 'SQ1 12T',
  }
]

const displayAddress = address =>
  <div className="flex gap-2 baseline">
    <Icon name="star" color="yellow-50"/>
    <div>
      <div>{address.line1}</div>
      <div>{address.town}</div>
      <div className="weight-600">{address.postcode}</div>
    </div>
  </div>

const SelectExample = () =>
  <Select
    options={addresses}
    displayOption={displayAddress}
    displayValue={displayAddress}
  />

test(
  'select with displayOption and displayValue',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SelectExample/>
    )
    const select = container.querySelector('div.select')
    const inputs = select.querySelector('div.inputs')
    await act( () => user.click(inputs) )

    const items = select.querySelectorAll('div.item')
    expect(items.length).toBe(3)

    expectItem(items[0], addresses[0])
    expectItem(items[1], addresses[1])
    expectItem(items[2], addresses[2])

    await act( () => user.click(items[1]) )
    const selected = select.querySelector('div.inputs > div.input > div > div')
    expectItem(selected, addresses[1])
    // screen.debug()
  }
)

function expectItem(item, address) {
  const divs = item.querySelectorAll(':scope > div > div > div')
  expect(divs.length).toBe(3)
  expect(divs[0]).toHaveTextContent(address.line1)
  expect(divs[1]).toHaveTextContent(address.town)
  expect(divs[2]).toHaveTextContent(address.postcode)
  expect(divs[2]).toHaveClass('weight-600')
}
