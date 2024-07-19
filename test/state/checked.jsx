import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { CheckedState } from '@/src/index.jsx'

const CheckedStateTest = ({ checked }) => {
  const { isChecked, check, uncheck } = CheckedState({ checked })

  return (
    <>
      <div data-testid="checked">
        {isChecked ? 'true' : 'false'}
      </div>
      <button data-testid="check" onClick={check}>
        Check
      </button>
      <button data-testid="uncheck" onClick={uncheck}>
        Uncheck
      </button>
    </>
  )
}


it(
  'check and uncheck',
  async () => {
    const user = userEvent.setup()
    render(<CheckedStateTest/>)

    const checked = screen.getByTestId('checked')
    const check = screen.getByTestId('check')
    const uncheck  = screen.getByTestId('uncheck')

    expect(checked).toHaveTextContent('false')

    await act( () => user.click(check) )
    expect(checked).toHaveTextContent('true')

    await act( () => user.click(uncheck) )
    expect(checked).toHaveTextContent('false')
  }
)

it(
  'initially checked',
  async () => {
    const user = userEvent.setup()
    render(<CheckedStateTest checked={true}/>)

    const checked = screen.getByTestId('checked')
    const check = screen.getByTestId('check')
    const uncheck  = screen.getByTestId('uncheck')

    expect(checked).toHaveTextContent('true')

    await act( () => user.click(uncheck) )
    expect(checked).toHaveTextContent('false')

    await act( () => user.click(check) )
    expect(checked).toHaveTextContent('true')
  }
)

