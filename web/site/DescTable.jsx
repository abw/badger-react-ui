import { isString } from '@abw/badger-utils'
import { hasValue } from '@abw/badger-utils'
import React from 'react'

const DescTable = ({items}) =>
  <table className="wide shaded striped celled baseline">
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
    { isString(value)
      ? <td dangerouslySetInnerHTML={{__html: codify(value)}}/>
      : <td>{value}</td>
    }
  </tr>

// function to convert `backticks` to <code>backticks</code>
export const codify = (text, codeClass='') =>
  hasValue(text)
    ? text.replace(/`([^`]*)`/g, `<code class=${codeClass}>$1</code>`)
    : ''

export default DescTable