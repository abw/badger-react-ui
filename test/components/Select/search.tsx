import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Select } from '@/src/index'
import { fail } from '@abw/badger-utils'

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
    const select = container.querySelector('div.select') || fail('no select')
    const inputs = select.querySelector('div.inputs') || fail('no inputs')
    await user.click(inputs)

    const items = select.querySelectorAll('div.item')
    expect(items.length).toBe(9)

    const search = select.querySelector('div.search input') || fail('no search')
    expect(search).toBeTruthy()
    await user.click(search)
    await user.keyboard('b')
    await user.click(search)
    await user.keyboard('a')
    await user.click(search)
    await user.keyboard('d')

    const badItems = select.querySelectorAll('div.item')
    expect(badItems.length).toBe(5)

    await user.click(badItems[2])
    const input = select.querySelector('div.input')
    expect(input).toHaveTextContent('Bobby Badger')

    await user.click(search)
    await user.keyboard('x')

    const none = select.querySelector('div.menu div.none')
    expect(none).toBeTruthy()
    expect(none).toHaveTextContent('No options')
  }
)
