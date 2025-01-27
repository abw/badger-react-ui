import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Select, SelectOptions } from '@/src/index'
import { fail } from '@abw/badger-utils'
import { SelectOption } from '@/src/utils'

type Person = {
  id: 'alan',
  name: 'Alan Aardvark'
}

const names: SelectOptions = [
  { heading: 'Aardvarks' },
  { id: 'alan',     name: 'Alan Aardvark',  },
  { id: 'amy',      name: 'Amy Aardvark',   },
  { id: 'anne',     name: 'Anne Aardvark',  },
  { heading: 'Badgers' },
  { id: 'bart',     name: 'Bart Badger',    },
  { id: 'betty',    name: 'Betty Badger',   },
  { id: 'bobby',    name: 'Bobby Badger',   },
  { id: 'brenda',   name: 'Brenda Badger',  },
  { id: 'brian',    name: 'Brian Badger',   },
  { separator: true },
  { id: 'ignored',  name: 'Ignored Iguana', disabled: true }
]

const SelectExample = ({ value }: { value?: string | SelectOption }) => {
  const [selected, setSelected] = React.useState<Person>()
  return (
    <>
      <Select
        search
        options={names}
        onSelect={setSelected}
        value={value}
        // debug
      />
      { selected &&
      <div data-testid="selected">
        {selected.name}
      </div>
      }
    </>
  )
}


test(
  'select with options',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SelectExample/>
    )
    const select = container.querySelector('div.select') || fail('no select')
    const inputs = select.querySelector('div.inputs') || fail('no inputs')

    await user.click(inputs)
    const items = select.querySelectorAll('div.item')
    expect(items.length).toBe(11)

    expect(items[0]).toHaveClass('heading')

    await user.click(items[2])

    expect(container.querySelector('div.select div.input'))
      .toHaveTextContent('Amy Aardvark')

    expect(screen.getByTestId('selected'))
      .toHaveTextContent('Amy Aardvark')
    // screen.debug()

  }
)

test(
  'pre-selected value from option',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SelectExample value={names[6]}/>
    )
    const select = container.querySelector('div.select') || fail('no select')
    const inputs = select.querySelector('div.inputs') || fail('no inputs')
    const input = inputs.querySelector('div.input') || fail('no input')

    expect(input).toHaveTextContent('Betty Badger')

    await user.click(inputs)
    // screen.debug()

    const items = select.querySelectorAll('div.item')
    expect(items.length).toBe(11)

    expect(items[6]).toHaveClass('active')
  }
)

test(
  'pre-selected value from id',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SelectExample value="bobby"/>
    )
    const select = container.querySelector('div.select') || fail('no select')
    const inputs = select.querySelector('div.inputs') || fail('no inputs')
    const input = inputs.querySelector('div.input') || fail('no input')

    expect(input).toHaveTextContent('Bobby Badger')

    await user.click(inputs)
    // screen.debug()

    const items = select.querySelectorAll('div.item')
    expect(items.length).toBe(11)

    expect(items[7]).toHaveClass('active')
  }
)
