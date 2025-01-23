import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useTrigger } from '@/src/index'

const UseTriggerExample = () => {
  const {
    triggerProps,
    isOpen, toggleOpen, open, close,
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
      <div className="small green flex gap-4">
        <button data-testid="open" onClick={open}>Open</button>
        <button data-testid="toggle" onClick={toggleOpen}>Toggle</button>
        <button data-testid="close" onClick={close}>Close</button>
      </div>
    </div>
  )
}

it(
  'open, toggle and close functions',
  async () => {
    const user = userEvent.setup()
    render(<UseTriggerExample/>)

    const content = screen.getByTestId('content')
    const open = screen.getByTestId('open')
    const toggle = screen.getByTestId('toggle')
    const close = screen.getByTestId('close')

    expect(content).toHaveTextContent('closed')

    // click on open button
    await user.click(open)
    expect(content).toHaveTextContent('Hello World')

    // click on toggle button
    await user.click(toggle)
    expect(content).toHaveTextContent('closed')
    await user.click(toggle)
    expect(content).toHaveTextContent('Hello World')

    // click on close button
    await user.click(close)
    expect(content).toHaveTextContent('closed')
  }
)

