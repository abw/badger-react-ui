import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Tabset } from '@/src/index'
import { fail } from '@abw/badger-utils'

const TabsetExample = () => {
  const tabs = [
    { text: 'One',   content: 'This is one' },
    { text: 'Two',   content: 'This is two' },
    { text: 'Three', content: 'This is three' },
    { text: 'Four',  disabled: true }
  ]
  return (
    <Tabset lined tabs={tabs} storageKey="brui-tabset-test"/>
  )
}

test(
  'tabset click',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <TabsetExample/>
    )
    const tabset = container.querySelector('div.tabset') || fail('no tabset')
    expect(tabset).toBeTruthy()

    const tabs = tabset.querySelectorAll('ul.tabs li')
    expect(tabs.length).toBe(4)

    // first tabs should be active
    expect(tabs[0]).toHaveTextContent('One')
    expect(tabs[0]).toHaveClass('active')
    expect(tabs[1]).not.toHaveClass('active')
    expect(tabs[2]).not.toHaveClass('active')
    expect(tabs[3]).not.toHaveClass('active')
    expect(tabs[3]).toHaveClass('disabled')
    expect(tabset.querySelector('div')).toHaveTextContent('This is one')

    // click on second tab
    await act( () => user.click(tabs[1]) )
    expect(tabs[1]).toHaveTextContent('Two')
    expect(tabs[0]).not.toHaveClass('active')
    expect(tabs[1]).toHaveClass('active')
    expect(tabs[2]).not.toHaveClass('active')
    expect(tabs[3]).not.toHaveClass('active')
    expect(tabset.querySelector('div')).toHaveTextContent('This is two')
  }
)

