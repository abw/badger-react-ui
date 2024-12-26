import React       from 'react'
import Context     from './Context.js'
import { NO_ROWS } from './Constants.js'

const NoRows = ({
  noRowsClass=NO_ROWS,
  noRowsText='No rows selected',
  visibleColumns,
}) =>
  <tr
    className={noRowsClass}
  >
    <td colSpan={visibleColumns.length}>
      {noRowsText}
    </td>
  </tr>

export default Context.Consumer(NoRows)
