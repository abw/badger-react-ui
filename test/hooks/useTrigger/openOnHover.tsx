import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useTrigger } from '@/src/index'
import { sleep } from '@abw/badger-utils'

const UseTriggerExample = () => {
  const {
    triggerProps, isOpen, hasHover
  } = useTrigger<HTMLButtonElement>({
    openOnHover: true,
  })

  return (
    <div>
      <div className="flex gap-4 baseline">
        <button
          {...triggerProps}
          data-testid="trigger"
          className="blue"
        >
          Trigger
        </button>
        <div data-testid="content">
          { isOpen ? 'Hello World' : 'closed' }
        </div>
      </div>

      <div className="grid-3 mar-t-4 gap-4">
        <StatusItem
          label="hover"
          truth={hasHover}
        />
        <StatusItem
          label="open"
          truth={isOpen}
        />
      </div>
    </div>
  )
}

const StatusItem = ({ label, truth }: { label: string, truth: boolean }) =>
  <div>
    <div className="smaller weight-300">
      { label }
    </div>
    <div className="large weight-500 lh-100" data-testid={`state-${label}`}>
      { truth ? 'true' : 'false' }
    </div>
  </div>

it(
  'open and close on hover',
  async () => {
    const user = userEvent.setup()
    render(<UseTriggerExample/>)

    const trigger = screen.getByTestId('trigger')
    const content = screen.getByTestId('content')
    const isOpen = screen.getByTestId('state-open')
    const hasHover = screen.getByTestId('state-hover')

    // initial state is closed with no hover
    expect(content).toHaveTextContent('closed')
    expect(hasHover).toHaveTextContent('false')
    expect(isOpen).toHaveTextContent('false')

    // hover on trigger to open...
    await user.hover(trigger)
    expect(content).toHaveTextContent('Hello World')
    expect(hasHover).toHaveTextContent('true')
    expect(isOpen).toHaveTextContent('true')

    // ...and close again
    await user.hover(content)
    // sleep for a bit to accommodate close delay
    await sleep(400)
    expect(hasHover).toHaveTextContent('false')
    expect(isOpen).toHaveTextContent('false')
    expect(content).toHaveTextContent('closed')
  }
)

