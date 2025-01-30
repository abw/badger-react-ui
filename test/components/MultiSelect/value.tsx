import { useState } from 'react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button, MultiSelect, SelectOption } from '@/src/index'
import { fail } from '@abw/badger-utils'

// Same as newValues but we pass value as a property instead of values

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

const values1 = ['Alan Aardvark', 'Bobby Badger']
const values2 = ['Alan Aardvark', 'Linda Llama']
const values3 = ['Gina Goat', 'Nobby Nobody']

const MultiSelectExample = () => {
  const [values, setValues] = useState<undefined|SelectOption[]>([])
  const select1 = () => setValues(values1)
  const select2 = () => setValues(values2)
  const select3 = () => setValues(values3)
  const none    = () => setValues([])
  const nothing = () => setValues(undefined)

  return (
    <div>
      <MultiSelect
        options={animals}
        search
        value={values}
      />
      <div className="flex gap-4 mar-t-4">
        <Button data-testid="ab" text="Alan and Bobby" onClick={select1}/>
        <Button data-testid="al" text="Alan and Linda" onClick={select2}/>
        <Button data-testid="gn" text="Gina and Nobby" onClick={select3}/>
        <Button data-testid="none" text="None (empty array)" onClick={none}/>
        <Button data-testid="nothing" text="Nothing (undefined)" onClick={nothing}/>
      </div>
    </div>
  )
}

test(
  'multiselect with changing values',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <MultiSelectExample/>
    )
    const multiselect = container.querySelector('div.multiselect') || fail('no multiselect')

    // Should be nothing selected
    checkSelections(multiselect, [])

    // Should be able to click different buttons to select new values
    await updateSelections(multiselect, user, 'ab', values1)
    await updateSelections(multiselect, user, 'al', values2)
    await updateSelections(multiselect, user, 'gn', [values3[0]])
    await updateSelections(multiselect, user, 'none', [])
    await updateSelections(multiselect, user, 'nothing', [])
  }
)

function checkSelections(
  multiselect: Element,
  expected: string[]
) {
  // fetch selected items
  const selected = multiselect.querySelectorAll('div.selections div.selection')
  // check the number matches
  expect(selected.length).toBe(expected.length)
  // check each text content matches
  expected.forEach(
    (name, n) => expect(selected[n]).toHaveTextContent(name)
  )
}

async function updateSelections(
  multiselect: Element,
  user: UserEvent,
  buttonId: string,
  expected: string[]
) {
  // click on a button to select new values and check they've updated
  const button = screen.getByTestId(buttonId)
  await user.click(button)
  checkSelections(multiselect, expected)
}