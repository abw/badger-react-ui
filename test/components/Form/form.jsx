import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Form, Field, ResetSubmit, Debug, Button, Submitting } from '@/src/index.jsx'
import { sleep } from '@abw/badger-utils'

const instruments = [
  'Guitar',
  'Bass',
  'Drums',
  'Keyboards',
  'Mandolin'
]

const quotes = [
  "Eleven, it's one louder",
  'These go up to eleven',
  'How much more black could this be',
  'The answer is none, none more black',
  'He died in a bizarre gardening accident',
  "You can't really dust for vomit",
  "No, we're all out. Do you wear black?",
  'The sustain, listen to it.',
  "What's wrong with being sexy?"
]

const songs = [
  'Stonehenge',
  'Hell Hole',
  'Sex Farm',
  "Tonight I'm Gonna Rock You",
  'Big Bottom',
  'Heavy Duty',
  'Rock and Roll Creation',
]

const searchQuotes = input =>
  quotes.filter(
    quote => quote
      .toLowerCase()
      .indexOf(input.toLowerCase()) >= 0
  )

const onSubmit = () => sleep(2000).then(
  () => ({ ok: 'All is good' })
)

const FormExample = () =>
  <Form
    className="relative"
    onSubmit={onSubmit}
    resetOnSuccess
  >
    <Field
      name="email"
      label="Email address"
      required
    />
    <Field
      name="password"
      label="Password"
      type="password"
      required
    />
    <Field
      name="instrument"
      type="uiselect"
      label="Instrument"
      options={instruments}
    />
    <Field
      name="songs"
      type="multiselect"
      label="Favourite Songs"
      options={songs}
      sortable
    />
    <Field
      name="quote"
      type="search"
      label="Favourite Quote"
      help="Hint: try 'black' or 'eleven'"
      onSearch={searchQuotes}
      // debug
    />
    <Field
      name="terms"
      type="checkbox"
      text="I like badgers"
      required
    />
    <ResetSubmit
      space
      submit={{
        color: 'green',
        iconRight: 'arrow-right',
        text: 'Register'
      }}
    />
    <Submitting/>
    { form =>
      <Button
        text="Set Example Form Values"
        className="mar-t-2 wide orange"
        onClick={
          () => form.setValues({
            email: 'nigel@spinal-tap.com',
            password: 'eleven',
            instrument: 'Guitar',
            songs: ['Stonehenge', 'Big Bottom'],
            quote: 'These go up to eleven',
            volume: 11,
            blackness: [10,40],
            terms: true
          })
        }
      />
    }
    <Debug/>
  </Form>

test(
  'form',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <FormExample/>
    )
    const table = container.querySelector('table')
    const inputs = container.querySelectorAll('input')

    // enter some text in first field
    await act( () => user.click(inputs[0]) )
    await act( () => user.keyboard('hello') )
    expectDebugTable(table, 'email', 'hello')

    // enter some text in second field
    await act( () => user.click(inputs[1]) )
    await act( () => user.keyboard('secret') )
    expectDebugTable(table, 'password', 'secret')

    // two selects
    const selects = container.querySelectorAll('div.select')
    expect(selects.length).toBe(2)

    // select instrument
    await act( () => user.click(selects[0].querySelector('div.inputs')) )
    const guitar = selects[0].querySelectorAll('div.item')[0]
    expect(guitar).toHaveTextContent('Guitar')
    await act( () => user.click(guitar) )
    expectDebugTable(table, 'instrument', 'Guitar')

    // select songs
    await act( () => user.click(selects[1].querySelector('div.inputs')) )
    const items = selects[1].querySelectorAll('div.item')
    expect(items.length).toBe(7)
    await act( () => user.click(items[0]) )
    await act( () => user.click(items[2]) )
    expectDebugTable(table, 'songs', '["Stonehenge","Sex Farm"]')

    // search
    let search = container.querySelector('div.search')
    const input = search.querySelector('input')
    await act( () => user.click(input) )
    await act( () => user.keyboard('black') )

    // search has debounce delay of 500ms
    await act( () => sleep(600) )
    const menu = search.querySelector('div.menu')
    expect(menu).toBeTruthy()
    const noneMoreBlack = menu.querySelectorAll('div.item')[1]
    await act( () => user.click(noneMoreBlack) )
    expectDebugTable(table, 'quote', 'The answer is none, none more black')

    const checkbox = container.querySelector('label.checkbox')
    await act( () => user.click(checkbox) )
    expectDebugTable(table, 'terms', 'true')
  }
)

function expectDebugTable(table, key, value) {
  const values = { }
  const rows = table.querySelectorAll('tr')
  for (let row of rows) {
    const th = row.querySelector('th').textContent
    const td = row.querySelector('td').textContent
    values[th] = td
  }
  expect(values[key]).toBe(value)
}