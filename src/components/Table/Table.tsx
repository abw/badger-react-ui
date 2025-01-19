import Rows from './Rows.jsx'
import Columns from './Columns.jsx'
import { Themed } from '@/src/Theme'
import { ReactNode } from 'react'
import { splitHash } from '@abw/badger-utils'
import { TableProps } from './types.js'
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
  bodyRows = rows,
  headRows = headings && [headings],
  footRows = footings && [footings],
  ...props
}: TableProps): ReactNode => {
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
              )
            }
            rows={rows}
            {...props}
          />
        : <Rows
            headRows={headRows}
            bodyRows={bodyRows}
            footRows={footRows}
            {...props}
          />
      }
    </table>
  )
}

export default Themed(Table, 'Table')
