import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act, screen } from '@testing-library/react'
import { DropdownMenu } from '@/src/index.jsx'

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
          { separator: true },
          'Bart Badger',
          'Betty Badger',
          'Bobby Badger',
          'Brenda Badger',
          'Brian Badger',
          { separator: true },
          'Colin Camel',
          'Calvin Cat',
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
  'Dropdown menu with separators',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <DropdownExample/>
    )

    const dropdown = container.querySelector('div.dropdown')

    const trigger = dropdown.querySelector('div.trigger')
    expect(trigger).toHaveTextContent('Dropdown Menu')

    const nobody = dropdown.querySelector('div.body')
    expect(nobody).toBeNull()

    await act( () => user.click(trigger) )
    const somebody = dropdown.querySelector('div.menu')
    expect(somebody).toBeTruthy()

    const items = somebody.querySelectorAll('div')
    expect(items.length).toBe(12)
    expect(items[3]).toHaveClass('separator')

    await act( () => user.click(items[8]) )
    const selected = screen.getByTestId('selected')
    expect(selected).toHaveTextContent('You selected: Brian Badger')
    // expect(somebody).toHaveTextContent('Hello World!')
  }
)
