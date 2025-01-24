import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useComplexState } from '@/src/index'

const ComplexStateTest = () => {
  const [state, setters] = useComplexState(
    { one: 1, two: 'two' },
  )
  return (
    <table className="wide celled shaded">
      <tbody>
        <tr>
          <td>One</td>
          <td data-testid="one">{state.one}</td>
          <td>
            <button
              data-testid="ten"
              onClick={() => setters.setOne(10)}
            >
              10
            </button>
            <button
              data-testid="eleven"
              onClick={() => setters.setOne(11)}
            >
              11
            </button>
          </td>
        </tr>
        <tr>
          <td>Two</td>
          <td data-testid="two">{state.two}</td>
          <td>
            <button
              data-testid="hello"
              onClick={() => setters.setTwo('hello')}
            >
              hello
            </button>
            <button
              data-testid="world"
              onClick={() => setters.setTwo('world')}
            >
              11
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

it(
  'should call setters',
  async () => {
    const user = userEvent.setup()
    render(<ComplexStateTest/>)

    const one = screen.getByTestId('one')
    const two = screen.getByTestId('two')
    const ten = screen.getByTestId('ten')
    const eleven = screen.getByTestId('eleven')
    const hello = screen.getByTestId('hello')
    const world = screen.getByTestId('world')

    expect(one).toHaveTextContent('1')
    expect(two).toHaveTextContent('two')

    await user.click(ten)
    expect(one).toHaveTextContent('10')
    await user.click(eleven)
    expect(one).toHaveTextContent('11')

    await user.click(hello)
    expect(two).toHaveTextContent('hello')
    await user.click(world)
    expect(two).toHaveTextContent('world')
  }
)

