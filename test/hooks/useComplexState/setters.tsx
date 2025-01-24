import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useComplexState, UseComplexValueSet } from '@/src/index'

const ComplexStateTest = () => {
  const [state, setters] = useComplexState(
    { item_one: 1, item_two: 2 },
  )
  return (
    <table className="wide celled shaded">
      <tbody>
        <Row
          caption="Item One"
          id="item_one"
          value={state.item_one}
          setter={setters.setItem_one}
        />
        <Row
          caption="Item Two"
          id="item_two"
          value={state.item_two}
          setter={setters.setItem_two}
        />
        <tr>
          <th>Total</th>
          <td data-testid="total">{
            ((state.item_one as number) || 0) +
            ((state.item_two as number) || 0)       // FIXME
          }</td>
        </tr>
      </tbody>
    </table>
  )
}

const Row = (
  { caption, id, value, setter } :
  { caption: string, id: string, value: number, setter: UseComplexValueSet<number> }
) =>
  <tr>
    <th>{caption}</th>
    <td>
      <input
        type="number"
        data-testid={id}
        value={value || 0}
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

    await user.click(item_one)
    await user.keyboard('0')
    expect(item_one).toHaveValue(10)
    expect(total).toHaveTextContent('12')

    await user.click(item_two)
    await user.keyboard('{Backspace}11')
    expect(item_two).toHaveValue(11)
    expect(total).toHaveTextContent('21')
  }
)

