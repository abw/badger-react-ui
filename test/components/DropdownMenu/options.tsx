import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DropdownMenu } from '@/src/index'
import { fail } from '@abw/badger-utils'

const DropdownExample = () => {
  const [selected, setSelected] = React.useState()

  return (
    <>
      <DropdownMenu
        text='Dropdown Menu'
        iconRight="angle-down"
        onSelect={setSelected}
        options={[
          'Alan Aardvark',
          'Amy Aardvark',
          'Anne Aardvark',
          'Bart Badger',
          'Betty Badger',
          'Bobby Badger',
          'Brenda Badger',
          'Brian Badger',
          'Colin Camel',
          'David Donkey',
          'Eddie Elephant',
          'Franky Ferret',
          'Gina Goat',
          'Helen Horse',
          'Ian Iguana',
          'Juliet Jackdaw',
          'Kevin Kangaroo',
          'Linda Llama',
          'Mike Monkey',
        ]}
      />
      { Boolean(selected) &&
      <div data-testid="selected">
        You selected: {selected}
      </div>
      }
    </>
  )
}

test(
  'Dropdown menu with options',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <DropdownExample/>
    )

    const dropdown = container.querySelector('div.dropdown') || fail('no dropdown')

    const trigger = dropdown.querySelector('div.trigger') || fail('no trigger')
    expect(trigger).toHaveTextContent('Dropdown Menu')

    const nobody = dropdown.querySelector('div.body')
    expect(nobody).toBeNull()

    await user.click(trigger)

    const somebody = dropdown.querySelector('div.menu') || fail('no somebody')
    expect(somebody).toBeTruthy()

    const items = somebody.querySelectorAll('div.item')
    expect(items.length).toBe(19)

    await user.click(items[7])
    const selected = screen.getByTestId('selected')
    expect(selected).toHaveTextContent('You selected: Brian Badger')
  }
)
