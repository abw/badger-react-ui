import React from 'react'

const DescTable = ({items}) =>
  <table className="wide shaded striped celled">
    <tbody>
      { items.map(
        ([name, value]) =>
          <DescRow key={name} name={name} value={value}/>
      )}
    </tbody>
  </table>

const DescRow = ({name, value}) =>
  <tr>
    <td className="font-mono">{name}</td>
    <td>{value}</td>
  </tr>

export default DescTable