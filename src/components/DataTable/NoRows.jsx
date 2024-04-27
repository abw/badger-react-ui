import React          from 'react'
import Context        from './Context.js'

const NoRows = ({
  noRowsClass='no-rows',
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
