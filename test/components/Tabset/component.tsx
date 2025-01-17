import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Tabset } from '@/src/index'
import { fail } from '@abw/badger-utils'

const One = () =>
  <div data-testid="one">This is one</div>

const Two = () =>
  <div data-testid="two">This is two</div>

const TabsetExample = () => {
  const tabs = [
    { text: 'One', Component: One },
    { text: 'Two', Component: Two },
  ]
  return (
    <Tabset lined tabs={tabs}/>
  )
}

test(
  'tabset with components',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <TabsetExample/>
    )
    const tabset = container.querySelector('div.tabset') || fail('no tabset')
    expect(tabset).toBeTruthy()

    const tabs = tabset.querySelectorAll('ul.tabs li')
    expect(tabs.length).toBe(2)

    // first tabs should be active
    expect(tabs[0]).toHaveTextContent('One')
    expect(tabs[0]).toHaveClass('active')
    expect(tabs[1]).not.toHaveClass('active')
    expect(screen.getByTestId('one')).toHaveTextContent('This is one')
    expect(screen.queryByTestId('two')).toBeFalsy()

    // click on second tab
    await act( () => user.click(tabs[1]) )
    expect(tabs[1]).toHaveTextContent('Two')
    expect(tabs[0]).not.toHaveClass('active')
    expect(tabs[1]).toHaveClass('active')
    expect(screen.queryByTestId('one')).toBeFalsy()
    expect(screen.getByTestId('two')).toHaveTextContent('This is two')
  }
)

