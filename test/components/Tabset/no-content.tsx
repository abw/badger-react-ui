import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Tabset } from '@/src/index'
import { fail } from '@abw/badger-utils'

const TabsetExample = () => {
  const tabs = [
    { text: 'One' },
    { text: 'Two' },
  ]
  return (
    <Tabset lined tabs={tabs}/>
  )
}

test(
  'tabset with components',
  async () => {
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
    expect(tabset.querySelector('div')).toHaveTextContent('No content')
  }
)

