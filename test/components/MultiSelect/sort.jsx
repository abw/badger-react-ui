import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { MultiSelect } from '@/src/index.jsx'

const animals = [
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
]

const MultiSelectExample = () =>
  <MultiSelect options={animals} sortable/>

test(
  'multiselect with sortable',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <MultiSelectExample/>
    )
    const multiselect = container.querySelector('div.multiselect')

    // click on select input
    const inputs = multiselect.querySelector('div.inputs')
    await act( () => user.click(inputs) )

    // check menu is displayed
    const items = multiselect.querySelectorAll('div.menu div.item')
    expect(items.length).toBe(18)
    for (let i = 0; i < items.length; i++) {
      expect(items[i]).toHaveTextContent(animals[i])
    }

    // fetch selections container
    const selections = multiselect.querySelector('div.selections')

    // select 4 options
    const test = [0, 3, 6, 9]
    const done = [ ]

    for (let t of test)  {
      const item = items[t]
      await act( () => user.click(item) )
      done.push(animals[t])
      //const selections = select.querySelector('div.selections')
      const selected = selections.querySelectorAll('div.selection')
      expect(selected.length).toBe(done.length)
    }

    // check the options are displayed as selections
    const selected = selections.querySelectorAll('div.selection')
    expect(selected.length).toBe(done.length)
    done.forEach(
      (animal, n) => {
        expect(selected[n]).toHaveTextContent(animal)
      }
    )

    // click on the first and last
    await act( () => user.click(selected[0]) )
    const last = selections.querySelectorAll('div.selection')[2]
    await act( () => user.click(last) )

    // remove the first and last items from our "done" expected array
    done.shift()
    done.pop()

    // check the new set of options are displayed as selections
    const selected2 = selections.querySelectorAll('div.selection')
    expect(selected2.length).toBe(done.length)
    done.forEach(
      (animal, n) => {
        expect(selected2[n]).toHaveTextContent(animal)
      }
    )
  }
)
