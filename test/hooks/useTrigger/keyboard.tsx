import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useTrigger } from '@/src/index'

const UseTriggerExample = () => {
  const {
    triggerProps, isOpen, hasFocus
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

      <div className="grid-3 mar-t-4 gap-4">
        <StatusItem
          label="open"
          truth={isOpen}
        />
        <StatusItem
          label="focus"
          truth={hasFocus}
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
  'open and close via keyboard',
  async () => {
    const user = userEvent.setup()
    render(<UseTriggerExample/>)

    // const trigger = screen.getByTestId('trigger')
    const content = screen.getByTestId('content')
    const isOpen = screen.getByTestId('state-open')
    const hasFocus = screen.getByTestId('state-focus')

    // initial state is closed with no focus
    expect(content).toHaveTextContent('closed')
    expect(hasFocus).toHaveTextContent('false')
    expect(isOpen).toHaveTextContent('false')

    // tab to trigger to get focus...
    await user.tab()
    expect(content).toHaveTextContent('closed')
    expect(isOpen).toHaveTextContent('false')
    expect(hasFocus).toHaveTextContent('true')

    // press space bar to open
    await user.keyboard(' ')
    expect(content).toHaveTextContent('Hello World')
    expect(isOpen).toHaveTextContent('true')
    expect(hasFocus).toHaveTextContent('true')

    // press space bar again to close
    await user.keyboard(' ')
    expect(content).toHaveTextContent('closed')
    expect(isOpen).toHaveTextContent('false')
    expect(hasFocus).toHaveTextContent('true')

    // press enter this time to open
    await user.keyboard('{Enter}')
    expect(content).toHaveTextContent('Hello World')
    expect(isOpen).toHaveTextContent('true')
    expect(hasFocus).toHaveTextContent('true')

    // press escape to close
    await user.keyboard('{Escape}')
    expect(content).toHaveTextContent('closed')
    expect(isOpen).toHaveTextContent('false')
    expect(hasFocus).toHaveTextContent('true')

    // ...now tab away again
    await user.tab()
    expect(hasFocus).toHaveTextContent('false')
  }
)

