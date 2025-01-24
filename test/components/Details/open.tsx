import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Details, Button } from '@/src/index'
import { fail } from '@abw/badger-utils'
// import { prettyDOM } from '@testing-library/dom'

const summaryText = 'This is the summary'
const contentText = 'This is the content'

const DetailsExample = () => {
  const [open, setOpen] = React.useState(true)

  return (
    <>
      <Details
        summary={summaryText}
        open={open}
      >
        {contentText}
      </Details>

      <div className="flex gap-2">
        <Button
          text="Close"
          data-testid="close"
          onClick={() => setOpen(false)}
        />
        <Button
          text="Open"
          data-testid="open"
          onClick={() => setOpen(true)}
        />
        <div data-testid="state">
          Currently {open ? 'open' : 'closed'}
        </div>
      </div>
    </>
  )
}

function checkClosed(details: Element) {
  const divs1 = details.querySelectorAll('div')
  expect(divs1.length).toBe(1)
  expect(screen.getByTestId('state')).toHaveTextContent('Currently closed')
}

function checkOpen(details: Element) {
  const divs1 = details.querySelectorAll('div')
  expect(divs1.length).toBe(2)
  expect(divs1[1]).toHaveTextContent(contentText)
  expect(screen.getByTestId('state')).toHaveTextContent('Currently open')
}

test(
  'open state',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <DetailsExample/>
    )
    const details = container.querySelector('div.details') || fail('no details')
    expect(details).toBeTruthy()

    const summary = details.querySelector('div.summary span.summary-text')
    expect(summary).toBeTruthy()
    expect(summary).toHaveTextContent(summaryText)

    checkOpen(details)

    const closeButton = screen.getByTestId('close')
    expect(closeButton).toHaveTextContent('Close')

    const openButton = screen.getByTestId('open')
    expect(openButton).toHaveTextContent('Open')

    // close
    await user.click(closeButton)
    checkClosed(details)

    // open
    await user.click(openButton)
    checkOpen(details)
  }
)
