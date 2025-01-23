import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useTrigger } from '@/src/index'

const UseTriggerExample = () => {
  const {
    triggerProps, isOpen,
  } = useTrigger<HTMLButtonElement>()

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
    </div>
  )
}

it(
  'open and close when trigger clicked',
  async () => {
    const user = userEvent.setup()
    render(<UseTriggerExample/>)

    const trigger = screen.getByTestId('trigger')
    const content = screen.getByTestId('content')

    expect(content).toHaveTextContent('closed')

    // click on trigger to open...
    await user.click(trigger)
    expect(content).toHaveTextContent('Hello World')

    // ...and close again
    await user.click(trigger)
    expect(content).toHaveTextContent('closed')

  }
)

