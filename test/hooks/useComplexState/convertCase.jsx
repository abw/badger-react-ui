import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { useComplexState } from '@/src/index.jsx'
import { snakeToStudly } from '@abw/badger-utils'

const ComplexStateTest = () => {
  const [state, setters] = useComplexState(
    { item_one: 1, item_two: 2 },
    { convertCase: snakeToStudly }
  )

  return (
    <table className="wide celled shaded">
      <tbody>
        <Row
          caption="Item One"
          id="item_one"
          value={state.item_one}
          setter={setters.setItemOne}
        />
        <Row
          caption="Item Two"
          id="item_two"
          value={state.item_two}
          setter={setters.setItemTwo}
        />
        <tr>
          <th>Total</th>
          <td data-testid="total">{state.item_one + state.item_two}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Row = ({ caption, id, value, setter }) =>
  <tr>
    <th>{caption}</th>
    <td>
      <input
        type="number"
        data-testid={id}
        value={value}
        onChange={e => setter(parseInt(e.target.value))}
      />
    </td>
  </tr>


it(
  'should call setters',
  async () => {
    const user = userEvent.setup()
    render(<ComplexStateTest/>)

    const item_one = screen.getByTestId('item_one')
    const item_two = screen.getByTestId('item_two')
    const total   = screen.getByTestId('total')

    expect(item_one).toHaveValue(1)
    expect(item_two).toHaveValue(2)
    expect(total).toHaveTextContent('3')

    await act( () => user.click(item_one) )
    await act( () => user.keyboard('0') )
    expect(item_one).toHaveValue(10)
    expect(total).toHaveTextContent('12')

    await act( () => user.click(item_two) )
    await act( () => user.keyboard('{Backspace}11') )
    expect(item_two).toHaveValue(11)
    expect(total).toHaveTextContent('21')
  }
)

