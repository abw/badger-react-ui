import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { useComplexState } from '@/src/index'

const ComplexStateTest = () => {
  const [state, setters] = useComplexState({
    badgers: 3, ferrets: 2, stoats: 1
  })
  return (
    <table className="wide celled shaded" data-testid="table">
      <tbody>
        <Row
          caption="Badgers"
          id="badgers"
          value={state.badgers}
          setter={setters.setBadgers}
        />
        <Row
          caption="Ferrets"
          id="ferrets"
          value={state.ferrets}
          setter={setters.setFerrets}
        />
        <Row
          caption="Stoats"
          id="stoats"
          value={state.stoats}
          setter={setters.setStoats}
        />
        <tr>
          <th>Total</th>
          <td data-testid="total">{
            (state.badgers || 0) +
            (state.ferrets || 0) +
            (state.stoats  || 0)
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

    const badgers = screen.getByTestId('badgers')
    const ferrets = screen.getByTestId('ferrets')
    const stoats  = screen.getByTestId('stoats')
    const total   = screen.getByTestId('total')

    await waitFor(
      () => expect(badgers).toHaveValue(3)
    )

    expect(badgers).toHaveValue(3)
    expect(ferrets).toHaveValue(2)
    expect(stoats).toHaveValue(1)
    expect(total).toHaveTextContent('6')

    await user.click(badgers)
    await user.keyboard('1')
    expect(badgers).toHaveValue(31)
    expect(total).toHaveTextContent('34')

    await user.click(ferrets)
    await user.keyboard('{Backspace}11')
    expect(ferrets).toHaveValue(11)
    expect(total).toHaveTextContent('43')
  }
)
