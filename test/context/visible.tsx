import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VisibleProvider, VisibleConsumer, useVisible } from '@/src/index'

type VisibleContextTextProps = {
  visible?: boolean
}

const IsVisible = VisibleConsumer(
  ({ isVisible }) =>
    <div data-testid="visible">
      {isVisible ? 'true' : 'false'}
    </div>
)

const VisibleControls = () => {
  const { show, hide } = useVisible()
  return (
    <div>
      <button data-testid="show" onClick={show}>
        Show
      </button>
      <button data-testid="hide" onClick={hide}>
        Hide
      </button>
    </div>
  )
}

const VisibleContextTest = ({
  visible
}: VisibleContextTextProps) => {
  return (
    <VisibleProvider visible={visible}>
      <IsVisible/>
      <VisibleControls/>
    </VisibleProvider>
  )
}

it(
  'show and hide',
  async () => {
    const user = userEvent.setup()
    render(<VisibleContextTest/>)

    const visible = screen.getByTestId('visible')
    const show = screen.getByTestId('show')
    const hide  = screen.getByTestId('hide')

    expect(visible).toHaveTextContent('false')

    await user.click(show)
    expect(visible).toHaveTextContent('true')

    await user.click(hide)
    expect(visible).toHaveTextContent('false')
  }
)

it(
  'initially visible',
  async () => {
    const user = userEvent.setup()
    render(<VisibleContextTest visible={true}/>)

    const visible = screen.getByTestId('visible')
    const show = screen.getByTestId('show')
    const hide  = screen.getByTestId('hide')

    expect(visible).toHaveTextContent('true')

    await user.click(hide)
    expect(visible).toHaveTextContent('false')

    await user.click(show)
    expect(visible).toHaveTextContent('true')
  }
)

