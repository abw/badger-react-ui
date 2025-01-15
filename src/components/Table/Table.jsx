import React from 'react'
import Columns from './Columns.jsx'
import Rows from './Rows.jsx'
import { borderClass, classes, colorClass, radiusClass, shadowClass } from '@/src/utils/classes'
import { splitHash } from '@abw/badger-utils'
import { capitalFirstLetter } from '@/src/utils/text'
import { Themed }    from '@/src/Theme'

/**
 * Generate an HTML table.
 *
 * @param {string} className A CSS class
 * @param {number} border Border width
 * @param {string} color The name of a color range
 * @param {integer} radius The border radius in multiples of 0.25rem
 * @param {integer} shadow A shadow depth
 * @param {string} size A CSS size class, e.g. large, small, etc.
 * @param {boolean} lined Add the lined CSS class
 * @param {boolean} celled Add the celled CSS class
 * @param {boolean} shaded Add the shaded CSS class
 * @param {boolean} striped Add the striped CSS class
 * @param {boolean} wide Add the wide CSS class
 * @param {boolean} compressed Add the compressed CSS class
 * @param {boolean} expanded Add the expanded CSS class
 * @param {Array} headings An array of table headings
 * @param {Array} rows An array of table rows
 * @param {Array} footings An array of table footers
 * @returns {ReactNode} A React element that renders a table.
 */

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
}) => {
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
                k => ({ head: capitalFirstLetter(k) })
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
