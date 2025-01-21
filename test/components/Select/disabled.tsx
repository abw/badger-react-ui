import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Select } from '@/src/index'
import { fail } from '@abw/badger-utils'

const animals = [
  'Alan Aardvark',
  'Brian Badger',
  'Colin Camel',
  'David Donkey',
  'Eddie Elephant',
  'Franky Ferret',
]

const SelectExample = () => {
  const [selected, setSelected] = React.useState()
  return (
    <>
      <Select
        options={animals}
        onSelect={setSelected}
        disabled
        debug
      />
      { selected &&
        <div data-testid="selected">
          {selected}
        </div>
      }
    </>
  )
}

test(
  'select disabled',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SelectExample/>
    )
    const select = container.querySelector('div.select') || fail('no select')
    const inputs = select.querySelector('div.inputs') || fail('no inputs')
    await act( () => user.click(inputs) )

    const items = select.querySelectorAll('div.menu div.item')
    expect(items.length).toBe(0)

  }
)
