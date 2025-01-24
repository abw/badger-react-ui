import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useComplexState } from '@/src/index'

const ComplexStateTest = () => {
  const [state, setters] = useComplexState(
    { count: 10 },
  )
  return (
    <table className="wide celled shaded">
      <tbody>
        <tr>
          <td>Count</td>
          <td data-testid="count">{state.count}</td>
          <td>
            <button
              data-testid="minus"
              onClick={() => setters.setCount(state.count - 1)}
            >
              minus
            </button>
            <button
              data-testid="plus"
              onClick={() => setters.setCount( n => n + 1 )}
            >
              plus
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

it(
  'should call setters as functions',
  async () => {
    const user = userEvent.setup()
    render(<ComplexStateTest/>)

    const count = screen.getByTestId('count')
    const minus = screen.getByTestId('minus')
    const plus = screen.getByTestId('plus')

    expect(count).toHaveTextContent('10')

    await user.click(minus)
    expect(count).toHaveTextContent('9')

    await user.click(plus)
    await user.click(plus)
    expect(count).toHaveTextContent('11')
  }
)

