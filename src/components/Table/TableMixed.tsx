import Rows from './Rows.jsx'
import Columns from './Columns.jsx'
import { Themed } from '@/src/Theme'
import { splitHash } from '@abw/badger-utils'
import { TableColumns, TableColumnsRows, TableProps, TableRows } from './types.js'
import { capitalFirstLetter } from '@/src/utils/text'
import { borderClass, classes, colorClass, radiusClass, shadowClass } from '@/src/utils/classes'

const Table = ({
  className,
  border,
  color,
  radius,
  shadow,
  size,
  lined,
  celled,
  shaded,
  striped,
  wide,
  compact,
  compressed=compact,
  expanded,
  headings,
  rows,
  footings,
  columns,
  bodyRows,
  headRows = headings && [headings],
  footRows = footings && [footings],
  ...props
}: TableProps): JSX.Element => {
  const cls = classes(
    className, size,
    colorClass(color),
    borderClass(border),
    radiusClass(radius),
    shadowClass(shadow),
    { celled, lined, shaded, striped, wide, compressed, expanded }
  )
  return (
    <table className={cls}>
      { columns
        ? <Columns
            columns={
              splitHash(
                columns,
                (k: string) => ({ head: capitalFirstLetter(k) })
              ) as TableColumns
            }
            rows={(rows ?? []) as TableColumnsRows}
            {...props}
          />
        : <Rows
            headRows={headRows}
            bodyRows={bodyRows ?? rows as TableRows}
            footRows={footRows}
            {...props}
          />
      }
    </table>
  )
}

export default Themed(Table, 'Table')
