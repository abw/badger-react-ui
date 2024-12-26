import React from 'react'
import { codify } from './DescTable.jsx'

const PropsTable = ({items}) =>
  <table className="wide shaded striped celled">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      { items.map(
        ([name, def, desc]) =>
          <PropRow key={name} name={name} defaultValue={def} description={desc}/>
      )}
    </tbody>
  </table>

const PropRow = ({name, defaultValue, description}) =>
  <tr>
    <td className="font-mono">{name}</td>
    <td className="font-mono">{defaultValue}</td>
    <td dangerouslySetInnerHTML={{__html: codify(description)}}/>
  </tr>

export default PropsTable