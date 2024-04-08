import React from 'react'
import { useComplexState, Buttons } from '@/src/index.jsx'

// PRETEND: import { useComplexState, Button } from '@abw/badger-react-ui

const UseComplexStateExample = () => {
/* START */
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
          value={state.badgers}
          setter={setters.setBadgers}
        />
        <Row
          caption="Ferrets"
          value={state.ferrets}
          setter={setters.setFerrets}
        />
        <Row
          caption="Stoats"
          value={state.stoats}
          setter={setters.setStoats}
        />
        <tr>
          <th>Total</th>
          <td className="text-right">
            {state.total}
          </td>
        </tr>
      </tbody>
    </table>
  )
/* END */
}
const Row = ({ caption, value, setter }) =>
  <tr>
    <th>
      <div className="flex space">
        {caption}
        <Buttons
          color="orange" outline
          buttons={[
            {
              icon: 'minus',
              onClick: () => setter(
                current => current - 1
              )
            },
            {
              icon: 'plus',
              onClick: () => setter(
                current => current + 1
              )
            }
          ]}
        />
      </div>
    </th>
    <td className="text-right">{value}</td>
  </tr>

export default UseComplexStateExample