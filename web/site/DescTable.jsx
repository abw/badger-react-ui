import { hasValue } from '@abw/badger-utils'
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
    <td dangerouslySetInnerHTML={{__html: codify(value)}}/>
  </tr>

// function to convert `backticks` to <code>backticks</code>
export function codify(text, codeClass='') {
  return hasValue(text)
    ? text.replace(/`([^`]*)`/g, `<code class=${codeClass}>$1</code>`)
    : ''
}

export default DescTable