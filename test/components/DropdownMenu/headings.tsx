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
          { heading: 'Aardvarks' },
          'Alan',
          'Amy',
          'Anne',
          { heading: 'Badgers' },
          'Bart',
          'Betty',
          'Bobby',
          'Brenda',
          'Brian',
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
  'Dropdown menu with headings',
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

    const items = somebody.querySelectorAll('div, h4')
    expect(items.length).toBe(10)
    expect(items[0].tagName).toBe('H4')

    await user.click(items[5])
    const selected = screen.getByTestId('selected')
    expect(selected).toHaveTextContent('You selected: Bart')
  }
)
