import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
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
        // debug
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
  'select with click',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SelectExample/>
    )
    const select = container.querySelector('div.select') || fail('no select')
    const inputs = select.querySelector('div.inputs') || fail('no inputs')
    await user.click(inputs)

    const items = select.querySelectorAll('div.menu div.item')
    expect(items.length).toBe(6)

    await user.click(items[0])
    expect(screen.getByTestId('selected')).toHaveTextContent('Alan Aardvark')

    await user.click(items[2])
    expect(screen.getByTestId('selected')).toHaveTextContent('Colin Camel')

    await user.click(items[4])
    expect(screen.getByTestId('selected')).toHaveTextContent('Eddie Elephant')
  }
)

/*
test(
  'select with keyboard',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SelectExample/>
    )
    const select = container.querySelector('div.select')
    const inputs = select.querySelector('div.inputs')
    expect(inputs).toBeTruthy()

    await act( () => user.click(inputs) )
    const items = select.querySelectorAll('div.menu div.item')
    expect(items.length).toBe(6)

    await act( () => user.keyboard('{ArrowDown}') )
    await act( () => user.keyboard('{ArrowUp}') )
    await act( () => user.keyboard('{Enter}') )
    await act( () => user.keyboard('{Backspace}') )
    // screen.debug()
    // expect(screen.getByTestId('selected')).toHaveTextContent('Alan Aardvark')
  }
)
*/