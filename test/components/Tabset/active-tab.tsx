import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Tabset } from '@/src/index'
import { fail } from '@abw/badger-utils'

const TabsetExample = ({ activeTab=1 }) => {
  const tabs = [
    { text: 'One',   content: 'This is one' },
    { text: 'Two',   content: 'This is two' },
    { text: 'Three', content: 'This is three' },
  ]
  return (
    <Tabset
      lined
      tabs={tabs}
      activeTab={activeTab}
    />
  )
}

test(
  'tabset with activeTab',
  async () => {
    const { container } = render(
      <TabsetExample/>
    )
    const tabset = container.querySelector('div.tabset') || fail('no tabset')
    expect(tabset).toBeTruthy()

    const tabs = tabset.querySelectorAll('ul.tabs li')
    expect(tabs.length).toBe(3)

    // first tabs should be active
    expect(tabs[0]).toHaveTextContent('One')
    expect(tabs[0]).not.toHaveClass('active')
    expect(tabs[1]).toHaveClass('active')
    expect(tabs[2]).not.toHaveClass('active')
    expect(tabset.querySelector('div')).toHaveTextContent('This is two')
  }
)

test(
  'tabset with invalid activeTab',
  async () => {
    const { container } = render(
      <TabsetExample activeTab={11}/>
    )
    const tabset = container.querySelector('div.tabset') || fail('no tabset')
    expect(tabset).toBeTruthy()

    const tabs = tabset.querySelectorAll('ul.tabs li')
    expect(tabs.length).toBe(3)

    // first tabs should be active
    expect(tabs[0]).not.toHaveClass('active')
    expect(tabs[1]).not.toHaveClass('active')
    expect(tabs[2]).not.toHaveClass('active')
    expect(tabset.querySelector('div')).toBeEmptyDOMElement()
  }
)

