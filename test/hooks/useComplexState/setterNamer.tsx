import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UseComplexSetter, useComplexState } from '@/src/index'

type Values = {
  item_one: number,
  item_two: number
  item_three: number
}

type Setters = {
  set_item_one: (n: number) => void,
  set_item_two: (n: number) => void
  set_item_three: UseComplexSetter<number>
}

const ComplexStateTest = () => {
  const [state, setters] = useComplexState<Values,Setters>(
    { item_one: 1, item_two: 2, item_three: 3 },
    { setterNamer: key => `set_${key}` }
  )

  return (
    <table className="wide celled shaded">
      <tbody>
        <Row
          caption="Item One"
          id="item_one"
          value={state.item_one}
          setter={setters.set_item_one}
        />
        <Row
          caption="Item Two"
          id="item_two"
          value={state.item_two}
          setter={setters.set_item_two}
        />
        <tr>
          <th>Three</th>
          <td>
            <div data-testid="item_three">
              {state.item_three}
            </div>
            <button data-testid="six" onClick={() => setters.set_item_three(6)}>
              6
            </button>
            <button data-testid="plus3" onClick={() => setters.set_item_three( n => n + 3 )}>
              plus 3
            </button>
          </td>
        </tr>
        <tr>
          <th>Total</th>
          <td data-testid="total">{
            (state.item_one || 0) +
            (state.item_two || 0) +
            (state.item_three || 0)
          }</td>
        </tr>
      </tbody>
    </table>
  )
}

const Row = (
  { caption, id, value, setter }:
  { caption: string, id: string, value: number, setter: (n: number) => void }
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

    const item_one   = screen.getByTestId('item_one')
    const item_two   = screen.getByTestId('item_two')
    const item_three = screen.getByTestId('item_three')
    const total      = screen.getByTestId('total')
    const six        = screen.getByTestId('six')
    const plus3      = screen.getByTestId('plus3')

    expect(item_one).toHaveValue(1)
    expect(item_two).toHaveValue(2)
    expect(item_three).toHaveTextContent('3')
    expect(total).toHaveTextContent('6')

    await user.click(item_one)
    await user.keyboard('0')
    expect(item_one).toHaveValue(10)
    expect(total).toHaveTextContent('15')

    await user.click(item_two)
    await user.keyboard('{Backspace}11')
    expect(item_two).toHaveValue(11)
    expect(total).toHaveTextContent('24')

    await user.click(six)
    expect(item_three).toHaveTextContent('6')
    expect(total).toHaveTextContent('27')

    await user.click(plus3)
    expect(item_three).toHaveTextContent('9')
    expect(total).toHaveTextContent('30')

    await user.click(plus3)
    expect(item_three).toHaveTextContent('12')
    expect(total).toHaveTextContent('33')
  }
)

