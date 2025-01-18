import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Search } from '@/src/index'
import { fail } from '@abw/badger-utils'

const animals = [
  'Alan Aardvark',
  'Amy Aardvark',
  'Anne Aardvark',
  'Bart Badger',
  'Betty Badger',
  'Bobby Badger',
  'Brenda Badger',
  'Brian Badger',
]

const SearchExample = () => {
  const onSearch = (input: string) =>
    animals.filter(
      animal =>
        animal
          .toLowerCase()
          .indexOf(input.toLowerCase()) !== -1
    )
  return (
    <>
      <Search
        onSearch={onSearch}
      />
    </>
  )
}

test(
  'search with click',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <SearchExample/>
    )
    const search = container.querySelector('div.search') || fail('no search')
    const input = search.querySelector('input') || fail('no input')
    await user.click(input)
    await user.keyboard('ar')

    // screen.debug()
    const items = search.querySelectorAll('div.menu div.item')
    expect(items.length).toBe(4)
    expect(items[0]).toHaveTextContent('Alan Aardvark')
    expect(items[1]).toHaveTextContent('Amy Aardvark')
    expect(items[2]).toHaveTextContent('Anne Aardvark')
    expect(items[3]).toHaveTextContent('Bart Badger')

    await user.click(items[3])
    expect(input).toHaveAttribute('value', 'Bart Badger')
    // screen.debug()
  }
)
