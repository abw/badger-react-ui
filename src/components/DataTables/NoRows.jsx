import React       from 'react'
import { NO_ROWS } from '../DataTable/Constants.js'

const NoRows = ({
  noRowsClass=NO_ROWS,
  noRowsText='No rows selected',
}) =>
  <div
    className={noRowsClass}
  >
    {noRowsText}
  </div>

export default NoRows
