import { useComplexState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { useComplexState } from '@abw/badger-react-ui

const UseComplexStateExample = () => {
  const [state, setters] = useComplexState(
    { badgers: 3, ferrets: 2, stoats: 1 }
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
          <td>{state.badgers + state.ferrets + state.stoats}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Row = ({ caption, value, setter }) =>
  <tr>
    <th>{caption}</th>
    <td>
      <input
        type="number"
        value={value}
        onChange={e => setter(parseInt(e.target.value))}
      />
    </td>
  </tr>


export default UseComplexStateExample