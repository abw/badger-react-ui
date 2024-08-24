import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Buttons, useComplexState } from '@/src/index.jsx'

const ComplexStateTest = () => {
  const [state, setters] = useComplexState(
    { badgers: 3, ferrets: 2, stoats: 1 },
    {
      onChange: state => ({
        ...state,
        total: state.badgers + state.ferrets + state.stoats
      })
    }
  )

  return (
    <table className="wide celled shaded">
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
          <td data-testid="total">{state.total}</td>
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
        value={value || 0}
        onChange={e => setter(parseInt(e.target.value))}
      />
      <Buttons
        color="orange" outline
        buttons={[
          {
            icon: 'minus',
            'data-testid': `${id}-minus`,
            onClick: () => setter(
              current => current - 1
            )
          },
          {
            icon: 'plus',
            'data-testid': `${id}-plus`,
            onClick: () => setter(
              current => current + 1
            )
          }
        ]}
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

    const badgersMinus = screen.getByTestId('badgers-minus')
    const badgersPlus  = screen.getByTestId('badgers-plus')
    const ferretsMinus = screen.getByTestId('ferrets-minus')
    const ferretsPlus  = screen.getByTestId('ferrets-plus')
    const stoatsMinus  = screen.getByTestId('stoats-minus')
    const stoatsPlus   = screen.getByTestId('stoats-plus')

    expect(badgers).toHaveValue(3)
    expect(ferrets).toHaveValue(2)
    expect(stoats).toHaveValue(1)
    expect(total).toHaveTextContent('6')

    await act( () => user.click(badgersPlus) )
    expect(badgers).toHaveValue(4)
    expect(total).toHaveTextContent('7')

    await act( () => user.click(ferretsPlus) )
    expect(ferrets).toHaveValue(3)
    expect(total).toHaveTextContent('8')

    await act( () => user.click(stoatsPlus) )
    expect(stoats).toHaveValue(2)
    expect(total).toHaveTextContent('9')

    await act( () => user.click(badgersMinus) )
    await act( () => user.click(badgersMinus) )
    expect(badgers).toHaveValue(2)
    expect(total).toHaveTextContent('7')

    await act( () => user.click(ferretsMinus) )
    await act( () => user.click(ferretsMinus) )
    expect(ferrets).toHaveValue(1)
    expect(total).toHaveTextContent('5')

    await act( () => user.click(stoatsMinus) )
    await act( () => user.click(stoatsMinus) )
    expect(stoats).toHaveValue(0)
    expect(total).toHaveTextContent('3')
  }
)

