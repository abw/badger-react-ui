import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { VisibleState } from '@/src/index.jsx'

const VisibleStateTest = ({ visible }) => {
  const { isVisible, show, hide } = VisibleState({ visible })

  return (
    <>
      <div data-testid="visible">
        {isVisible ? 'true' : 'false'}
      </div>
      <button data-testid="show" onClick={show}>
        Show
      </button>
      <button data-testid="hide" onClick={hide}>
        Hide
      </button>
    </>
  )
}


it(
  'show and hide',
  async () => {
    const user = userEvent.setup()
    render(<VisibleStateTest/>)

    const visible = screen.getByTestId('visible')
    const show = screen.getByTestId('show')
    const hide  = screen.getByTestId('hide')

    expect(visible).toHaveTextContent('false')

    await act( () => user.click(show) )
    expect(visible).toHaveTextContent('true')

    await act( () => user.click(hide) )
    expect(visible).toHaveTextContent('false')
  }
)

it(
  'initially visible',
  async () => {
    const user = userEvent.setup()
    render(<VisibleStateTest visible={true}/>)

    const visible = screen.getByTestId('visible')
    const show = screen.getByTestId('show')
    const hide  = screen.getByTestId('hide')

    expect(visible).toHaveTextContent('true')

    await act( () => user.click(hide) )
    expect(visible).toHaveTextContent('false')

    await act( () => user.click(show) )
    expect(visible).toHaveTextContent('true')
  }
)

