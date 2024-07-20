import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Select } from '@/src/index.jsx'

const names = [
  'Alan Aardvark',
  'Amy Aardvark' ,
  'Anne Aardvark',
  'Bart Badger'  ,
  'Betty Badger' ,
  'Bobby Badger' ,
  'Brenda Badger',
  'Brian Badger' ,
  'Ignored Iguana',
]

const SearchExample = () =>
  <Select
    search
    options={names}
    // debug
  />


test(
  'select with search',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SearchExample/>
    )
    const select = container.querySelector('div.select')
    const inputs = select.querySelector('div.inputs')
    await act( () => user.click(inputs) )

    const items = select.querySelectorAll('div.item')
    expect(items.length).toBe(9)

    const search = select.querySelector('div.search input')
    expect(search).toBeTruthy()
    await act( () => user.click(search) )
    await act( () => user.keyboard('b') )
    await act( () => user.click(search) )
    await act( () => user.keyboard('a') )
    await act( () => user.click(search) )
    await act( () => user.keyboard('d') )

    const badItems = select.querySelectorAll('div.item')
    expect(badItems.length).toBe(5)

    await act( () => user.click(badItems[2]) )
    const input = select.querySelector('div.input')
    expect(input).toHaveTextContent('Bobby Badger')

    await act( () => user.click(search) )
    await act( () => user.keyboard('x') )

    const none = select.querySelector('div.menu div.none')
    expect(none).toBeTruthy()
    expect(none).toHaveTextContent('No options')
  }
)
