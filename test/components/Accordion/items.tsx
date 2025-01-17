import userEvent, { UserEvent } from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { fail } from '@abw/badger-utils'
import { Accordion } from '@/src/index'

type ItemType = {
  summary: string
  content: string
}

const items: ItemType[] = [
  { summary: 'Item One',   content: 'This is item one' },
  { summary: 'Item Two',   content: 'This is item two' },
  { summary: 'Item Three', content: 'This is item three' },
]

const AccordionExample = () =>
  <Accordion
    border lined
    radius={2}
    shadow={2}
    items={items}
  />

it(
  'should have rendered items',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<AccordionExample/>)

    const accordion = container.querySelector('div.accordion') || fail('no accordion')
    const details = accordion.querySelectorAll('div.details')

    await testItem(details[0], items[0], user)
    await testItem(details[1], items[1], user)
    await testItem(details[2], items[2], user)
  }
)

const testItem = async (details: Element, item: ItemType, user: UserEvent) => {
  // check the summary is displayed
  expect(details.querySelector('div.summary span.summary-text'))
    .toHaveTextContent(item.summary)

  // closed item should have one child - the summary
  const divs1 = details.querySelectorAll('div')
  const summary = details.querySelector('div.summary') || fail('No summary')
  expect(divs1.length).toBe(1)

  // click on the summary
  await act( () => user.click(summary) )

  // expect there to be 2 child divs now
  const divs2 = details.querySelectorAll('div')
  expect(divs2.length).toBe(2)

  // the second should contain the content
  expect(divs2[1]).toHaveTextContent(item.content)
}

