import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button, MultiSelect, SelectOption } from '@/src/index'
import { fail } from '@abw/badger-utils'

const nato = [
  { id: 'a', name: 'Alpha'   },
  { id: 'b', name: 'Bravo'   },
  { id: 'c', name: 'Charlie' },
  { id: 'd', name: 'Delta'   },
  { id: 'e', name: 'Echo'    },
  { id: 'f', name: 'Foxtrot' },
  { id: 'g', name: 'Golf'    },
  { id: 'h', name: 'Hotel'   },
  { id: 'i', name: 'India'   },
  { id: 'j', name: 'Juliet'  },
]

const animals = [
  { id: 'a', name: 'Ant'      },
  { id: 'b', name: 'Badger'   },
  { id: 'c', name: 'Cat'      },
  { id: 'd', name: 'Dog'      },
  { id: 'e', name: 'Elephant' },
]

const MultiSelectExample = () => {
  const [options, setOptions] = React.useState<SelectOption[]>(nato)
  const [using, setUsing] = React.useState('NATO')
  const changeOptions = (using: string, options: SelectOption[]) => {
    setUsing(using)
    setOptions(options)
  }
  return (
    <>
      <div className="field">
        <label>{using}</label>
        <MultiSelect
          search
          options={options}
          // debug
        />
      </div>
      <div className="flex gap-2">
        <button
          data-testid="nato"
          onClick={() => changeOptions('NATO', nato)}
        >
          NATO Phonetics
        </button>
        <Button
          data-testid="animals"
          text="Animals"
          onClick={() => changeOptions('Animals', animals)}
        />
      </div>
    </>
  )
}

test(
  'multiselect with changing options',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <MultiSelectExample/>
    )
    const multiselect = container.querySelector('div.multiselect') || fail('no multiselect')

    // click on select input
    const inputs = multiselect.querySelector('div.inputs') || fail('no inputs')
    await user.click(inputs)

    // check menu is displayed
    const items = multiselect.querySelectorAll('div.menu div.item')
    expect(items.length).toBe(10)
    for (let i = 0; i < items.length; i++) {
      expect(items[i]).toHaveTextContent(nato[i].name)
    }

    // fetch selections container
    const selections = multiselect.querySelector('div.selections') || fail('no selections')

    // select 4 options
    const test = [0, 2, 4, 6]
    const done = [ ]

    for (const t of test)  {
      const item = items[t]
      await user.click(item)
      done.push(t)
      const selected = selections.querySelectorAll('div.selection')
      expect(selected.length).toBe(done.length)
    }

    // check the options are displayed as selections
    const selected = selections.querySelectorAll('div.selection')
    expect(selected.length).toBe(test.length)
    test.forEach(
      (a, n) => expect(selected[n]).toHaveTextContent(nato[a].name)
    )

    //const natoButton = screen.getByTestId('nato')
    // Now click on the animals buttons to change the options
    const animalsButton = screen.getByTestId('animals')
    await user.click(animalsButton)

    // check the options are displayed as selections
    const reselected = selections.querySelectorAll('div.selection')
    expect(reselected.length).toBe(test.length - 1)
    test.forEach(
      (a, n) => {
        if (n === test.length - 1) {
          // There shouldn't be a final option because there's no animal with
          // an id 'g'
          return
        }
        expect(selected[n]).toHaveTextContent(animals[a].name)
      }
    )
  }
)
