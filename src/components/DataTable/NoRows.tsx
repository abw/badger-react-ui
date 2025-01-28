import React       from 'react'
import Context     from './Context'
import { NO_ROWS } from './constants'

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
