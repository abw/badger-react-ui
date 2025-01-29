import { NO_ROWS } from '../DataTable/constants'

const NoRows = ({
  noRowsClass=NO_ROWS,
  noRowsText='No rows selected',
}) =>
  <div className={noRowsClass}>
    {noRowsText}
  </div>

export default NoRows
